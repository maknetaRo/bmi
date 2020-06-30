import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>Created with &hearts; by <a class="author" href="https://twitter.com/makneta">Magdalena Rosłaniec</a></p>
            <p>&copy; {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer