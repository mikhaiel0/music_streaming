
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Playlist from '../components/Playlist';
import SongCard from '../components/SongCard';

function Home() {
    const [playlists, setPlaylists] = useState([]);
    const [lastSession, setLastSession] = useState([]);

    useEffect(() => {
        // Replace with actual API calls to get playlists and last session data
        const fetchData = async () => {
            const result = await axios.get('API_URL');
            setPlaylists(result.data.playlists);
            setLastSession(result.data.lastSession);
        };

        fetchData();
    }, []);

    return (
        <div className="home">
            <h2>Your Playlists</h2>
            <div className="playlists">
                {playlists.map((playlist) => (
                    <Playlist key={playlist.id} playlist={playlist} />
                ))}
            </div>

            <h2>Last Session</h2>
            <div className="last-session">
                {lastSession.map((song) => (
                    <SongCard key={song.id} song={song} />
                ))}
            </div>
        </div>
    );
}

export default Home;
