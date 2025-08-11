import React from 'react';
import './styles/aboutPage.css';

export default function About() {
    const scrollToDoctor = () => {
        const doctorSection = document.querySelector('.about-doctor');
        if (doctorSection) {
            doctorSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="about-hero-text">
                    <h1>About Dhaliwal Clinic</h1>
                    <p>Serving Salabatpura and beyond for over 11 years with trusted multi-specialist care.</p>
                </div>
                <div className="scroll-arrow" onClick={scrollToDoctor}>
                    ↓
                </div>
            </section>

            <section className="about-intro">
                <div className="about-intro-text">
                    <h2>Our Mission</h2>
                    <p>To provide accessible, compassionate, and expert medical care to every patient. From arthritis and liver care to joint pain treatment, our mission is to bring relief, trust, and long-term well-being.</p>
                </div>
                <img src="https://via.placeholder.com/500x350.png?text=Clinic+Exterior" alt="Clinic Exterior" />
            </section>

            <section className="about-doctor">
                <img src="https://via.placeholder.com/300x300.png?text=Doctor" alt="Doctor" />
                <div className="about-doctor-text">
                    <h2>Meet Our Doctor</h2>
                    <p>With over a decade of hands-on experience and hundreds of success stories, our single dedicated doctor brings personalized care and clinical excellence in every consultation. Patients trust us for clarity, transparency, and result-driven treatments.</p>
                </div>
            </section>

           
        </div>
    );
}
