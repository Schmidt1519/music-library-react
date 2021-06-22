import React from 'react';
import DeleteSong from '../DeleteSong/deleteSong'


function MusicTable(props) {
    console.log(props.songs)  // test
    if(props.songs === undefined){
        return (
            null  // better way to handle this?
        );
    }
    else{
        const songsList = props.songs.map((song) => {       
            return <tr key={song.id}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.genre}</td>
                    <td>{song.release_date}</td>
                    <td>{song.likes}</td>
                    <DeleteSong songid={song.id} deleteSongs={props.deleteSongs} />
                   </tr>
        })
        return(
            <div>
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
                    <tbody>
                        {songsList}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MusicTable;