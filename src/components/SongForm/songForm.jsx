import React, {Component} from 'react';
import axios from 'axios'

class SongForm extends Component {
    constructor(props) {
        super(props);
            this.state = {
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
    
    async createSong() {
        const song = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            genre: this.state.genre,
            release_date: this.state.release_date,
        }
        try{
            console.log("create a song request is called")  // test
            await axios.post('http://127.0.0.1:8000/music/', song);
            this.props.updateTable();
            this.setState({
            });
            alert(`${this.state.title} by ${this.state.artist} has been added to the library`)
        }
        catch (ex) {
            console.log(ex);
        }
    }

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
        event.preventDefault();
        this.createSong();
    }

        render() {
        return(
            <form className="song-form" id="song-form-id" onSubmit={(event) => this.handleSubmit(event)}>
                <div className="add-song-div">
                    <h1>Add Song:</h1>
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
                <div>
                <button className="btn btn-primary btn-sm" type="submit">Add Song</button>
                </div>
            </form>
        )
    }
}

export default SongForm;
