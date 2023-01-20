import React, { useContext} from 'react';
import {Link} from 'react-router-dom';
import { NewsContext } from '../../context/NewsContext';
import ArticleCard from '../article/ArticleCard';
import '../home/storiesLayout.css';

const BookMarks = (props) => {
    const {bookmarkList} = useContext(NewsContext);

    return (
      <>
      <header>
        <div className="content">
        <h1>{props.name}</h1>
        <h1>{console.log(bookmarkList.id)}</h1>
        
        </div>
      </header>
      <main>
        <div className='container'>
            <div className="news-container">
              <div className="articles-section">
                  {               
                      bookmarkList.map(({id,item},i) => (
                      <Link to={`/article-detail/${item.sectionName}/${i}`} state={item} key={id}>
                        <ArticleCard key={id} item={item} />
                      </Link>
                    ))
                  }
              </div>
            </div>
          </div>
        </main>
        <footer />
          </>
    );
}
 
export default BookMarks;