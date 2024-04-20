import React, { useEffect } from "react";
import "./PostModal.scss";

import checked from "../../assets/icons/🦆 icon _checkmark circle 2_.svg";

const PostModal = ({ closePost }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
          closePost(); 
        }, 3000);
    
        return () => clearTimeout(timer); 
      }, [closePost]);

    return (
        <div className="post-modal--overlay">
        <div className="question-posted__popUp">
            <img src={checked} alt="icon of post question sucessfully" />
            <p className="post-modal__text">Posted successfully</p>
        </div>
        </div>
    )
}

export default PostModal;