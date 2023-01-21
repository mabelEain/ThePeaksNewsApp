import React from 'react';
import NavBar from './components/navBar/navbar';
import Home from './components/home/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchResult from './components/navBar/searchResult';
import BookMarks from './components/bookmark/bookmark';
import ArticleDetail from './components/articleDetail/ArticleDetail';
import { NewsProvider } from './context/NewsContext';


const App = () => {
   
    return (
      <>
      <NewsProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path="/" element={<Home name={"Top Stories"}/>} />
              <Route path="/search/:search"  element={<SearchResult name={"Search Result"}/>}/>
              {/* <Route path="/search" element={<SearchResult name={"Search Result"}/>}/>  */}
              <Route path="/bookmark" element={<BookMarks name={"All BookMark"}/>}/>
              <Route path="/article-detail/:sectionName/:id" element={<ArticleDetail />}/>
          </Routes>
        </BrowserRouter>
      </NewsProvider>
      
      </>
    );
}
 
export default App;
