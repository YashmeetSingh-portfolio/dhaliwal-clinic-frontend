import '../styles/services.css';

export default function ServicesOffered() {
    return (
        <section className="services-section">
            <div className="services-heading">
                <h2>Our Services</h2>
                <p>Comprehensive care tailored to your needs</p>
            </div>
            <div className="services-grid">
                <div className="service-card">
                    <h3>General Checkups</h3>
                    <p>Routine health exams to keep you in check and detect early signs of illness.</p>
                    <a href="/book-appointment" className="service-btn">Book Now</a>
                </div>
                <div className="service-card">
                    <h3>Arthritis Treatment</h3>
                    <p>Proven, effective treatment for chronic joint pain and arthritis relief.</p>
                    <a href="/book-appointment" className="service-btn">Book Now</a>
                </div>
                <div className="service-card">
                    <h3>Liver Care</h3>
                    <p>Diagnosis and treatment for liver-related issues using modern medical approaches.</p>
                    <a href="/book-appointment" className="service-btn">Book Now</a>
                </div>
                <div className="service-card">
                    <h3>Online Consultation</h3>
                    <p>Connect with our doctor from the comfort of your home via secure video calls.</p>
                    <a href="/consult-online" className="service-btn">Consult Now</a>
                </div>
                <div className="service-card">
                    <h3>Multi-Speciality Care</h3>
                    <p>Receive expert care across various fields including joint pain, liver health, and chronic conditions — all under one roof.</p>
                    <a href="/book-appointment" className="service-btn">Explore</a>
                </div>
                <div className="service-card">
                    <h3>AI Health Assistant</h3>
                    <p>Ask our AI-powered system basic health-related questions and get instant, informative guidance.</p>
                    <a href="/ai-information" className="service-btn">Ask AI</a>
                </div>
            </div>
        </section>
    );
}
