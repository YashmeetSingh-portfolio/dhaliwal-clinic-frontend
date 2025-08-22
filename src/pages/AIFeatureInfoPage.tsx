// src/pages/AIFeatureInfoPage.tsx
import { useNavigate } from 'react-router-dom';
import './styles/aiFeatureInfo.css';

export default function AIFeatureInfoPage() {
  const navigate = useNavigate();

  return (
    <div className="ai-info-page">
      <section className="ai-info-hero">
        <div className="ai-info-text">
          <h1 className="ai-info-heading">Unlock the Power of AI Health Tips</h1>
          <p className="ai-info-description">
            Get personalized, smart health advice based on common symptoms and health trends using our AI-powered engine.
            This feature helps you make more informed health choices before visiting the clinic.
          </p>
        </div>
     
      </section>

      <section className="ai-info-cta">
        <h2 className="ai-cta-heading">Login to Access</h2>
        <p className="ai-cta-text">This feature is available only to logged-in users. Please log in or create an account to proceed.</p>
        <div className="ai-buttons">
          <button className="ai-login-btn" onClick={() => navigate('/login')}>Login</button>
          <button className="ai-signup-btn" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </section>
    </div>
  );
}
