import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import defaultUser from "../../assets/icons/defaultUser.svg"
import "./QuestionModal.scss";


const QuestionModal = ({ onClose, isModalOpen, newTopic, setNewTopic, newQuestion, setNewQuestion, onSubmitQuestion }) => {
  const [topicError, setTopicError] = useState(false);

  const { getQuestionsList, randomUser2 } = useGlobalContext()

  const handleSubmit = () => {
    if (newTopic.trim() === "" || newQuestion.trim() === "") {
      setTopicError(true);
      return;
    }

    onSubmitQuestion();
    setNewTopic("");
    setNewQuestion("");
    setTopicError(false);
    getQuestionsList()
  };

  const handleCancel = () => {
    setNewTopic("");
    setNewQuestion("");
    onClose()
  }

  return (
    <>
      {isModalOpen && (
        <div className="question-modal">
          <div className="question-modal__container">
          
            <img src={randomUser2?.profilePhoto ? randomUser2?.profilePhoto : defaultUser} alt="Profile Pic" className="question-modal__profile--img"/>
            <div className="question-modal__form">
              <input
                required
                className={`question-modal__topic ${topicError ? "error" : ""}`}
                type="text"
                placeholder="Question"
                value={newTopic}
                onChange={(e) => {
                  setNewTopic(e.target.value);
                  setTopicError(false); 
                }}
              />
              <textarea
                required
                className={`question-modal__description ${topicError ? "error" : ""}`}
                type="text"
                placeholder="Description"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
              />
              <div className="question-modal__form--buttons">
                <button className="question-modal__cancel--button" onClick={handleCancel}>Cancel</button>
                <button className="question-modal__post--button" onClick={handleSubmit}>Post</button>
              </div>
            </div>
          </div>
         </div>
      )}
    </>
  );
};

export default QuestionModal;
