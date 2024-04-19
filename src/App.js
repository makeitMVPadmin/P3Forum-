
import { useEffect, useState } from "react";
import firebase from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { database } from "./config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";
import AskQuestion from "./components/AskQuestion/AskQuestion";
import QuestionModal from "./components/QuestionModal/QuestionModal";
import PostModal from "./components/PostModal/PostModal";

function App() {

  const [newTopic, setNewTopic] = useState("");
  const [newQuestion, setNewQuestion] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);
  const [isPostModal, setPostModal] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const closePost = () => setPostModal(false);

  const questionsCollection = collection(database, "Questions");


  const onSubmitQuestion = async (data) => {
    const time = Date.now();
    
    firebase.database().ref('-default-/data/~2FQuestions').set({
      timestamp: time
    });

    try {
      await addDoc(questionsCollection, {
        topic: newTopic,
        content: newQuestion,
        createdAt: new Date(time).toLocaleString('en-US', { timeZone: 'UTC' })
      });


      closeModal();
      setPostModal(true);
      
    } catch (error) {
      console.error(error);
      alert("unsuccessfull post, please submit your question again");
      return;
    }
  };

  return (
    <div className="App">
     
      <AskQuestion openModal={openModal} />
      {isModalOpen && (
          <QuestionModal
            onClose={closeModal}
            isModalOpen={isModalOpen}
            newTopic={newTopic}
            setNewTopic={setNewTopic}
            newQuestion={newQuestion}
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
