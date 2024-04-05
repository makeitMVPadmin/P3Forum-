import "./SearchBar.scss"
import Search from "../../assets/images/search-24px.svg"
import { Link } from "react-router-dom";

function SearchBar() {
    return (
        <div className="forum">
          <div className="forum-content">
            <div className="forum-content__nav">
    
             
            
              <div className="forum-content__nav--search">
                <input
                  type="search"
                  value="Search..."
                  className="forum-content__nav--search-field"
                  readOnly
                />{" "}
                <img src={Search} alt="search" />
              </div>
    
              <Link
                        className="forum-content__links"
                        to={`/addComment`}
                      >
              <button className="forum-content__nav--button">
                {" "}
                + Add New Comment{" "}
              </button>
              </Link>
    
            </div>
            </div>
            </div>
    );
    }
    
    export default SearchBar;