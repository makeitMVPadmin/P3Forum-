import './AskedQuestion.scss'
import comment from '../../assets/comment.svg'
import downvote from '../../assets/downvote.svg'
import share from '../../assets/share.svg'
import upvote from '../../assets/upvote.svg'

const AskedQuestion = () => {

  const testImage = "https://firebasestorage.googleapis.com/v0/b/communiti-630fc.appspot.com/o/profile_thumbnails%2F%F0%9F%A6%86%20icon%20_linkedin_.png?alt=media&token=1bbb48cc-eb25-454e-98ad-8ba8fcaf4654" 

  return (
    <section className='asked-question'>
      <div className='asked-question__container'>
        <div className='asked-question__user-details'>
          <div className='asked-question__avatar-container'>
            <img className='asked-question__avatar' src={testImage} alt="test" />
          </div>
          <h2 className='asked-question__text'>Test User</h2>
          <h2 className='asked-question__text'>•</h2>
          <h2 className='asked-question__text'>5min</h2>
        </div>
        <div className='asked-question__body'>
          <h2 className='asked-question__topic'>What kind of strawberry seed is the best?</h2>
          <h2 className='asked-question__content'>I am trying to grow strawberries in my backyard and was wondering what kind of strawberry seeds is the best? I am a newbie gardener and trying to find a seed that is easy for beginners.</h2>
        </div>
        <div className='asked-question__actions'>
          <div className='asked-question__button-container'>
            <button className='asked-question__button'>
              <img className='asked-question__upvote' src={upvote} alt="test" />
            </button>
            <p className='asked-question__value'>0</p>
          </div>
          <div className='asked-question__button-container'>
            <button className='asked-question__button'>
              <img className='asked-question__downvote' src={downvote} alt="test" />
            </button>
            <p className='asked-question__value'>0</p>
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
      </div>
    </section>
  )
}

export default AskedQuestion