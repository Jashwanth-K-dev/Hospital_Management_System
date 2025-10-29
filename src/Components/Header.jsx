import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">

        {/* Left: Logo */}
        <div className="logo-section">
          <div className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 12h18"
                stroke="#0aa1ae"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 3v18"
                stroke="#ef4444"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h1 className="logo-text">
            Med<span className="highlight">NXT</span>
          </h1>
        </div>

        {/* Right: Contact + Time + Button */}
        <div className="right-section">
          <div className="info-item">
            <span className="info-icon">⏰</span>
            <div>
              <p className="info-title">MON TO SAT</p>
              <p className="info-detail">9 AM to 8 PM</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <p className="info-title">CALL US</p>
              <p className="info-detail">9510357514</p>
            </div>
          </div>

          <button className="book-btn">BOOK APPOINTMENT</button>
        </div>
      </div>
    </header>
  );
}