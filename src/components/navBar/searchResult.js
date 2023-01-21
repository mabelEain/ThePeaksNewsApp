import React, { useContext, useEffect} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import ArticleCard from '../article/ArticleCard';
import { NewsContext } from '../../context/NewsContext';
import '../home/storiesLayout.css';
import Spinner from '../utils/Spinner';


const SearchResult = (props) => {
    const { loading,searchStories, query, getSearchStories} = useContext(NewsContext);
    const {orderBy, setOrderBy} = useContext(NewsContext);
    const navigate = useNavigate();

    useEffect(() => {
      getSearchStories(query)
      // eslint-disable-next-line
  },[orderBy]);

    return (
      <>
      <header>
        <div className="content">
        <h1>{props.name}</h1>
        <button onClick={() => navigate("/bookmark")}>View BookMark</button>
        <select id="orderby" value={orderBy}
                onChange={(e) => setOrderBy(e.target.value)}>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
        </select>
        </div>
      </header>
      <main>
        <div className='container'>
            <div className="news-container">
              <div className="articles-section">
              {
                  loading? <Spinner />:
                  ( 
                    searchStories.map((item,i) => (
                    <Link to={`/article-detail/${item.sectionName}/${i}`} state={item} key={item.id}>
                      <ArticleCard key={item.id} item={item}/>
                    </Link>
                  )))
                }
              </div>
            </div>
          </div>
        </main>
        <footer />
        </>
    );
}
 
export default SearchResult;