import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';


class App extends React.Component {
    state = { images: [] };

    // To be used as props to SearchBar in order to get user input and get data from unsplash using axios
    onSearchSubmit = async(input) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: input },
        });

        this.setState({ images: response.data.results })
    };

    render(){
        return (
            <div className="ui container" style={{ marginTop: '50px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    };
};


 



export default App;