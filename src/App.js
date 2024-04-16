// import { Routes, Route } from "react-router-dom";
// import Home from "../src/pages/HomePage/HomePage";
import { useEffect, useState } from "react";
// import "./App.css";
import { database } from "./config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

function App() {
  const [userList, setUserList] = useState([]);
  const [questionsList, setQuestionsList] = useState([]);

  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newTopic, setNewTopic] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  // const [newUserDOB, setNewUserDOB] = useState(0);

  const usersCollection = collection(database, "Users");
  const questionsCollection = collection(database, "Questions");

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

  useEffect(() => {
    getUserList();
    getQuestionsList();
  }, []);

  const onSubmitUser = async () => {
    try {
      await addDoc(usersCollection, {
        fullName: newUserName,
        email: newUserEmail,
      });

      getUserList();
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitQuestion = async () => {
    try {
      await addDoc(questionsCollection, {
        topic: newTopic,
        content: newQuestion,
      });

      getQuestionsList();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <div>
        <input
          placeholder="Name..."
          onChange={(e) => setNewUserName(e.target.value)}
        ></input>
        <input
          placeholder="Email..."
          onChange={(e) => setNewUserEmail(e.target.value)}
        ></input>
        <button onClick={onSubmitUser}>Submit User</button>
      </div>

      <div>
        {userList.map((user) => {
          return (
            <div
              key={user.id}
              style={{ border: "black 2px solid", width: "300px" }}
            >
              <h2>
                {user.fullName}, {user.email}
              </h2>
              <h2>{user.id}</h2>
            </div>
          );
        })}
      </div>

      <div>
        <input
          placeholder="Topic..."
          onChange={(e) => setNewTopic(e.target.value)}
        ></input>
        <input
          placeholder="Question..."
          onChange={(e) => setNewQuestion(e.target.value)}
        ></input>
        <button onClick={onSubmitQuestion}>Submit Question</button>
      </div>

      <div>
        {questionsList.map((question) => {
          return (
            <div
              key={question.id}
              style={{ border: "black 2px solid", width: "300px" }}
            >
              <h2>
                {question.topic}, {question.content}
              </h2>
              <h2>{question.id}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
