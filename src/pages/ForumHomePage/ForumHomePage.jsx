import "./ForumHomePage.scss";
import Questions from "../../components/Questions/Questions"
import AskQuestionsContainer from "../../components/AskQuestionsContainer/AskQuestionsContainer";

const Home = () => {
  return (
    <div className="home">
      <AskQuestionsContainer />
      <Questions />
    </div>
  );
};

export default Home;
