import React from 'react';

function LikeSong(props){
    // console.log(props)   // test
    return(
        <td>
            <button type="button" className="btn btn-outline-primary btn-sm" onClick={() =>
                props.likeSongs(props.songid, props.songtitle)}>Like</button>
        </td>
    )
}

export default LikeSong;
