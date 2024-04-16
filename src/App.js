// import { Routes, Route } from "react-router-dom";
// import Home from "../src/pages/HomePage/HomePage";
import { useEffect, useState } from "react";
// import "./App.css";
import { database } from "./config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

function App() {
  const [userList, setUserList] = useState([]);
  const [questionsList, setQuestionsList] = useState([]);
  const [answersList, setAnswersList] = useState([]);

  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newTopic, setNewTopic] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  // const [newUserDOB, setNewUserDOB] = useState(0);

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
              <p>
                {user.fullName}, {user.email}
              </p>
              <p>{user.id}</p>
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
          console.log({ question });
          return (
            <div
              key={question.id}
              style={{ border: "black 2px solid", width: "300px" }}
            >
              <p>
                {question.topic}, {question.questionContent}
              </p>
              <p>{question.id}</p>
            </div>
          );
        })}
      </div>

      <div>
        {answersList.map((answer) => {
          {
            console.log({ answer });
          }
          return (
            <div
              key={answer.id}
              style={{ border: "black 2px solid", width: "300px" }}
            >
              <p>
                User ID: {answer.userID}, Content:{answer.answerContent},
                Question ID:
                {answer.questionID}
              </p>
              <p>{answer.id}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
