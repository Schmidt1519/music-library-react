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

    // ex: async filterSongs("Beatles")
    // async filterSongs() {
    //     try{
    //         console.log("filter songs function is called")  // test
    //         const { data: songs } = await axios.get('http://127.0.0.1:8000/music/');
    //         // await axios.get('http://127.0.0.1:8000/music/');
    //         // console.log({ data:songs })  // test
    //         this.setState({ songs })
    //         // this.setState({ });
    //     }
    //     catch (ex) {
    //         console.log(ex);
    //     }
    // }

    handleChange(event) {
        this.setState({ 
            searchQuery: event.target.value
            // isFiltered : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.filterSongs(this.state.searchQuery);
        // this.setState({

    }

    // render () {
    //     console.log(this.props);
    //     // this.props.getAllSongs();
    //     const searchSongs = this.props.songs.filter(song => song.title.includes(this.state.search)).map(song => (
    //         <thead key={songs.id}>
    //         <tr>
    //             <td>{songs.title}</td>
    //             <td>{songs.artist}</td>
    //             <td>{songs.album}</td>
    //             <td>{songs.genre}</td>
    //             <td>{songs.release_date}</td>
    //             <td>{songs.likes}</td>
    //         </tr>
    //     </thead>
    //     ))
    // }
    
    render() {
        return(
            <form className="search-bar" onSubmit={(event) => this.handleSubmit(event)}>
                <div>
                    <label>Search </label>
                    <input type="text" className="search-form"
                    onChange={this.handleChange} value={this.searchQuery}/>
                </div>
            </form>
            // <div>
            //     <input type="search" className="search-form" id="search" placeholder="Search..."
            //     onChange={this.handleChange} value={this.props.isFiltered}/>
            //     <h3>{this.state.isFiltered}</h3>
                /* <input type="text" onChange={this.props.filterSongs} value={this.props.isFiltered}/> */
                    /* <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Artist</th>
                                <th>Album</th>
                                <th>Genre</th>
                                <th>Release Date</th>
                                <th>Likes</th>
                            </tr>    
                        </thead>
                        {searchSongs}
                    </table> */
        )
    }
}   

export default SearchBar;