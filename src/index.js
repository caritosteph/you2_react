import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyBHyyTdasCQYbP9rO58oP6MzpT1IC5fFFo';

YTSearch({key:API_KEY,term:'sdf'},function(data){
    console.log(data);
});

const App = ()=>{
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App/>,document.querySlector('.container'));