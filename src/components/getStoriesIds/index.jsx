import React from 'react';
import Axios from 'axios';

 const getStoriesApis = () => {
    const apiUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    Axios.get(apiUrl)
        .then(res => {
            return res.data.slice(0, 10);
        })
};

export default getStoriesApis;