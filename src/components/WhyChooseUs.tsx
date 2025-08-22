import '../styles/whychooseus.css';

export default function WhyChooseUs() {
    return (
        <section className="why-section">
            <div className="why-heading">
                <h2>Why Choose Us</h2>
                <p>Trusted by hundreds for consistent, quality care</p>
            </div>

            <div className="why-grid">
                <div className="why-card">
                    <span className="why-icon">🩺</span>
                    <h3>Experienced Doctor</h3>
                    <p>Led by a single trusted doctor with 11+ years of hands-on experience in patient care.</p>
                </div>
                <div className="why-card">
                    <span className="why-icon">🌿</span>
                    <h3>High Success Rates</h3>
                    <p>Consistently successful outcomes in treating arthritis, liver issues, and joint pain.</p>
                </div>
                <div className="why-card">
                    <span className="why-icon">🧬</span>
                    <h3>Multi-Specialist Approach</h3>
                    <p>Personalized care for a wide range of medical concerns under one roof.</p>
                </div>
                <div className="why-card">
                    <span className="why-icon">📱</span>
                    <h3>Online Consultations</h3>
                    <p>Get expert medical advice from the comfort of your home via secure video consultations.</p>
                </div>
                <div className="why-card">
                    <span className="why-icon">🤖</span>
                    <h3>AI Health Assistant</h3>
                    <p>Ask health-related questions anytime and get instant guidance from our AI tool.</p>
                </div>
                <div className="why-card">
                    <span className="why-icon">🏥</span>
                    <h3>11+ Years of Service</h3>
                    <p>Serving at Salabatpura with compassion and commitment since day one.</p>
                </div>
            </div>
        </section>
    );
}
