import '../styles/about.css';

export default function AboutSection() {
    return (
        <section className="about-section">
            <div className="about-content">
                <h2>About Our Clinic</h2>
                <p>
                    Based in Salabatpura, Punjab, we are a trusted multi-specialist clinic with over 11 years of dedicated service. 
                    Led by a single experienced doctor, our clinic is known for achieving exceptional success in treating arthritis, liver conditions, joint pain, and more. 
                    We believe in personalized care, long-term healing, and building relationships that put your health first.
                </p>
                <a href="/about" className="about-btn">Learn More</a>
            </div>
        </section>
    );
}
