import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import parser from 'html-react-parser';
import logo from "../../assets/Logo_White.png";
import bookmarkIcon from "../../assets/bookmarkon-icon.svg";
import { NewsContext } from '../../context/NewsContext';
import "./articleDetail.css";

const ArticleDetail = props => {
    const loc = useLocation();
    const item = loc.state;
    const {setBookmarkList } = useContext(NewsContext);
    const [bookmark , setBookmark] = useState(null);

    // const getBookMarkObj= (item) => {
    //   return bookmarkList.find(bm => bm.id === item.id);
    // }
    // const bmObj = getBookMarkObj(item);

    const handleToggle = () => { 
       setBookmark(!bookmark)
      //  addBookMark();
      {!bookmark? addBookMark() : removeBookMark(item.id) }
    }

    const addBookMark = () => {
        setBookmarkList(prevBM => [...prevBM, {id: item.id, bookmark: bookmark, item: item}]);
        
    }

    const removeBookMark = (id) => {
      setBookmarkList(prevBM => prevBM.filter(bm => bm.id !== id))
      console.log(id);
    }

      
    return (
        <>
           <main>
              <section className="presentation">
                <div className="introduction">
                  <div className="intro-text">
                    <button onClick={handleToggle}><img src={bookmarkIcon} alt=""/>Add Bookmark</button>        
                   <p><h6>{new Date(item.webPublicationDate).toGMTString()}</h6></p>
                   <h1>{item.webTitle}</h1>
                   <p><h3> {item.fields.headline}</h3></p>
                    <p>
                        {parser(item.fields.body)}
                    </p>
                  </div>
                 </div>
                <div className='cover'>
                  {item.fields.thumbnail?
                  (<img src={item.fields.thumbnail} alt="" 
                  />):
                  (<img src={logo} alt=""/>
                  )}
                </div>
            </section>
            </main>
              <footer>
                { bookmark?
                    <p className='add-bookmark'>Add To BookMark</p>
                  : <p className='remove-bookmark'>Remove BookMark</p>
                }
                
              </footer>
        </>
     );
}
 
export default ArticleDetail;