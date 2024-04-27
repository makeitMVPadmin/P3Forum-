import { useGlobalContext } from "../../context";
import QuestionCard from "../QuestionCard/QuestionCard";
import './Questions.scss'

const Questions = () => {
  const { questionsList, incrementVotes } = useGlobalContext();

  const questions = questionsList.sort((a,b) => b.createdAt - a.createdAt)
  .map(question => {
    const { id, createdAt, downVotes, questionContent,
        topic, upVotes, userID } = question

   return (
     <QuestionCard
       createdAt={createdAt}
       downVotes={downVotes}
       questionContent={questionContent}
       topic={topic}
       upVotes={upVotes}
       userID={userID}
       questionID={id}
       key={id}
       incrementVotes={incrementVotes}
     />
   )
 })

  return (
    <>
      {questions && questions }
    </>
  )
}

export default Questions