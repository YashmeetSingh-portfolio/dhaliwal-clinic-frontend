// PaymentComponent.js

import React, { useState } from 'react';
import '../styles/paymentComponent.css';
import { FaQrcode, FaCreditCard, FaTag, FaSpinner } from 'react-icons/fa';

interface PaymentComponentProps {
  planTitle: string; // 👈 We'll use this prop
  credits: string;
  price: string;
  sessionId: string;
  onClose: () => void;
  onSuccess: (newTotalCredits: number) => void;
}

export default function PaymentComponent({ planTitle, credits, price, sessionId, onClose, onSuccess }: PaymentComponentProps) {
  const [couponCode, setCouponCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const applyCoupon = async () => {
    if (!couponCode.trim()) {
      setError('Please enter a coupon code.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/coupons/redeem`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // 👇 The request body now includes the planTitle
        body: JSON.stringify({
          couponCode: couponCode,
          sessionId: sessionId,
          planTitle: planTitle, // 👈 Send the plan title to the backend
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to apply coupon.');
      }
      setSuccessMessage(data.message);
      onSuccess(data.newTotalCredits);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="payment-overlay">
      <div className="payment-container">
        <button className="close-btn" onClick={onClose} disabled={isLoading}>✕</button>
        <h2 className="payment-title">Checkout</h2>
        <div className="plan-details">
          <p><strong>Plan:</strong> {planTitle}</p>
          <p><strong>Credits:</strong> {credits}</p>
          <p><strong>Price:</strong> {price}</p>
        </div>
        <h3 className="payment-method-title">Choose Payment Method</h3>
        <div className="payment-options">
          <div className="payment-option active selected">
            <FaTag size={20} />
            <span>Coupon Code</span>
          </div>
        </div>
        {!successMessage && (
          <div className="coupon-section">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="coupon-input"
              disabled={isLoading}
            />
            <button 
              className="apply-coupon-btn" 
              onClick={applyCoupon} 
              disabled={isLoading}
            >
              {isLoading ? <FaSpinner className="spinner" /> : 'Apply'}
            </button>
          </div>
        )}
        {error && <p className="feedback-message error-message">{error}</p>}
        {successMessage && <p className="feedback-message success-message">{successMessage}</p>}
        <div className="coupon-instructions">
          <p>Get a coupon code by contacting our clinic directly.</p>
        </div>
      </div>
    </div>
  );
}