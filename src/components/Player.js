import React from 'react';

function Player({ currentSong }) {
    return (
        <div className="player">
            <h2>Now Playing</h2>
            <p>{currentSong ? currentSong.title : "Select a song to play"}</p>
        </div>
    );
}

export default Player;

