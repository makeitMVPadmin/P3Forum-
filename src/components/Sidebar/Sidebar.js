import "./Sidebar.scss";
import Topics from "../Topics/Topics";
import Communities from "../Communities/Communities"

const Sidebar = () => {
  return (
    <section className="sidebar">
      <Topics />
      <Communities />
    </section>
  );
};

export default Sidebar;
