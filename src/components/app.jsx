import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable/musicTable';
import SongForm from './SongForm/songForm';
import SearchBar from './SearchBar/searchBar';
import NavBar from './NavBar/navBar';
import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
                songs: [],
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

    likeSong = async (id, titles) => {
        try{
            console.log("like song function is called")  // test
            await axios.patch(`http://127.0.0.1:8000/music/${id}/${titles}/`)
            let response = await this.getAllSongs()
            console.log("like song response")  // test
            if(response === undefined) {
                this.setState({

                })
            }
            else{
              this.setState({
                songs: response.data,
            });
        }
        }
        catch (ex) {
            console.log(ex);
        }
    }

    filterSongs = (searchQuery) => {
        console.log("filter songs running")  // test
        console.log(searchQuery)  // test
        console.log(this.state.songs)  // test
        
            // Filter the stateful "songs" property by the searchQuery
        const songFilter = this.state.songs.filter(song => song.title.includes(searchQuery)
        || song.artist.includes(searchQuery) || song.album.includes(searchQuery) || 
        song.genre.includes(searchQuery) || song.release_date.includes(searchQuery)
    )
        console.log(songFilter)  //test
        this.setState({
            songs : songFilter
        });
    }

    render() {
        return(
            <div className="outer-div">
                <NavBar/>
                <div className="container">
                    <SearchBar filterSongs={this.filterSongs}/>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={this.getAllSongs}>Reset</button>
                    <MusicTable songs={this.state.songs} likeSongs={this.likeSong}
                        deleteSongs={this.deleteSongById}/>
                    <SongForm updateTable={this.getAllSongs}/>    
                </div>
            </div>
        )
    }
}

export default App;
