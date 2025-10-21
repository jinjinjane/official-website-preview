import React from "react";
import { Link } from "react-router-dom";
import { Apple } from "../../components/Apple";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="group-20">
        <img className="login-bg" alt="Login bg" src="/img/login-bg-1.svg" />

        <div className="group-21">
          <img
            className="rectangle-23"
            alt="Rectangle"
            src="/img/rectangle-346241400-1.svg"
          />

          <p className="privacy-policy-text">
            <span className="text-wrapper-28">
              By continuing, you agree to Jovida’s{" "}
            </span>

            <Link
              className="text-wrapper-29"
              rel="noopener noreferrer"
              target="_blank"
              to="/privacy"
            >
              Privacy Policy.
            </Link>
          </p>

          <div className="frame-38">
            <button className="google-button-wrapper">
              <div className="div-6">
                <img
                  className="social-media-icons"
                  alt="Social media icons"
                  src="/img/social-media-icons-1.svg"
                />

                <div className="google-button-text">Continue with google</div>
              </div>
            </button>

            <div className="apple-button-wrapper">
              <div className="div-6">
                <Apple />
                <div className="apple-button-text-6">Continue with apple</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
