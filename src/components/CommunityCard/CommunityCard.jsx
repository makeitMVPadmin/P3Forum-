
const CommunityCard = () => {
  return (
    <section>
      <div className="topics-section__box">
        <div className="topics-section__holder"> </div>
        <p className="topics-section__title">{community}</p>
      </div>
      <img
        className="topics-section__fav"
        src={star}
        alt="start icon represent how users like this topic"
      />
    </section>
  )
}

export default CommunityCard