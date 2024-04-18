import './AskedQuestion.scss'

const AskedQuestion = () => {

  const testImage = "https://firebasestorage.googleapis.com/v0/b/communiti-630fc.appspot.com/o/profile_thumbnails%2F%F0%9F%A6%86%20icon%20_linkedin_.png?alt=media&token=1bbb48cc-eb25-454e-98ad-8ba8fcaf4654" 

  return (
    <section className='asked-question'>
      <div className='asked-question__container'>
        <div className='asked-question__user-details'>
          <div className='asked-question__image-container'>
            <img src={testImage} alt="test" />
          </div>
          <h2>Test User</h2>
          <h2>•</h2>
          <h2>5min</h2>
        </div>
        <div className='asked-question__body'>
          <h2>What kind of strawberry seed is the best?</h2>
          <h2>I am trying to grow strawberries in my backyard and was wondering what kind of strawberry seeds is the best? I am a newbie gardener and trying to find a seed that is easy for beginners. </h2>
        </div>
        <div className='asked-question__actions'>

        </div>
      </div>
    </section>
  )
}

export default AskedQuestion