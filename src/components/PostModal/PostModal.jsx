import React, { useEffect } from "react";
import "./PostModal.scss";

import checked from "../../assets/icons/green-checkmark.svg";

const PostModal = ({ closePost }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closePost();
    }, 3000);

    return () => clearTimeout(timer);
  }, [closePost]);

  return (
    <div className="post-modal__overlay">
      <div className="post-modal__popUp">
        <img
          className="post-modal__icon"
          src={checked}
          alt="icon of post question sucessfully"
        />

        <p className="post-modal__text">Posted successfully</p>
      </div>
    </div>
  );
};

export default PostModal;
