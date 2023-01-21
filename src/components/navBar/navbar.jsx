import React, { useContext, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/Logo_White.png";
import searchIcon from "../../assets/search-icon@2x.svg";
import { NewsContext } from '../../context/NewsContext';
import './nav.css';



const NavBar = () => {
    const {getSearchStories } = useContext(NewsContext);
    const navigate = useNavigate();
    const searchRef = useRef();

    const searchHandler = (e) => {
        e.preventDefault();
        if ((searchRef.current.value) !== ""){
            getSearchStories(searchRef.current.value);
            navigate(`/search/${searchRef.current.value}`);
            searchRef.current.value = "";
        }else {
           console.log("There is no value");
        }
       
      };

        return (
            <nav>
                <div className='navbar'>
                    <div>
                    <Link to="/">
                        <img src={logo} className="brand-logo" alt="logo" />
                    </Link>
                    </div>
                    <div className='search'>
                        <form onSubmit={searchHandler}>
                        <input
                        ref={searchRef}
                        placeholder="Search all news"
                        type="text"
                        />
                        <button><img src={searchIcon} alt="search"/></button>
                    </form>
                    </div>
                </div>
             </nav>
            
        );
}
 
export default NavBar;