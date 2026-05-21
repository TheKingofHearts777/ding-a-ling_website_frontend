import React from 'react';
import './App.css';

export default function Home() {
    return (
        <div className="container">
            <header>
                <h1>Welcome to Our Site</h1>
                <p>Your journey starts here</p>
            </header>

            <section className="card">
                <p>Discover our craft and services — handcrafted with care.</p>
            </section>

            <footer className="footer">
                <p>&copy; 2026 Ding-a-Ling Blacksmiths. All rights reserved.</p>
            </footer>
        </div>
    );
}