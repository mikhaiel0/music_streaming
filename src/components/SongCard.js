
import React from 'react';
import { useSpring, animated } from 'react-spring';

function SongCard({ song, onSelect }) {
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <animated.div style={fade} className="song-card" onClick={() => onSelect(song)}>
            <img src={song.thumbnail} alt={song.title} />
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
        </animated.div>
    );
}

export default SongCard;
