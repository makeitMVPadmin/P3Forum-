import "./HomePage.scss";
import { useState } from "react";
import { useGlobalContext } from "../../context";
import Answers from "../../components/Answers/Answers";
import AskQuestion from "../../components/AskQuestion/AskQuestion";
import QuestionModal from "../../components/QuestionModal/QuestionModal";
import PostModal from "../../components/PostModal/PostModal";

const Home = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [isPostModal, setPostModal] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const closePost = () => setPostModal(false);

  const { questionsCollection } = useGlobalContext();
  const [newTopic, setNewTopic] = useState("");
  const [newQuestion, setNewQuestion] = useState("");

const onSubmitQuestion = async () => {
  const time = Date.now();
  
  // firebase.database().ref('-default-/data/~2FQuestions').set({
  //   timestamp: time
  // });

  try {
    await addDoc(questionsCollection, {
      topic: newTopic,
      content: newQuestion,
      communityID: null,
      downVotes: 0,
      upVotes: 0,
      // createdAt: new Date(time).toLocaleString('en-US', { timeZone: 'UTC' })
      createdAt: time
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
    <div className="home">

      <AskQuestion openModal={openModal} />
      {/* <Answers /> */}
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
      {isPostModal && <PostModal closePost={closePost} />}

      <Answers />

    </div>
  );
};

export default Home;
