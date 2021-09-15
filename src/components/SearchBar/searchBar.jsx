import React, {Component} from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
            this.state = {
                searchQuery: '',
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ 
            searchQuery: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.filterSongs(this.state.searchQuery);
    }

    render() {
        return(
            <form className="search-bar"  onSubmit={(event) => this.handleSubmit(event)}>
                <div>
                    <input type="text" className="search-form" placeholder="Search"
                    onChange={this.handleChange} value={this.searchQuery}/>
                </div>
            </form>
        )
    }
}   

export default SearchBar;
