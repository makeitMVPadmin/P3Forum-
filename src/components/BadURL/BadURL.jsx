import { Link } from "react-router-dom";
import ErrorImaage from "../../assets/error-image.png"
import Undo from "../../assets/undo.svg"
import "./BadURL.scss"

function BadURL() {
  return (
    <div className="error__container">
      <div className="error__title">Oops!</div>
      <div className="error__message">We're working on it!</div>
      <img src={ErrorImaage} alt="Error" className="error__return-box" />
        <Link to="/">
          <div className="error__exit">
            <img src={Undo} alt="Undo" className="error__undo" />
            <p className="error__home">Go Home</p>
          </div>
        </Link>
    </div>
  )
}

export default BadURL;