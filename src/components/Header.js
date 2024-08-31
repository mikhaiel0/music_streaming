import React from 'react';

function Header({ user }) {
    return (
        <header className="app-header">
            <h1>Hi There, {user}</h1>
            <input type="text" placeholder="Search for songs, albums, or artists" />
        </header>
    );
}

export default Header;

