import { useState, useEffect } from 'react'
import { useGlobalContext } from "../../context";
import Answers from '../Answers/Answers'
import comment from '../../assets/comment.svg'
import downvote from '../../assets/downvote.svg'
import share from '../../assets/share.svg'
import upvote from '../../assets/upvote.svg'
import defaultUser from '../../assets/icons/defaultUser.svg'
import divider from '../../assets/divider.svg'
import './QuestionCard.scss'

const QuestionCard = ({ createdAt, downVotes, questionContent,
  questionID, topic, upVotes, userID, incrementVotes, isNew }) => {

    const { userList, answersList } = useGlobalContext()
    const user = userList.find(user => user.userID === userID)
    const { fullName, profilePhoto } = user
    const date = new Date(createdAt.seconds * 1000);
    const formattedDate = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

    const [showAnswers, setShowAnswers] = useState(false)
    const [answersCount, setAnswersCount] = useState(0);
    const [showGreenBorder, setShowGreenBorder] = useState(isNew);

    const upVote = (e) => {
      e.preventDefault()
      incrementVotes(questionID, "Questions", "upVotes")
    }

    const downVote = (e) => {
      e.preventDefault()
      incrementVotes(questionID, "Questions", "downVotes")
    }

    useEffect(() => {
      const filteredAnswerArray = answersList.filter((answer) => answer.questionID === questionID);
      const count = filteredAnswerArray.length;
      setAnswersCount(count);
    }, [answersList, questionID]);

    const toggleAnswers = (e) => {
      e.preventDefault()
      setShowAnswers(!showAnswers)
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowGreenBorder(false);
      }, 3000);
    
      return () => clearTimeout(timer);
    }, []);

  return (
    <section className={`question-card ${showGreenBorder ? 'highlighted' : ''}`}>
      <div className='question-card__container'>
        <div className='question-card__user-details'>
          <div className='question-card__avatar-container'>
            <img className='question-card__avatar' src={profilePhoto ? profilePhoto : defaultUser} alt="Profile pic" />
          </div>
          <h2 className='question-card__text'>{fullName !== null && fullName !== '' ? fullName : 'Anonymous'}</h2>
          <h2 className='question-card__text'>•</h2>
          <h2 className='question-card__text'>{formattedDate}</h2>
        </div>
        <div className='question-card__body'>
          <h2 className='question-card__topic'>{topic}</h2>
          <h2 className='question-card__content'>{questionContent}</h2>
        </div>
        <div className='question-card__actions'>
          <div className='question-card__up-down-container'>
            <button onClick={(e) => upVote(e)} className='question-card__button'>
              <img className='question-card__upvote' src={upvote} alt="test" />
              <p className='question-card__value'>{upVotes}</p>
            </button>
            <img className='question-card__divider' src={divider} alt="Divider"/>
            <button onClick={(e) => downVote(e)} className='question-card__button'>
              <img className='question-card__downvote' src={downvote} alt="test" />
              <p className='question-card__value'>{downVotes}</p>
            </button>
          </div>
          <div className='question-card__button-container'>
            <button onClick={(e)=> toggleAnswers(e)} className='question-card__button'>
              <img className='question-card__comment' src={comment} alt="test" />
              <p className='question-card__value'>{answersCount}</p>
            </button>
          </div>
          <div className='question-card__button-container'>
            <button className='question-card__button'>
              <img className='question-card__share' src={share} alt="test" />
              <p className='question-card__value'>0</p>
            </button>
          </div>
        </div>
        { showAnswers && <Answers questionID={questionID}/> }
      </div>
    </section>
  )
}

export default QuestionCard