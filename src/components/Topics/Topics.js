import "./Topics.scss";
import Icon1 from "../../assets/icons/icon1.svg";
import Icon2 from "../../assets/icons/icon2.svg";
import Icon3 from "../../assets/icons/icon3.svg";
import start from "../../assets/icons/Favourite Commuinity.svg";
const Topics = () => {
  const currentTopics = [
    { title: "UX Design", icon: Icon1 },
    { title: "Firebase", icon: Icon2 },
    { title: "React", icon: Icon3 },
  ];

  return (
    <section className="topics">
      <h2 className="topics__main-title">Topics</h2>
      <div className="topics__box">
        {currentTopics.map((item, index) => (
          <div className="topics__container" key={index}>
            <div className="topics__holder">
              <img className="topics__icons" src={item.icon} alt={item.title} />
              <div className="topics__title">{item.title}</div>
            </div>
            <img
              className="topics__fav"
              src={start}
              alt="start icon represent how users like this topic"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Topics;
