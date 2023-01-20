import React, { useEffect, useContext, useState } from 'react';
import OtherStories from './OtherStories';
import TopStories from './TopStories';
import { NewsContext } from '../../context/NewsContext';
import {useNavigate } from 'react-router-dom';
import Spinner from '../utils/Spinner';

function Home(props){
     const {loading, topStories, getTopStories,
            otherStories, getOtherStories        
    } = useContext(NewsContext);
    const [sectionName, setSectionName] = useState('sport');
   //  const {page, setPage} = useContext(NewsContext);
   //  const {pageSize, setPageSize} = useContext(NewsContext);
    const {orderBy, setOrderBy} = useContext(NewsContext);
    const navigate = useNavigate();

      useEffect(() => {
          getTopStories();
          setSectionName("culture")
          getOtherStories(sectionName);
          // eslint-disable-next-line
      },[orderBy]);

   return(
        <> 
        {  loading ?(
               <Spinner />
        ): 
           (<>
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
                <TopStories newsList={topStories} />
                <OtherStories section={sectionName} stories={otherStories}  />
                </main>
               <footer />
          
            </>
           )    
        }
        </>
   );
}
 
export default Home;