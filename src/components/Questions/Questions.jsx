import { useGlobalContext } from "../../context";
import QuestionCard from "../QuestionCard/QuestionCard";
import './Questions.scss'

const Questions = () => {
  const { questionsList, incrementVotes, compareVotes } = useGlobalContext();

  // const compareVotes = (a, b) => {
  //   const voteDifferenceA = a.upVotes - a.downVotes
  //   const voteDifferenceB = b.upVotes - b.downVotes

  //   if(voteDifferenceA === voteDifferenceB) {
  //     return b.createdAt - a.createdAt
  //   } else {
  //     return voteDifferenceB - voteDifferenceA;
  //   }
  // }

  const questions = questionsList.sort((compareVotes))
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