// import { Routes, Route } from "react-router-dom";
// import Home from "../src/pages/HomePage/HomePage";
import { useEffect, useState } from "react";
// import "./App.css";
import { database } from "./config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";
import AskQuestion from "./components/AskQuestion/AskQuestion";
import QuestionModal from "./components/QuestionModal/QuestionModal";
import PostModal from "./components/PostModal/PostModal";

function App() {
  const [userList, setUserList] = useState([]);
  const [questionsList, setQuestionsList] = useState([]);
  const [answersList, setAnswersList] = useState([]);

  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newTopic, setNewTopic] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  // const [newUserDOB, setNewUserDOB] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPostModal, setPostModal] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const closePost = () => setPostModal(false);

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
      closeModal();
      setPostModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
     
      <AskQuestion openModal={openModal} />
      {isModalOpen && (
          <QuestionModal
            onClose={closeModal}
            isModalOpen={isModalOpen}
            setNewTopic={setNewTopic}
            setNewQuestion={setNewQuestion}
            onSubmitQuestion={onSubmitQuestion}
          />
        )}
          {isPostModal && (
          <PostModal closePost={closePost} />
        )}
    </div>
  );
}

export default App;
