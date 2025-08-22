import  { useState, useEffect } from 'react';
import '../styles/navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut, type User } from 'firebase/auth';
import { FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [credits, setCredits] = useState(0);
  const [days] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const fetchCredits = async () => {
    if (!user) return;
    try {
      const userSessionId = `user-${user.uid}`;
      const res = await fetch(`http://localhost:3000/get-credits/${userSessionId}`);
      const data = await res.json();
      setCredits(data.credits);
    } catch (err) {
      console.error('Error fetching credits:', err);
    }
  };

  useEffect(() => {
    if (user) {
      fetchCredits(); // fetch when user logs in
    }
  }, [user]);

  useEffect(() => {
    const handleCreditsUpdate = () => fetchCredits();
    window.addEventListener("creditsUpdated", handleCreditsUpdate);
    return () => {
      window.removeEventListener("creditsUpdated", handleCreditsUpdate);
    };
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setShowDropdown(false);
    navigate('/');
  };

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="logo-container">M</div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link to="/book-appointment" className="nav-link" onClick={() => setIsOpen(false)}>Book Appointment</Link>
        <Link to="/ai-information" className="nav-link" onClick={() => setIsOpen(false)}>AI Health Tips</Link>
        <Link to="/pricing" className="nav-link" onClick={() => setIsOpen(false)}>Pricing</Link>

        <div className="mobile-auth">
          {!user ? (
            <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
          ) : (
            <div className="profile-menu">
              <div className="profile-icon" onClick={() => setShowDropdown(!showDropdown)}>
                <FaUserCircle size={28} />
              </div>
              {showDropdown && (
                <div className="dropdown-menu">
                  <p>{user.displayName || user.email}</p>
                  <span>💰 <strong>Credits:</strong> {credits}</span>
                  <span>📅 <strong>Valid for:</strong> {days} Days</span>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="auth-container">
        {!user ? (
          <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
        ) : (
          <div className="profile-menu">
            <div className="profile-icon" onClick={() => setShowDropdown(!showDropdown)}>
              <FaUserCircle size={26} />
            </div>
            {showDropdown && (
              <div className="dropdown-menu">
                <p>{user.displayName || user.email}</p>
                <p><strong>Credits:</strong> {credits}</p>
                <p><strong>days:</strong> {days}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
