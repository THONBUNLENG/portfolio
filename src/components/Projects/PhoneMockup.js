import React from "react";

function PhoneMockup() {
  return (
    <div className="phone-mockup-wrapper">
      <div className="phone-mockup phone-light">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-header">
            <span className="phone-avatar" />
            <div className="phone-lines">
              <span className="phone-line phone-line-md" />
              <span className="phone-line phone-line-sm" />
            </div>
          </div>
          <div className="phone-card-row">
            <div className="phone-mini-card" />
            <div className="phone-mini-card" />
          </div>
          <div className="phone-block" />
          <div className="phone-block phone-block-short" />
          <div className="phone-button">Light</div>
        </div>
      </div>

      <div className="phone-mockup phone-dark">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-header">
            <span className="phone-avatar" />
            <div className="phone-lines">
              <span className="phone-line phone-line-md" />
              <span className="phone-line phone-line-sm" />
            </div>
          </div>
          <div className="phone-card-row">
            <div className="phone-mini-card" />
            <div className="phone-mini-card" />
          </div>
          <div className="phone-block" />
          <div className="phone-block phone-block-short" />
          <div className="phone-button">Dark</div>
        </div>
      </div>
    </div>
  );
}

export default PhoneMockup;
