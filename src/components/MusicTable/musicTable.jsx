import React, {Component} from 'react';
import axios from 'axios'
import DeleteSong from '../DeleteSong/deleteSong'
import SongForm from '../SongForm/songForm'

class MusicTable extends Component {
    constructor(props) {
        super(props);
            this.state = {
                songs: [],
            }
            this.getAllSongs = this.getAllSongs.bind(this);
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
                songs: response.data
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

    renderSongs() {
        const deleteMethod = this.deleteSongById.bind(this);
        const songsList = this.state.songs.map((songs) => {
                   
        return (
            <thead key={songs.id}>
                <tr>
                    <td>{songs.title}</td>
                    <td>{songs.artist}</td>
                    <td>{songs.album}</td>
                    <td>{songs.genre}</td>
                    <td>{songs.release_date}</td>
                    <td>{songs.likes}</td>
                    <DeleteSong songsid={songs.id} DeleteSongs={deleteMethod} />
                </tr>
            </thead>
        )
    })

    return(
        <React.Fragment>
            <h1>Leighton's Music Library</h1>
                <table>
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
                    {songsList}
                </table>
        </React.Fragment>
    )
    }

    render() {
        return(
            <React.Fragment>
                {console.log(this.state)}
                {this.renderSongs()}
                <SongForm updateTable={this.getAllSongs}/>
            </React.Fragment>
        )
    }
}

export default MusicTable;
