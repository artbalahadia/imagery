import React from 'react';
import '../styles/SearchBar.css';

class SearchBar extends React.Component {
    // // Method to observe user input
    // onInputChange(event){
    //     console.log(event.target.value)
    // }
    // -------------------------------

    // Controlled method of handling events
    state = { input: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.input);
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <header>Imagery</header>
                        <input id="input" type="text" placeholder="Search for the top 10 trending images today!" 
                            value={this.state.input}
                            onChange={ (e) => this.setState({ input: e.target.value }) }
                            />
                    </div>
                </form>
            </div>
        );
    }
}



export default SearchBar;