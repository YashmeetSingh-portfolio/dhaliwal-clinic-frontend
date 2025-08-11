import React from 'react';
import '../styles/aiConsultationInfo.css';

export default function AIConsultationInfo() {
    return (
        <section className="ai-info-section">
            <div className="ai-info-content">
                <h2>Ask Our AI Assistant</h2>
                <p>
                    Have basic health questions? Get instant, AI-powered responses anytime. Our intelligent system is trained to provide guidance on common symptoms and general wellness — available 24/7 at your fingertips.
                </p>
                <a href="/ai-information" className="ai-btn">Chat with AI</a>
            </div>
        </section>
    );
}
