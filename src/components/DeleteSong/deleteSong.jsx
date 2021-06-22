import React from 'react';

function DeleteSong(props){
    console.log(props)
    return(
        <div>
            <button type="button" class="btn danger btn-sm" onClick={() => props.deleteSongs(props.songid)}>Delete</button>
        </div>
    )
}

export default DeleteSong;
