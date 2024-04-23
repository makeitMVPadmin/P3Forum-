import "./Topics.scss";
import { useGlobalContext } from "../../context";
import TopicCard from "../TopicCard/TopicCard";

const Topics = () => {
  const { questionsList } = useGlobalContext();

  const uniqueTopics = Array.from(
    new Set(questionsList.map((question) => question.topic))
  );

  const shortTopics = uniqueTopics.filter((topic) => topic.length < 15);

  return (
    <section className="topics">
      <p className="topics-title">Topics</p>

      {shortTopics.map((topic) => (
        <TopicCard key={topic} topic={topic} />
      ))}
    </section>
  );
};

export default Topics;
