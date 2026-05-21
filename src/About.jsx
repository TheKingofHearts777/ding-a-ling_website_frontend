import React from 'react';
import './App.css';

const About = () => {
    return (
        <section className="section-card">
            <div className="container">
                <h1>About</h1>
                <div>
                    <ul>
                        <li>Blacksmithing demos</li>
                        <li>Blacksmith training</li>
                        <li>
                            Blacksmithing to sell
                            <ul>
                                <li>Custom orders</li>
                                <li>Pre-made items</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;