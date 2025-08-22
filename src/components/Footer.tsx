import '../styles/footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <h3>Dhaliwal Clinic</h3>
                    <p>Providing trusted multi-specialist care in Salabatpura for over 11 years.</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/book-appointment">Book Appointment</a></li>
                        <li><a href="/consult-online">Consult Online</a></li>
                        <li><a href="/ai-information">AI Assistant</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>📞 <a href="tel:7696770310">7696770310</a></p>
                    <p>✉️ <a href="mailto:dhaliwalclinicsalabatpura@gmail.com">dhaliwalclinicsalabatpura@gmail.com</a></p>
                    <p>💬 <a href="https://wa.me/917696770310" target="_blank" rel="noreferrer">WhatsApp Us</a></p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Dhaliwal Clinic. All rights reserved.</p>
            </div>
        </footer>
    );
}
