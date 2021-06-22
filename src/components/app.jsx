import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable/musicTable';
import SongForm from './SongForm/songForm';
import SearchBar from './SearchBar/searchBar';
import NavBar from './NavBar/navBar';

class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
                songs: [],
                isFiltered: []
            }
            this.getAllSongs = this.getAllSongs.bind(this);
            this.deleteSongById = this.deleteSongById.bind(this);
        }

    componentDidMount() {
        this.getAllSongs();
    }

    async getAllSongs() {
        try{
            console.log("make songs request is called")  // test
            let response = await axios.get('http://127.0.0.1:8000/music/');
            console.log(response.data)  // test
            this.setState({
                songs: response.data,
                isFiltered: response.data
            });
        }
        catch (ex) {
            console.log(ex);
        }
    }

    async deleteSongById(id) {
        try{
            console.log("delete song function is called")  // test
            await axios.delete(`http://127.0.0.1:8000/music/${id}/`)
            await this.getAllSongs()
            console.log("delete song response")  // test
        }
        catch (ex) {
            console.log(ex);
        }
    }

    filterSongs = (searchQuery) => {
        this.setState({
            isFiltered: searchQuery
        });
        console.log("filter songs running")  // test
            // Filter the stateful "songs" property by the searchQuery
        const songFilter = this.state.songs.filter(song => song.title.includes(this.state.isFiltered) || 
        song.artist.includes(this.state.isFiltered) || song.album.includes(this.state.isFiltered) || 
        song.genre.includes(this.state.isFiltered) || song.release_date.includes(this.state.isFiltered)
    )
        console.log(songFilter)  // empty []
    }

    // filterSongs = (event) => {
    //     console.log("hi from onChange", event.target.value)
    //     this.setState({
    //         isFiltered: event.target.value
    //     })
    // }
    
    render() {
        return(
            <div>
                <NavBar/>
                <SearchBar filterSongs={this.filterSongs}/>
                {/* <SearchBar songs={this.state.songs(isFiltered)}
                    filterSongs={this.filterSongs} /> */}
                    {/*isFiltered={this.state.isFiltered} />*/}
                <MusicTable songs={this.state.songs} deleteSongs={this.deleteSongById}/>
                <SongForm updateTable={this.getAllSongs}/>

                {/* <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                    crossorigin="anonymous"
                /> */}
            </div>
        )
    }
}

export default App;
