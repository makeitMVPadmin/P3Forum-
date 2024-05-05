import React, { useContext, useState, useEffect } from "react";
import { database } from "./config/firebase";
import { getDocs, collection, Timestamp, doc, updateDoc, increment } from "firebase/firestore";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [userList, setUserList] = useState([]);
    const [questionsList, setQuestionsList] = useState([]);
    const [answersList, setAnswersList] = useState([]);

    const usersCollection = collection(database, "Users");
    const questionsCollection = collection(database, "Questions");
    const answersCollection = collection(database, "Answers");

    const getUserList = async () => {
        try {
        const data = await getDocs(usersCollection);
        const filteredUsersData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        setUserList(filteredUsersData);
        } catch (error) {
        console.error(error);
        }
    };

    const getQuestionsList = async () => {
        try {
        const data = await getDocs(questionsCollection);
        const filteredQuestionsData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        setQuestionsList(filteredQuestionsData);
        } catch (error) {
        console.error(error);
        }
    };

    const getAnswersList = async () => {
        try {
        const data = await getDocs(answersCollection);
        const filteredAnswersData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        setAnswersList(filteredAnswersData);
        } catch (error) {
        console.error(error);
        }
    };

    const currentDate = new Date();
      const timeZoneOffsetInMilliseconds = -6 * 60 * 60 * 1000;
      const adjustedDate = new Date(currentDate.getTime() + timeZoneOffsetInMilliseconds);
        adjustedDate.setHours(adjustedDate.getHours() + 6);
      const timestamp = Timestamp.fromDate(adjustedDate);

    const randomUser = () => {
        return userList[Math.floor(Math.random() * userList.length)];
    }
    const randomUser1 = randomUser();
    const randomUser2 = randomUser();

    const incrementVotes = async (id, collectionName, voteType) => {
        try {
        const docRef = doc(database, collectionName, id);
          await updateDoc(docRef, {
            [voteType]: increment(1)
          })
        } catch(err) {
          console.log(err)
        }
        getQuestionsList()
        getAnswersList()
      }

      const compareVotes = (a, b) => {
        const voteDifferenceA = a.upVotes - a.downVotes
        const voteDifferenceB = b.upVotes - b.downVotes
    
        if(voteDifferenceA === voteDifferenceB) {
          return b.createdAt - a.createdAt
        } else {
          return voteDifferenceB - voteDifferenceA;
        }
      }

    useEffect(() => {
        getUserList();
        getQuestionsList();
        getAnswersList();
    }, []);

    return (
        <AppContext.Provider
            value={{
                userList, setUserList,
                questionsList, setQuestionsList,
                answersList, setAnswersList,
                answersCollection,
                usersCollection,
                questionsCollection,
                getUserList,
                getQuestionsList,
                getAnswersList, 
                randomUser1,
                randomUser2,  
                timestamp,
                incrementVotes,
                compareVotes
            }}>
                {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };