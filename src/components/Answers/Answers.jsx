import { useState } from "react";
import { useGlobalContext } from "../../context";
import { addDoc } from "firebase/firestore";
import defaultUser from "../../assets/icons/defaultUser.svg"
import "./Answers.scss";

function Answers({ questionID }) {
  const {
    userList,
    answersList,
    answersCollection,
    getAnswersList,
    randomUser1,
    timestamp
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
            placeholder="Answer..."
            onChange={(e) => setNewAnswer(e.target.value)}
            value={newAnswer}
          />
          <div className="answers__buttons-container">
            <button className="answers__buttons" onClick={onCancel}>Cancel</button>
            <button className="answers__buttons" onClick={onPostAnswer}>Post</button>
          </div>
        </div>
      </div>

      {answersWithUsers.map(({ answer, user, profilePhoto, createdAt }) => (
        <div key={answer.id} className="answers__container">
          <div className="answers__user">
            <img className='question-card__avatar' src={profilePhoto ? profilePhoto : defaultUser} alt="Profile pic" />
            <p className="answers__user-name"> {user !== null && user !== '' ? user : 'Anonymous'} </p>
            <p>• {createdAt}</p>
          </div>
          <p>{answer.answerContent}</p>
        </div>
      ))}
    </div>
  );
}

export default Answers;