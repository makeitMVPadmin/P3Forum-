import { useGlobalContext } from "../../context.jsx";
import Answers from '../Answers/Answers'
import comment from '../../assets/comment.svg'
import downvote from '../../assets/downvote.svg'
import share from '../../assets/share.svg'
import upvote from '../../assets/upvote.svg'
import './AskedQuestion.scss'

const AskedQuestion = ({ communityID, createdAt, downVotes, questionContent,
  topic, upVotes, userID, user }) => {

  const { fullName, profilePhoto } = user 
    console.log(user)
  return (
    <section className='asked-question'>
      <div className='asked-question__container'>
        <div className='asked-question__user-details'>
          <div className='asked-question__avatar-container'>
            <img className='asked-question__avatar' src={profilePhoto} alt="test" />
          </div>
          <h2 className='asked-question__text'>{fullName}</h2>
          <h2 className='asked-question__text'>•</h2>
          <h2 className='asked-question__text'>5min</h2>
        </div>
        <div className='asked-question__body'>
          <h2 className='asked-question__topic'>{topic}</h2>
          <h2 className='asked-question__content'>{questionContent}</h2>
        </div>
        <div className='asked-question__actions'>
          <div className='asked-question__button-container'>
            <button className='asked-question__button'>
              <img className='asked-question__upvote' src={upvote} alt="test" />
            </button>
            <p className='asked-question__value'>{upVotes}</p>
          </div>
          <div className='asked-question__button-container'>
            <button className='asked-question__button'>
              <img className='asked-question__downvote' src={downvote} alt="test" />
            </button>
            <p className='asked-question__value'>{downVotes}</p>
          </div>
          <div className='asked-question__button-container'>
            <button className='asked-question__button'>
              <img className='asked-question__comment' src={comment} alt="test" />
            </button>
            <p className='asked-question__value'>0</p>
          </div>
          <div className='asked-question__button-container'>
            <button className='asked-question__button'>
              <img className='asked-question__share' src={share} alt="test" />
            </button>
            <p className='asked-question__value'>0</p>
          </div>
        </div>
        <Answers/>
      </div>
    </section>
  )
}

export default AskedQuestion