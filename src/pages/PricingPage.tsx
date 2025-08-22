import  { useState } from 'react'; // No longer need useEffect or uuidv4
import { useNavigate } from 'react-router-dom';
import { FaCoins, FaInfinity, FaCheckCircle, FaCrown } from 'react-icons/fa';
import './styles/pricingPage.css';
import PaymentComponent from '../components/PaymentComponent';

// Define the type for the props this component will receive
interface PricingPageProps {
  sessionId: string;
}

// The component now accepts props, specifically the real sessionId
export default function PricingPage({ sessionId }: PricingPageProps) {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [userCredits, setUserCredits] = useState(0); 
  const navigate = useNavigate();
  console.log(userCredits); // Debugging line to check sessionId
  // The useEffect that generated a random ID has been completely removed.

  const plans = [
    { title: 'Basic', credits: '50 Credits', price: '₹250', icon: <FaCoins size={28} />, highlight: false, isComingSoon: false },
    { title: 'Standard', credits: '100 Credits', price: '₹500', icon: <FaCoins size={28} />, highlight: false, isComingSoon: false },
    { title: 'Monthly Unlimited', credits: 'Unlimited Credits', price: '₹600 / month', icon: <FaInfinity size={28} />, highlight: true, isComingSoon: true },
  ];

  const handleCouponSuccess = (newTotalCredits: number) => {
    // This logic redirects the user to the home page with a success message
    localStorage.setItem('showSuccessPopup', 'Credits successfully purchased! You can now use them to ask Health tips from our AI.');
    setUserCredits(newTotalCredits);
    navigate('/');
  };

  return (
    <div className="pricing-page">
      <div className="pricing-container">
        <h1 className="pricing-title">Choose Your Plan</h1>
        <p className="pricing-subtitle">
          Flexible pricing to suit your needs. 
        </p>
        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div className={`pricing-card ${plan.highlight ? 'highlight-plan' : ''}`} key={index}>
              {plan.highlight && (
                <div className="plan-badge"><FaCrown size={14} /> Best Value</div>
              )}
              <div className="plan-icon">{plan.icon}</div>
              <h2 className="plan-title">{plan.title}</h2>
              <p className="plan-credits"><FaCheckCircle className="check-icon" /> {plan.credits}</p>
              <p className="plan-price">{plan.price}</p>
              {plan.isComingSoon ? (
                <button className="buy-button disabled-btn" disabled>Coming Soon</button>
              ) : (
                <button
                  className={`buy-button ${plan.highlight ? 'highlight-btn' : ''}`}
                  onClick={() => setSelectedPlan(plan)}
                >Buy Now</button>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedPlan && (
        <PaymentComponent
          planTitle={selectedPlan.title}
          credits={selectedPlan.credits}
          price={selectedPlan.price}
          sessionId={sessionId} // ✅ This now uses the REAL sessionId from props
          onClose={() => setSelectedPlan(null)}
          onSuccess={handleCouponSuccess}
        />
      )}
    </div>
  );
}