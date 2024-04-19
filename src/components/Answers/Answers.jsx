import { useState } from "react";
import { useGlobalContext } from "../../context";
import { addDoc, Timestamp } from "firebase/firestore";
import "./Answers.scss";

function Answers() {
  const {
    userList,
    // questionsList,
    answersList,
    // setAnswersList,
    answersCollection,
    getAnswersList
  } = useGlobalContext();

  const user1 = userList[12]
  console.log({user1})

  const [newAnswer, setNewAnswer] = useState("");
  const [postedAnswers, setPostedAnswers] = useState([]);

  const filteredAnswerArray = answersList.filter(answer => answer.questionID === "1PBuOCLfLUfPoInfVIwt");

  const answersWithUsers = filteredAnswerArray.map(answer => {
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
  
      if (postedAnswers.some(answer => answer === newAnswer)) {
        console.log("You have already posted this answer.");
        alert("You have already posted this answer.")
        return;
      }
      
      const currentDate = new Date();
      const timeZoneOffsetInMilliseconds = -6 * 60 * 60 * 1000;
      const adjustedDate = new Date(currentDate.getTime() + timeZoneOffsetInMilliseconds);
      const timestamp = Timestamp.fromDate(adjustedDate);

      await addDoc(answersCollection, {
        answerContent: newAnswer,
        createdAt: timestamp,
        questionID: "1PBuOCLfLUfPoInfVIwt", //Needs to be changed to be dynamic
        userID: user1.id, //Needs to be made dynamic
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

  const onCancel = () => {
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
            <img src={profilePhoto} alt="Profile Picture" className="answers__avatar" onError={(e) => { e.target.onerror = null; e.target.src = '❤️'; e.target.alt = ''}} />
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