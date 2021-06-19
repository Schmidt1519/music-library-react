import React from 'react';

function DeleteSong(props){
    console.log(props)
    return(
        <div>
            <button onClick={() => props.DeleteSongs(props.songsid)}>Delete</button>
        </div>
    )
}

export default DeleteSong;
