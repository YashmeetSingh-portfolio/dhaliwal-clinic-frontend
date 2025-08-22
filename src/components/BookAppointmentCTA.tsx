import '../styles/bookAppointmentCTA.css';

export default function BookAppointmentCTA() {
    return (
        <section className="book-cta-section">
            <div className="book-cta-content">
                <h2>Your Health Journey Starts Here</h2>
                <p>Book your appointment now and consult directly with our trusted specialist. Quality care is just a click away.</p>
                <a href="/book-appointment" className="book-btn">Book Appointment</a>
            </div>
        </section>
    );
}
