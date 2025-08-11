import React from 'react';
import './styles/bookAppointment.css';

export default function BookAppointment() {
    return (
        <div className="appointment-page">
            <section className="appointment-hero">
                <h1>Book an Appointment</h1>
                <p>Schedule your visit at Dhaliwal Clinic quickly and easily.</p>
            </section>

            <section className="appointment-form-section">
                <div className="appointment-form-container">
                    <h2>Fill in Your Details</h2>
                    <form className="appointment-form">
                        <input type="text" placeholder="Full Name" required />
                        <input type="text" placeholder="Phone Number" required />
                        <input type="email" placeholder="Email (optional)" />
                        <select required>
                            <option value="">Select Concern</option>
                            <option value="arthritis">Arthritis</option>
                            <option value="liver">Liver Issues</option>
                            <option value="joint">Joint Pain</option>
                            <option value="general">General Checkup</option>
                            <option value="other">Other</option>
                        </select>
                        <input type="date" required />
                        <textarea rows={4} placeholder="Describe your issue (optional)" />
                        <button type="submit">Book Appointment</button>
                    </form>
                </div>
            </section>
        </div>
    );
}
