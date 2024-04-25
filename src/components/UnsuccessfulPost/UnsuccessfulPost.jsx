import React, { useEffect } from "react";
import "./UnsuccessfulPost.scss";

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
        <div className="unsuccessfulpost-modal__icon"> 
          {/* <p className="unsuccessfulpost-modal__icon--text"> X </p> */}
        </div>
        <p className="post-modal__text">Unsuccessful Post, Please Try Again</p>
      </div>
    </div>
  );
};

export default UnsuccessfulPost;
