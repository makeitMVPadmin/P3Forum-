import "./ForumHomePage.scss";
import Header from "../../components/Header/Header"
import Questions from "../../components/Questions/Questions"
import AskQuestionsContainer from "../../components/AskQuestionsContainer/AskQuestionsContainer";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {

  return (
    <div className="home">
      <Sidebar />
      <div className="home-body">
        <AskQuestionsContainer />
        <Questions />
      </div>
    </div>
  );
};

export default Home;
