import React from "react";
import "./style.css";

export const LoginSuccess = () => {
  return (
    <div className="login-success">
      <div className="group-19">
        <div className="frame-36">
          <img
            className="vector-22"
            alt="Vector"
            src="/img/vector-6840-1.svg"
          />

          <div className="rectangle-21" />

          <div className="rectangle-22" />
        </div>

        <div className="frame-37">
          <div className="text-wrapper-26">Login Successful</div>

          <p className="you-re-all-set-tap">
            <span className="span">You’re all set! Tap </span>

            <span className="text-wrapper-27">Start</span>

            <span className="span"> to continue on WhatsApp.</span>
          </p>
        </div>

        <button className="apple-button-text-wrapper">
          <div className="apple-button-text-5">Start</div>
        </button>
      </div>
    </div>
  );
};
