import star from "../../assets/icons/Favourite Commuinity.svg";
import './CommunityCard.scss'

const CommunityCard = ({ image, name }) => {
  return (
    <section className="community-card">
      <div className="community-card__container" >
        <img className="community-card__logo" src={image} alt="Community logo"/>
        <p className="community-card__title">{name}</p>
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