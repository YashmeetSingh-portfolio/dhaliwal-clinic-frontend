import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// I'll assume you have a firebase.ts or firebaseConfig.ts file for auth
// If not, you'll need to create one.
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from './firebase'; // Adjust this import path to your firebase config file
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedAIWrapper from './components/ProtectedAIWrapper';
import PricingPage from './pages/PricingPage';

function App() {
  // State to hold the one, true session ID for the entire application
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    // This listener from Firebase checks if a user is logged in or out
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      if (currentUser) {
        // If user is logged in, create the session ID from their unique UID
        const userSessionId = `user-${currentUser.uid}`;
        setSessionId(userSessionId);
        console.log("User is logged in. Session ID set to:", userSessionId);
      } else {
        // If user is logged out, clear the session ID
        setSessionId('');
        console.log("User is logged out.");
      }
    });

    // This cleans up the listener when the App component is removed
    return () => unsubscribe();
  }, []); // The empty array means this effect runs only once when the app starts

  return (
     <AuthProvider>
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/ai-information" element={<ProtectedAIWrapper />} />
            
            {/* 👇 CRITICAL CHANGE HERE 👇 */}
            {/* We are now passing the sessionId from App's state down to the PricingPage */}
            <Route path="/pricing" element={<PricingPage sessionId={sessionId} />} />
          </Routes>
        </main>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;