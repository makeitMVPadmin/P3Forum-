
// import { useGlobalContext } from ""../../context.jsx";
import React, { useState } from "react";
import "./QuestionModal.scss";


const QuestionModal = ({ onClose, isModalOpen, setNewTopic, setNewQuestion, setPostModal, onSubmitQuestion }) => {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [topicError, setTopicError] = useState(false);

  const handleSubmit = () => {
    if (topic.trim() === "" || description.trim() === "") {
      setTopicError(true);
      return;
    }

    onSubmitQuestion();
    setTopic("");
    setDescription("");
    setTopicError(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="question-modal--overlay">
          <div className="question-modal__container">
            <button className="close-button" onClick={onClose}>X</button>
            <div className="question-modal__profile--img"></div>

            <div className="question-modal__form">
              <input
                required
                className={`question-modal__topic ${topicError ? "error" : ""}`}
                type="text"
                placeholder="Title"
                value={topic}
                onChange={(e) => {
                  setTopic(e.target.value);
                  setTopicError(false); 
                }}
              />
              <input
                required
                className={`question-modal__description ${topicError ? "error" : ""}`}
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="question-modal__form--buttons">
                <button className="question-modal__cancel--button" onClick={onClose}>Cancel</button>
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
