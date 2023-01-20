import React,{useState, createContext} from 'react';
import axios from 'axios';
import {otherapiEndpoint, searchapiEndpoint, topapiEndpoint } from '../config';

export const NewsContext = createContext();

export const NewsProvider = props => {
    const [topStories, setTopStories] = useState([]);
    const [otherStories, setOtherStories] = useState([]);
    const [searchStories, setSearchStories] = useState([]);
    const [query,setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [orderBy, setOrderBy] = useState("newest");
    const [bookmarkList, setBookmarkList] = useState([]);

    const getTopStories = async () => {
        try {
            setLoading(true)
            const response = await axios.get(topapiEndpoint(orderBy,page,pageSize));
            const data = await response.data.response;
            // console.log(data);
            setTopStories(data.results)
            setLoading(false);
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    const getOtherStories = async (sectionName) => {
        try {
            setLoading(true)
            const response = await axios.get(otherapiEndpoint(sectionName,orderBy,page,pageSize));
            const data = await response.data.response;
            // console.log(data);
            setOtherStories(data.results)
            setLoading(false);
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    const getSearchStories = async (query) => {
        try {
            setLoading(true)
            const response = await axios.get(searchapiEndpoint(query,orderBy,page,pageSize));
            const data = await response.data.response;
            console.log(data.results);
            setQuery(query)
            setSearchStories(data.results)
            setLoading(false);
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    return(
        <NewsContext.Provider value={{loading,topStories,otherStories,searchStories,bookmarkList,
            query, setQuery, orderBy, page, pageSize, setOrderBy, setPage, setPageSize,
         setBookmarkList, getTopStories, getOtherStories, getSearchStories}}>
            {props.children}
        </NewsContext.Provider>
    );
};

