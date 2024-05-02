import { useState } from "react";
import { useGlobalContext } from "../../context";
import { addDoc } from "firebase/firestore";
import reply from "../../assets/reply-arrow.svg";
import downvote from "../../assets/downvote.svg"
import share from "../../assets/share.svg"
import upvote from "../../assets/upvote.svg"
import defaultUser from "../../assets/icons/defaultUser.svg"
import "./Answers.scss";

import UnsuccessfulPost from "../UnsuccessfulPost/UnsuccessfulPost";

function Answers({ questionID }) {
  const {
    userList,
    answersList,
    answersCollection,
    getAnswersList,
    randomUser1,
    timestamp,
    incrementVotes,
    compareVotes
  } = useGlobalContext();

  const [newAnswer, setNewAnswer] = useState("");
  const [postedAnswers, setPostedAnswers] = useState([]);
  const [isErrorModal, setErrorModal] = useState(false);

  const onClose = () => setErrorModal(false);
  const filteredAnswerArray = answersList.filter(answer => answer.questionID === questionID);

  const answersWithUsers = filteredAnswerArray.sort((compareVotes)).map(answer => {
    const user = userList.find(user => user.userID === answer.userID);
    const date = new Date(answer.createdAt.seconds * 1000); 
    const formattedDate = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

    return {
      answer: answer,
      user: user.fullName,
      profilePhoto: user.profilePhoto,
      createdAt: formattedDate
    };
  });
  
  const onPostAnswer = async () => {
    try {
      if (!newAnswer.trim()) {
        console.log("Please enter a valid answer.");
        return;
      }
      
      await addDoc(answersCollection, {
        answerContent: newAnswer,
        createdAt: timestamp,
        questionID: questionID,
        userID: randomUser1.id,
        upVotes: 0,
        downVotes: 0
      });
      
      setNewAnswer("");
      setPostedAnswers([...postedAnswers, { answerContent: newAnswer }]);
      getAnswersList()

    } catch (error) {
      console.error(error);
      setErrorModal(true);
    }
  };

  const onCancel = (e) => {
    setNewAnswer("");
  };

  const upVote = (e, answerID) => {
    e.preventDefault()
    incrementVotes(answerID, "Answers", "upVotes")
  }

  const downVote = (e, answerID) => {
    e.preventDefault()
    incrementVotes(answerID, "Answers", "downVotes")
  }

  return (
    <div className="answers">
      <div className="answers__form-container">
        <div className="answers__form">
          <textarea
            className="answers__input"
            placeholder="Write a comment..."
            type="text"
            onChange={(e) => setNewAnswer(e.target.value)}
            value={newAnswer}
          />
          <div className="answers__buttons-container">
            <button className="answers__button-cancel" onClick={onCancel}>Cancel</button>
            <button className="answers__button-post" onClick={onPostAnswer}>Post</button>
          </div>
        </div>
      </div>
      {answersWithUsers.map(({ answer, user, profilePhoto, createdAt }) => (
        <div key={answer.id} className="answers__container">
          <div className="answers__user">
            <img className='answers__avatar' src={profilePhoto ? profilePhoto : defaultUser} alt="Profile pic" />
            <p className="answers__user-text"> {user !== null && user !== '' ? user : 'Anonymous'} </p>
            <p className="answers__user-text">•</p>
            <p className="answers__user-text">{createdAt}</p>
          </div>
          <div className="answers__content">
            <p className="answers__content-text">{answer.answerContent}</p>
          </div>
          <div className='answers__actions'>
       
            <div className='answers__icon-container'>
              <div className='answers__actions-container'>
                <img className='answers__comment' src={reply} alt="test" />
                <p className='answers__value'>Reply</p>
              </div>
            </div>
            <div className='answers__up-down-container'>
              <div onClick={(e) => upVote(e, answer.id)} className='answers__actions-container'>
                <img className='answers__upvote' src={upvote} alt="test" />
                <p className='answers__value'>{answer.upVotes}</p>
              </div>
              <div onClick={(e) => downVote(e, answer.id)} className='answers__actions-container'>
                <img className='answers__downvote' src={downvote} alt="test" />
                <p className='answers__value'>{answer.downVotes}</p>
              </div>
            </div>
            <div className='answers__icon-container'>
              <div className='answers__actions-container'>
                <img className='answers__share' src={share} alt="test" />
                <p className='answers__value'>0</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {isErrorModal && <UnsuccessfulPost onClose={onClose} />}
    </div>
  );
}

export default Answers;