import { useGlobalContext } from "../../context"
import communitiLogo from "../../assets/communiti.svg"
import homeLogo from "../../assets/house.svg"
import eventLogo from "../../assets/calendar.svg"
import communitiesLogo from "../../assets/silhouette.svg"
import coffeeChatLogo from "../../assets/people_chatting.svg"
import forumLogo from "../../assets/chat.svg"
import defaultUser from "../../assets/icons/defaultUser.svg"
import downCarrot from "../../assets/down_carrot.svg"
import "./Header.scss"

const Header = () => {
  const {
    randomUser2,
  } = useGlobalContext();

  return (
    <div className="header">
      <div className="header__navigation">
        <div className="header__main-icon">
          <img src={communitiLogo} className="header__main-image"/>
        </div>
        <div className="header__icons">
          <img src={homeLogo} className="header__images"/>
          <div className="header__icon-titles">Home</div>
        </div>
        <div className="header__icons">
          <img src={communitiesLogo} className="header__images"/>
          <div className="header__icon-titles">Communities</div>
        </div>
        <div className="header__icons">
          <img src={eventLogo} className="header__images"/>
          <div className="header__icon-titles">Events</div>
        </div>
        <div className="header__icons">
          <img src={coffeeChatLogo} className="header__images"/>
          <div className="header__icon-titles">Coffee Chat</div>
        </div>
        <div className="header__icons">
          <img src={forumLogo} className="header__images"/>
          <div className="header__icon-titles-forum">Forum</div>
        </div>
      </div>
      <div className="header__user-container">
        <img src={randomUser2?.profilePhoto ? randomUser2?.profilePhoto : defaultUser} alt="Profile Pic" className="header__user-pic"/>
        <img src={downCarrot} className="header__down-carrot"/>
      </div>
    </div>
  )
}

export default Header