import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../article/ArticleCard';

import './storiesLayout.css';

const OtherStories = ({section,stories}) => {
    return ( 
        <>     
        <div className='container'>
            <h1>{section}</h1>  
            <div className="news-container">
              <div className="articles-section">
                  {
                    stories.map((item,i) => (
                      <Link to={`/article-detail/${item.sectionName}/${i}`} state={item} key={item.id}>
                        <ArticleCard key={item.id} item={item} />
                      </Link>
                    ))
                  }
              </div>
            </div>
          </div>
          </>
     );
}

// class OtherStories extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <main className="main columns">
//             <section className="column main-column">
//                 <Article />
//                 <Article />
//             </section>
//             <section className="column">
//                     <Article />
//                     <article className="article-main">
//                     Hello World
//                     </article>
//                     <Article />
//             </section>
//             </main>
//             );

 // <section className="column">
                // {stories.map((item) => (
                //   <Article key={item} item={item} />
                // ))}
              // </section>
//         }
//         }
 
export default OtherStories;