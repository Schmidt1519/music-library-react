import React from 'react';

function DeleteSong(props){
    // console.log(props)   // test
    return(
        <td>
            <button type="button" className="btn danger btn-sm" onClick={() =>
                props.deleteSongs(props.songid)}>Delete</button>
        </td>
    )
}

export default DeleteSong;
