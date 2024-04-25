import { useState } from "react";
import { useGlobalContext } from "../../context";
import { addDoc } from "firebase/firestore";
import comment from "../../assets/comment.svg"
import downvote from "../../assets/downvote.svg"
import share from "../../assets/share.svg"
import upvote from "../../assets/upvote.svg"
import defaultUser from "../../assets/icons/defaultUser.svg"
import "./Answers.scss";

function Answers({ questionID }) {
  const {
    userList,
    answersList,
    answersCollection,
    getAnswersList,
    randomUser1,
    timestamp,
  } = useGlobalContext();

  const [newAnswer, setNewAnswer] = useState("");
  const [postedAnswers, setPostedAnswers] = useState([]);

  const filteredAnswerArray = answersList.filter(answer => answer.questionID === questionID);

  const answersWithUsers = filteredAnswerArray.sort((a,b) => b.createdAt - a.createdAt).map(answer => {
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
        alert("Please enter a valid answer.")
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
    }
  };

  const onCancel = (e) => {
    setNewAnswer("");
  };

  return (
    <div className="answers">
      
      <div className="answers__form-container">
        <div className="answers__form">
          <input
            className="answers__input"
            placeholder="Write a comment..."
            type="text"
            onChange={(e) => setNewAnswer(e.target.value)}
            value={newAnswer}
          />
          <div className="answers__buttons-container">
            <button className="answers__buttons" onClick={onCancel}>Cancel</button>
            <button className="answers__buttons" onClick={onPostAnswer}>Post</button>
          </div>
        </div>
      </div>
      {console.log(answersWithUsers.length)}
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

            <div className='answers__up-down-container'>
              <div className='answers__actions-container'>
                <img className='answers__upvote' src={upvote} alt="test" />
                <p className='answers__value'>{answer.upVotes}</p>
              </div>
              <div className='answers__actions-container'>
                <img className='answers__downvote' src={downvote} alt="test" />
                <p className='answers__value'>{answer.downVotes}</p>
              </div>
            </div>

            <div className='answers__icon-container'>
              <div className='answers__actions-container'>
                <img className='answers__comment' src={comment} alt="test" />
                <p className='answers__value'>0</p>
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
    </div>
  );
}

export default Answers;