import { useEffect } from "react"
import { useGlobalContext } from "../../context.jsx";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import './Questions.scss'

const Questions = () => {

  const { userList, questionsList, answersList,
    getUserList, getQuestionsList  } = useGlobalContext();
  
 const question = questionsList[1]
 const user = userList.find(user => user.userID === question.userID)
    console.log(question)
 const questionTest = () => {
   const { communityID, createdAt, downVotes, questionContent,
          topic, upVotes, userID } = question

   return (
     <QuestionCard
       communityID={communityID}
       createdAt={createdAt}
       downVotes={downVotes}
       questionContent={questionContent}
       topic={topic}
       upVotes={upVotes}
       userID={userID}
       user={user}
       key={userID}
     />
   )
 }
 
 const questions = questionsList.map(question => {
   const { communityID, createdAt, downVotes, questionContent,
      topic, upVotes, userID } = question
   return (
     <QuestionCard
       communityID={communityID}
       createdAt={createdAt}
       downVotes={downVotes}
       questionContent={questionContent}
       topic={topic}
       upVotes={upVotes}
       userID={userID}
       user={user}
       key={userID}
     />
   )
 })

  return (
    <>
      {questions && questions }
      {/* { question && questionTest() } */}
    </>
  )
}

export default Questions