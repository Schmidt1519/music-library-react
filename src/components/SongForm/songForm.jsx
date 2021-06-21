import React, {Component} from 'react';
import axios from 'axios'

class SongForm extends Component {
    constructor(props) {
        super(props);
            this.state = {
                // songs: [],
                id: '',
                title: '',
                artist: '',
                album: '',
                genre: '',
                release_date: '',
                likes: '',
                errors: {
                    title: '',
                    artist: ''
                }
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    async createSong(song) {
        try{
            console.log("create a song request is called")  // test
            // let response = await axios.post('http://127.0.0.1:8000/music/');
            await axios.post('http://127.0.0.1:8000/music/', song);
            let response = await this.props.getAllSongs()
            console.log(response.data)  // test
            this.setState({
                songs: response.data
            });
        }
        catch (ex) {
            console.log(ex);
        }
    }
        
    // handleChange = (event) => {
    handleChange(event) {
        let errors = this.state.errors;

        switch(event.target.name){
            case 'title':
                errors.title = event.target.value.length < 2 ? "Title must be at least two characters" : null;
                break;
            case 'artist':
                errors.artist = event.target.value.length < 2 ? "Artist name must be at least two characters" : null;
                break;
            default:
                break;
        }

        console.log("beginning handle change") // test
        this.setState({
            [event.target.name]: event.target.value,
            errors: errors
        })
        console.log("end of handle change") // test
    }

    handleSubmit(event) {
        console.log(this.state.songs);  // test
        event.preventDefault();
        const song = {
            id: this.state.id,
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            genre: this.state.genre,
            release_date: this.state.release_date,
            likes: this.state.likes,
        }
        this.createSong(song);
        this.setState({
            id: '',
            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: '',
            likes: '',
        })
    }

        render() {
        return(
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/> 
                </div>
                    {this.state.errors.title ? <p style={{color:'red'}}>{this.state.errors.title}</p> : ''}
                <div>
                    <label>Artist</label>
                    <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist}/>
                </div>
                    {this.state.errors.artist ? <p style={{color:'red'}}>{this.state.errors.artist}</p> : ''}
                <div>
                    <label>Album</label>
                    <input type="text" name="album" onChange={this.handleChange} value={this.state.album}/> 
                </div>
                <div>
                    <label>Genre</label>
                    <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/> 
                </div>
                <div>
                    <label>Release Date</label>
                    <input type="text" name="release_date" onChange={this.handleChange} value={this.state.release_date}/>  
                </div>
                {/* <div> */}
                    {/* <label>Likes</label>
                    <input type="number" name="likes" onChange={this.handleChange} value={this.state.likes}/>   */}
                {/* </div> */}
                <div>
                    <button type="submit">Add Song</button>
                </div>
            </form>
        )
    }
}

export default SongForm;
