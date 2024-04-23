import "./TopicCard.scss";
import start from "../../assets/icons/Favourite Commuinity.svg";

const TopicCard = ({ topic }) => {
  return (
    <section className="topics-section">
      <div className="topics-section__box">
        <div className="topics-section__holder"> </div>
        <p className="topics-section__title">{topic}</p>
      </div>
      <img
        className="topics-section__fav"
        src={start}
        alt="start icon represent how users like this topic"
      />
    </section>
  );
};

export default TopicCard;
