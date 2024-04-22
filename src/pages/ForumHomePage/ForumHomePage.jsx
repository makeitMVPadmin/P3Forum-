import "./ForumHomePage.scss";
import Header from "../../components/Header/Header"
import Questions from "../../components/Questions/Questions"
import AskQuestionsContainer from "../../components/AskQuestionsContainer/AskQuestionsContainer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <AskQuestionsContainer />
      <Questions />
    </div>
  );
};

export default Home;
