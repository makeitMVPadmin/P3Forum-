import React, { useContext, useState, useEffect } from "react";
//This is firebase stuff
import { database } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";

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
        console.log({ data });
        const filteredUsersData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        console.log({ filteredUsersData });
        setUserList(filteredUsersData);
        } catch (error) {
        console.error(error);
        }
    };

    const getQuestionsList = async () => {
        try {
        const data = await getDocs(questionsCollection);
        console.log({ data });
        const filteredQuestionsData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        console.log({ filteredQuestionsData });
        setQuestionsList(filteredQuestionsData);
        } catch (error) {
        console.error(error);
        }
    };

    const getAnswersList = async () => {
        try {
        const data = await getDocs(answersCollection);
        console.log({ data });
        const filteredAnswersData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        console.log({ filteredAnswersData });
        setQuestionsList(filteredAnswersData);
        } catch (error) {
        console.error(error);
        }
    };

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
                usersCollection,
                questionsCollection,
                getUserList,
                getQuestionsList,           
            }}>
                {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };