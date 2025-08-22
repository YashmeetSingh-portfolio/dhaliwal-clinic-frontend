import './styles/contactPage.css';

export default function Contact() {
    const scrollToMain = () => {
        const section = document.querySelector('.contact-main');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <h1>Get In Touch</h1>
                <p>We're here to answer your questions, book appointments, and help you stay healthy.</p>
                
                <div className="scroll-arrow-container" onClick={scrollToMain}>
                    <div className="scroll-arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </section>

            <section className="contact-main">
                <div className="contact-info">
                    <h2>Contact Details</h2>
                    <p><strong>Phone:</strong> <a href="tel:7696770310">7696770310</a></p>
                    <p><strong>Email:</strong> <a href="mailto:dhaliwalclinicsalabatpura@gmail.com">dhaliwalclinicsalabatpura@gmail.com</a></p>
                    <p><strong>WhatsApp:</strong> <a href="https://wa.me/917696770310" target="_blank" rel="noopener noreferrer">7696770310</a></p>
                    <p><strong>Location:</strong> Salabatpura, Punjab</p>
                </div>

                <div className="map-wrapper">
                    <iframe
                        title="Clinic Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.454923004201!2d75.3341476!3d30.6014655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910fd2274fd27db%3A0xc571ecb95fd264f6!2sSalabatpura%2C%20Punjab%20142038!5e0!3m2!1sen!2sin!4v1661766512644!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                        className="contact-map"
                    ></iframe>
                    <p className="map-note">Click on the map to open in Google Maps.</p>
                </div>
            </section>

            <section className="contact-form-section">
                <h2>Send a Message</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="text" placeholder="Your Email/Phone" required />
                    <textarea rows={5} placeholder="Your Message" required />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    );
}