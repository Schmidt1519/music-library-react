import React, {Component} from 'react';
import MusicTable from './MusicTable/musicTable';
import SongForm from './SongForm/songForm';


class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
                // songs: []
                title: '',
                artist: '',
                album: '',
                genre: '',
                release_date: '',
                likes: '',
            }
        }
    
    render() {
        return(
            <div>
                <MusicTable />
                <SongForm songs={this.songs} />
                {/* <SongForm createSong={this.props.createSong.bind(this)} /> */}
                
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
