// import { Routes, Route } from "react-router-dom";
// import Home from "../src/pages/HomePage/HomePage";
// import "./App.css";
import { useEffect, useState } from "react";
import { addDoc } from "firebase/firestore";
import { useGlobalContext } from "./context";

function App() {
  const { userList, questionsList, answersList, usersCollection, getUserList, questionsCollection, getQuestionsList  } = useGlobalContext();

  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newTopic, setNewTopic] = useState("");
  const [newQuestion, setNewQuestion] = useState("");

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
