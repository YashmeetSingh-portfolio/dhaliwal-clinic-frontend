import React from 'react';
import '../styles/hero.css';
import { Link } from 'react-router-dom';

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Your Health, Our Priority</h1>
                <p>Compassionate care, trusted doctors, and easy appointment booking — all in one place.</p>
                <div className="hero-buttons">
                    <Link to="/book-appointment" className="hero-btn primary">Book Appointment</Link>
                    <Link to="/ai-information" className="hero-btn secondary">AI Health Tips</Link>
                </div>
            </div>
        </section>
    );
}
