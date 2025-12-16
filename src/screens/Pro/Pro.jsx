import React from "react";
import { SEO } from "../../components/SEO";
import "./style.css";

export const Pro = () => {
  return (
    <div className="pro">
      <SEO 
        title="Jovida Pro - Advanced Weight & Diet Management" 
        description="Upgrade to Jovida Pro for personalized diet plans, advanced weight management tools, and 24/7 access to your AI Nutritionist."
        keywords="Jovida Pro, Weight Loss App, Diet Management, AI Nutritionist, Premium Health Coach, Weight Management"
      />
      <div className="group-18">
        <img
          className="image-container"
          alt="Image container"
          src="/img/image-container-1.png"
        />

        <div className="frame-32">
          <div className="button-container">
            <div className="upgrade-button">Upgrade</div>
          </div>

          <div className="text-wrapper-22">Limited-time Offer</div>
        </div>

        <div className="frame-33">
          <div className="pricing-container">
            <div className="pricing-background" />

            <div className="monthly-price">$4.9</div>

            <div className="monthly-duration">/mon</div>

            <div className="yearly-price">
              <div className="text-wrapper-23">$ 59.9</div>

              <div className="text-wrapper-24">/year</div>

              <div className="text-wrapper-25">$99</div>
            </div>

            <div className="yearly-plan">Yearly</div>

            <div className="trial-badge">
              <div className="trial-badge-text">7-day free trial</div>
            </div>
          </div>

          <div className="monthly-pricing">
            <div className="monthly-pricing-2">
              <div className="pricing-background-2" />

              <div className="monthly-price-2">
                <div className="text-wrapper-23">$ 9.9</div>

                <div className="text-wrapper-24">/mon</div>

                <div className="text-wrapper-25">$99</div>
              </div>

              <div className="monthly-label">Monthly</div>

              <div className="monthly-icon">
                <img
                  className="vector-18"
                  alt="Vector"
                  src="/img/vector-6492-1.svg"
                />
              </div>
            </div>

            <div className="monthly-price-3">$9.9</div>

            <div className="monthly-duration-2">/mon</div>
          </div>
        </div>

        <div className="frame-34">
          <div className="plan-title">Pro Plan</div>

          <div className="feature-list">
            <div className="feature-item">
              <div className="frame-35">
                <img
                  className="vector-19"
                  alt="Vector"
                  src="/img/vector-14.svg"
                />
              </div>

              <p className="feature-description">
                Unlimited chats &amp; file uploads
              </p>
            </div>

            <div className="feature-item">
              <div className="frame-35">
                <img
                  className="vector-20"
                  alt="Vector"
                  src="/img/vector-15.svg"
                />
              </div>

              <div className="feature-description">24/7 voice access</div>
            </div>

            <div className="feature-item-2">
              <div className="frame-35">
                <img className="union-2" alt="Union" src="/img/union-4.svg" />

                <div className="checkmark" />

                <div className="checkmark-2" />
              </div>

              <div className="feature-description">
                Instant, personalized Health Report
              </div>
            </div>

            <div className="feature-item-2">
              <div className="frame-35">
                <div className="vector-wrapper">
                  <img
                    className="vector-21"
                    alt="Vector"
                    src="/img/vector-16.svg"
                  />
                </div>
              </div>

              <div className="feature-description">
                Persistent personal memory
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
