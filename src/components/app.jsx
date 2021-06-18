import React, { Component } from 'react';
import MusicTable from './MusicTable/musicTable';

class App extends Component {
    state = {
        songs: []
     }
    
    render() {
        return(
            <div>
                <MusicTable />
            </div>
        )
    }
}

export default App;
