import '../styles/contactAndLocation.css';

export default function ContactAndLocation() {
    return (
        <section className="contact-location-section">
            <div className="contact-container">
                <h2>Contact Us</h2>
                <p><strong>Phone:</strong> <a href="tel:7696770310">7696770310</a></p>
                <p><strong>Email:</strong> <a href="mailto:dhaliwalclinicsalabatpura@gmail.com">dhaliwalclinicsalabatpura@gmail.com</a></p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/917696770310" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
            </div>

            <div className="map-container">
                <div className="map-frame">
                    
                    <iframe
                        title="Clinic Location"
                        src="https://www.google.com/maps?q=Salabatpura+Punjab&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                    ></iframe>
                    <a
                        href="https://www.google.com/maps/place/Salabatpura,+Punjab"
                        className="map-overlay"
                        target="_blank"
                        rel="noopener noreferrer"
                    ></a>
                </div>
                <div className="map-description">
                    Located in the heart of Salabatpura, Punjab — easy to reach, with nearby landmarks and transport access.
                </div>
            </div>
        </section>
    );
}
