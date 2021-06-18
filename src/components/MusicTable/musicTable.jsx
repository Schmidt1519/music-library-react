import React, {Component} from 'react';
import axios from 'axios'

class musicTable extends Component {
    constructor(props) {
        super(props);
            this.state = {
                songs: [],
            }
    }

    componentDidMount() {
        this.makeSongsRequest();
    }

    async makeSongsRequest() {
        try{
            console.log("make songs request is called")  // test
            let response = await axios.get('http://127.0.0.1:8000/music/?format=json');
            console.log(response.data)  // test
            this.setState({
                songs: response.data
            });
        }
        catch (ex) {
            console.log(ex);
        }
   }

    renderSongs() {
    const songsList = this.state.songs.map((songs) => {
        return (
            <tr>
                <td>{songs.artist}</td>
                <td>{songs.title}</td>
                <td>{songs.album}</td>
                <td>{songs.genre}</td>
                <td>{songs.release_date}</td>
            </tr>
        )
    })

    return(
        <div>
            <h1>Leighton's Music Library</h1>
                <table>
                    <tr>
                        <th>Artist</th>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                        <tbody>
                            {songsList}
                        </tbody>
                </table>
       </div>
    )
    }

    render() {
        return(
            <React.Fragment>
                {console.log(this.state)}
                {this.renderSongs()}
            </React.Fragment>
        )
    }
}

export default musicTable;
