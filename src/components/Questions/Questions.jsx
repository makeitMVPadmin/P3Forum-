import { useGlobalContext } from "../../context";
import QuestionCard from "../QuestionCard/QuestionCard";
import './Questions.scss'

const Questions = () => {
  const { questionsList, incrementVotes, compareVotes } = useGlobalContext();

  const questions = questionsList.sort((compareVotes))
  .map(question => {
    const { id, createdAt, downVotes, questionContent,
        topic, upVotes, userID } = question

        const isQuestionNew = (createdAt) => {
          const currentTimeInSeconds = Math.floor(Date.now() / 1000);
          const secondsDifference = currentTimeInSeconds - createdAt.seconds;
          const threshold = 60;
          return secondsDifference <= threshold;
        };
  
        const isNew = isQuestionNew(createdAt);

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
       isNew={isNew}
     />
   )
 })

  return (
    <section className="questions">
      {questions && questions }
    </section>
  )
}

export default Questions
