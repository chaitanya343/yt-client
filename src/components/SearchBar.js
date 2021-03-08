import React from 'react';

class SearchBar extends React.Component{

    state = { term : "" };

    onSearchInput = (event) => {
        this.setState({ term : event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term); //Parent fn onTermSubmit is called here with the current term value
    }

    render(){
        return (
            <div style={{backgroundColor: this.props.theme}} className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            style={{backgroundColor: this.props.theme}}
                            onChange={this.onSearchInput}/>
                    </div>
                </form>
            </div>
            
        );
    }
}

export default SearchBar;