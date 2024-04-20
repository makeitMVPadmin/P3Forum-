import { useGlobalContext } from "../../context.jsx";
import Answers from '../Answers/Answers'
import comment from '../../assets/comment.svg'
import downvote from '../../assets/downvote.svg'
import share from '../../assets/share.svg'
import upvote from '../../assets/upvote.svg'
import './QuestionCard.scss'

const QuestionCard = ({ communityID, createdAt, downVotes, questionContent,
  topic, upVotes, userID, user }) => {

    const { timestamp } = useGlobalContext()

  const { fullName, profilePhoto } = user 
    console.log(user)
  return (
    <section className='question-card'>
      <div className='question-card__container'>
        <div className='question-card__user-details'>
          <div className='question-card__avatar-container'>
            <img className='question-card__avatar' src={profilePhoto} alt="test" />
          </div>
          <h2 className='question-card__text'>{fullName}</h2>
          <h2 className='question-card__text'>•</h2>
          <h2 className='question-card__text'>5min</h2>
        </div>
        <div className='question-card__body'>
          <h2 className='question-card__topic'>{topic}</h2>
          <h2 className='question-card__content'>{questionContent}</h2>
        </div>
        <div className='question-card__actions'>
          <div className='question-card__button-container'>
            <button className='question-card__button'>
              <img className='question-card__upvote' src={upvote} alt="test" />
            </button>
            <p className='question-card__value'>{upVotes}</p>
          </div>
          <div className='question-card__button-container'>
            <button className='question-card__button'>
              <img className='question-card__downvote' src={downvote} alt="test" />
            </button>
            <p className='question-card__value'>{downVotes}</p>
          </div>
          <div className='question-card__button-container'>
            <button className='question-card__button'>
              <img className='question-card__comment' src={comment} alt="test" />
            </button>
            <p className='question-card__value'>0</p>
          </div>
          <div className='question-card__button-container'>
            <button className='question-card__button'>
              <img className='question-card__share' src={share} alt="test" />
            </button>
            <p className='question-card__value'>0</p>
          </div>
        </div>
        <Answers/>
      </div>
    </section>
  )
}

export default QuestionCard