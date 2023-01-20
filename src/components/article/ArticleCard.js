import React from 'react';
import logo from "../../assets/Logo_White.png";
import './articleCard.css'

const ArticleCard = ({item}) => {
    return (
            
            <div className="article-card">
                
                {item.fields.thumbnail?
                (<img src={item.fields.thumbnail} alt="" 
                />):
                (<img src={logo} alt=""/>
                )}
                <div className="text-block">
                <div className="title">
                    <span>{item.webTitle}</span>
                </div>
                <div className="description">
                    <span>{item.fields.headline}</span>
                </div>
                </div>
            </div>
     );
}
 
export default ArticleCard;