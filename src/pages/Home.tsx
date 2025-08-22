import  { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesOffered from '../components/ServicesOffered';
import WhyChooseUs from '../components/WhyChooseUs';
import BookAppointmentCTA from '../components/BookAppointmentCTA';
import AIConsultationInfo from '../components/AIConsultationInfo';
import ContactAndLocation from '../components/ContactAndLocation';
import Footer from '../components/Footer';

export default function Home() {
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  // This effect checks localStorage when the page loads. It's still needed.
  useEffect(() => {
    const message = localStorage.getItem('showSuccessPopup');
    if (message) {
      setPopupMessage(message);
      localStorage.removeItem('showSuccessPopup');
    }
  }, []);

  // 👇 This new effect creates a timer to automatically hide the notification
  useEffect(() => {
    if (popupMessage) {
      const timer = setTimeout(() => {
        setPopupMessage(null);
      }, 4000); // The notification will disappear after 4 seconds

      // Cleanup function to clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [popupMessage]); // This effect runs whenever popupMessage changes

  return (
    <div>
      {/* 👇 The JSX is now simpler and uses the new "notification-toast" class 👇 */}
      {popupMessage && (
        <div className="notification-toast">
          <FaCheckCircle size={24} />
          <p>{popupMessage}</p>
        </div>
      )}

      {/* Your existing page components */}
      <HeroSection />
      <AboutSection />
      <ServicesOffered />
      <WhyChooseUs />
      <AIConsultationInfo />
      <ContactAndLocation />
      <BookAppointmentCTA />
      <Footer />
    </div>
  );
}