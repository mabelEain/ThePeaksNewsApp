import React from 'react';
import './articlelayout.css'

const Article = ({item}) => {
    return (

            <a className="article first-article" href="/">
            <figure className="article-image is-4by3">
                <img src={item.fields.thumbnail} alt="" />
            </figure>
            <div className="article-body">
                <h2 className="article-title">
                {item.webTitle}
                </h2>
                <p className="article-content">
                {item.fields.headline}
                {item.webUrl}
                </p>
                <footer className="article-info">
                <span>{item.webPublicationDate}</span>
                <span>{item.sectionName}</span>
                </footer>
            </div>
        </a>

     );
}
 
export default Article;