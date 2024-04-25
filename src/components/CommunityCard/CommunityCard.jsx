import star from "../../assets/icons/Favourite Commuinity.svg";

const CommunityCard = () => {
  return (
    <section className="community-card">
      <div className="community-card__container" >
        <img src={star} alt="Community logo"/>
        <p className="community-card__title">community</p>
      </div>
      <img
        className="community-card__favorite"
        src={star}
        alt="Star icon"
      />
    </section>
  )
}

export default CommunityCard