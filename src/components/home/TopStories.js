import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../article/ArticleCard';
import './storiesLayout.css';

const TopStories = ({newsList}) => {
    return ( 
      <div className="container">
          <div className="news-container">
            <div className="articles-section">
                {
                  newsList.map((item,i) => (
                    <Link to={`/article-detail/${item.sectionName}/${i}`} state={item} key={item.id}>
                      <ArticleCard key={item.id} item={item} />
                    </Link>
                  ))
                }
            </div>
          </div>
         </div>
  );
}
 
export default TopStories;