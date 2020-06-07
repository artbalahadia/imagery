import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';


class App extends React.Component {
    // To be used as props to SearchBar in order to get user input and get data from unsplash using axios
    onSearchSubmit(input){
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: input },
            headers: {
                Authorization: 
                'Client-ID MjfvjR_i4ZJgITMKB4JaS-_h2kYbBVt-h4kgQBOifPU'
            }
        });
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '50px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}






export default App;