import { useState } from "react";
import { useGlobalContext } from "../../context";
import { addDoc } from "firebase/firestore";
import "./Answers.scss";

function Answers() {
  const {
    userList,
    // questionsList,
    answersList,
    // setAnswersList,
    answersCollection,
    // getAnswersList
  } = useGlobalContext();

  const user1 = userList[0]
  console.log({user1})

  const [newAnswer, setNewAnswer] = useState("");

  const filteredAnswerArray = answersList.filter(answer => answer.questionID === "1PBuOCLfLUfPoInfVIwt");

  const answersWithUsers = filteredAnswerArray.map(answer => {
    const user = userList.find(user => user.userID === answer.userID);
    console.log({user})
    console.log("fullName", user.createdAt.seconds)
    const date = new Date(answer.createdAt.seconds * 1000); 
    console.log("TEST DATE LN 28: ", new Date(1706898817 * 1000))
    const formattedDate = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  
    return {
      answer: answer,
      user: user.fullName,
      profilePhoto: user ? user.profilePhoto : "🙃",
      createdAt: formattedDate
    };
  });

  const onPostAnswer = async () => {
    try {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
      timeZone: 'UTC',
      timeZoneName: 'short'
    });

      await addDoc(answersCollection, {
        answerContent: newAnswer,
        createdAt: formattedDate,
        questionID: "1PBuOCLfLUfPoInfVIwt", //Needs to be changed to be dynamic
        userID: user1.id, //Needs to be made dynamic
        upVotes: 0,
        downVotes: 0
      });
    } catch (error) {
      console.error(error);
    }
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
            <button className="answers__buttons">Cancel</button>
            <button className="answers__buttons" onClick={onPostAnswer}>Post</button>
          </div>
        </div>
      </div>

      {answersWithUsers.map(({ answer, user, profilePhoto, createdAt }) => (
        <div key={answer.id} className="answers__container">
          <div className="answers__user">
            <img src={profilePhoto} alt="🙃" className="answers__avatar" />
            <p className="answers__user-name"> {user ? user : 'Unknown User'} </p>
            <p>• {createdAt}</p>
          </div>
          <p>{answer.answerContent}</p>
        </div>
      ))}
    </div>
  );
}

export default Answers;