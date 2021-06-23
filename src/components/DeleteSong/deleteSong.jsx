import React from 'react';

function DeleteSong(props){
    console.log(props)
    return(
        <div>
            <button type="button" className="btn danger btn-sm" onClick={() =>
                props.deleteSongs(props.songid)}>Delete</button>
        </div>
    )
}

export default DeleteSong;
