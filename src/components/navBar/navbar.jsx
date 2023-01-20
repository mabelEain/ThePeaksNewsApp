import React, { useContext} from 'react';
import logo from "../../assets/Logo_White.png";
import SearchBox from './searchBox';
import './nav.css';
import { Link, useNavigate } from 'react-router-dom';
import { NewsContext } from '../../context/NewsContext';

const NavBar = () => {
    const { query,setQuery, getSearchStories } = useContext(NewsContext);
    const navigate = useNavigate();

    const handleSearch = query => {
        setQuery(query);
        console.log(query)
        getSearchStories(query);
        navigate("/search")
        // eslint-disable-next-line
      };

    const handleClickOutside = () => {
        setQuery('');
        // eslint-disable-next-line
      };

        return (
            <nav>
                <div className='navbar'>
                    <div>
                    <Link to="/">
                        <img src={logo} className="brand-logo" alt="logo" />
                    </Link>
                    </div>
                    
                    <SearchBox 
                        
                        query={query} onChange={handleSearch} onSearchClear={handleClickOutside}/>
                </div>
             </nav>
            
        );
}
 
export default NavBar;