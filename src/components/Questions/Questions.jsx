import { useGlobalContext } from "../../context.jsx";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import './Questions.scss'

const Questions = () => {

  const { questionsList } = useGlobalContext();
  

 const questions = questionsList.map(question => {
   const { id, communityID, createdAt, downVotes, questionContent,
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
       questionID={id}
       key={id}
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