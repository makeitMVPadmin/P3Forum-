import { useState } from "react";
import { useGlobalContext } from "../../context";
import { addDoc } from "firebase/firestore";
import AskQuestion from "../../components/AskQuestion/AskQuestion";
import QuestionModal from "../../components/QuestionModal/QuestionModal";
import PostModal from "../../components/PostModal/PostModal";
import Questions from "../../components/Questions/Questions"

const AskQuestionsContainer = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [isPostModal, setPostModal] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const closePost = () => setPostModal(false);

  const { questionsCollection } = useGlobalContext();
  const [newTopic, setNewTopic] = useState("");
  const [newQuestion, setNewQuestion] = useState("");

  const {timestamp, randomUser2} = useGlobalContext()

const onSubmitQuestion = async () => {
  try {
    await addDoc(questionsCollection, {
      topic: newTopic,
      questionContent: newQuestion,
      communityID: null,
      downVotes: 0,
      upVotes: 0,
      createdAt: timestamp,
      userID: randomUser2.userID
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
    <div className="askQuestionsContainer">
      
      {isModalOpen ? (
        <QuestionModal
          onClose={closeModal}
          isModalOpen={isModalOpen}
          newTopic={newTopic}
          setNewTopic={setNewTopic}
          newQuestion={newQuestion}
          setNewQuestion={setNewQuestion}
          onSubmitQuestion={onSubmitQuestion}
        />
      ) : (
        <AskQuestion openModal={openModal} />
      )}

      {isPostModal && <PostModal closePost={closePost} />}

    </div>
  );
};

export default AskQuestionsContainer;