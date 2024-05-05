import React, { useEffect } from "react";
import "./UnsuccessfulPost.scss";
import unsuccessfulicon from "../../assets/icons/red-cross.svg";

const UnsuccessfulPost = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="unsuccessfulpost-modal__overlay">
      <div className="unsuccessfulpost-modal__popUp">
  
       <img className="unsuccessfulpost-modal__icon" src={unsuccessfulicon} alt="icon showing unsucessful post" />
        
        <p className="unsuccessfulpost-modal__text">Unsuccessful Post, Please Try Again</p>
      </div>
    </div>
  );
};

export default UnsuccessfulPost;
