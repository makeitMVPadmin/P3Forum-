import { useEffect } from "react"
import { useGlobalContext } from "../../context.jsx";
import AskedQuestion from "../../components/AskedQuestion/AskedQuestion";
import './Questions.scss'

const Questions = () => {

  const { userList, questionsList, answersList,
    getUserList, getQuestionsList  } = useGlobalContext();
  
 const question = questionsList[1]
 const user = userList.find(user => user.userID === question.userID)
    console.log(question)
 const questionTest = () => {
   const { id, communityID, createdAt, downVotes, questionContent,
          topic, upVotes, userID } = question

   return (
     <AskedQuestion
       communityID={communityID}
       createdAt={createdAt}
       downVotes={downVotes}
       questionContent={questionContent}
       topic={topic}
       upVotes={upVotes}
       userID={userID}
       user={user}
       key={id}
     />
   )
 }
 
 const questions = questionsList.map(question => {
   const { id, communityID, createdAt, downVotes, questionContent,
      topic, upVotes, userID } = question
   return (
     <AskedQuestion
       communityID={communityID}
       createdAt={createdAt}
       downVotes={downVotes}
       questionContent={questionContent}
       topic={topic}
       upVotes={upVotes}
       userID={userID}
       user={user}
       key={id}
     />
   )
 })

  return (
    <>
      {/* {questions && questions } */}
      { question && questionTest() }
    </>
  )
}

export default Questions