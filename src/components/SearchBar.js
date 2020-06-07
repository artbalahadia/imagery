import React from 'react';

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
                        <label>Imagery</label>
                        <input type="text" placeholder="Anything you want to see today?" 
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