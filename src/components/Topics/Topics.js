import "./Topics.scss";
// import { useGlobalContext } from "../../context";
// import TopicCard from "../TopicCard/TopicCard";
import Icon1 from "../../assets/icons/icon1.svg";
import Icon2 from "../../assets/icons/icon2.svg";
import Icon3 from "../../assets/icons/icon3.svg";
import start from "../../assets/icons/Favourite Commuinity.svg";
const Topics = () => {
  // const { questionsList } = useGlobalContext();

  // const uniqueTopics = Array.from(
  //   new Set(questionsList.map((question) => question.topic))
  // );

  // const shortTopics = uniqueTopics.filter((topic) => topic.length < 15);

  const currentTopics = [
    { title: "UX Design", icon: Icon1 },
    { title: "Firebase", icon: Icon2 },
    { title: "React", icon: Icon3 },
  ];

  return (
    <section className="topics-section">
      <p className="topics-title">Topics</p>

      {/* {shortTopics.map((topic) => (
        <TopicCard key={topic} topic={topic} />
      ))} */}
      <div className="topics-section__box">
        {currentTopics.map((item, index) => (
          <div className="topics-section__container" key={index}>
            <img
              className="topics-section__icons"
              src={item.icon}
              alt={item.title}
            />
            <div className="topics-section__title">{item.title}</div>
            <img
              className="topics-section__fav"
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
