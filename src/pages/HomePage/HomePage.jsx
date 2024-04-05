import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.scss";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title"> Welcome !</h1>
      <SearchBar />
    </div>
  );
};

export default Home;
