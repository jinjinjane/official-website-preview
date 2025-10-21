import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Message = () => {
  return (
    <div className="message">
      <div className="group">
        <div className="button">
          <div className="frame">
            <div className="img-wrapper">
              <img className="union" alt="Union" src="/img/union.svg" />
            </div>

            <div className="apple-button-text">Start with SMS</div>
          </div>

          <div className="frame">
            <div className="img-wrapper">
              <img className="vector" alt="Vector" src="/img/vector-2.svg" />
            </div>

            <div className="apple-button-text">Start with WhatsApp</div>
          </div>
        </div>

        <div className="div">
          <div className="card">
            <div className="frame-2">
              <img className="image" alt="Image" src="/img/image-8.png" />

              <img
                className="img"
                alt="Img"
                src="/img/img-v3-02r2-a40c4551-221e-4c20-8ea4-1b0bdeb8440g-1.png"
              />

              <div className="rectangle" />

              <div className="rectangle-2" />

              <div className="rectangle-3" />

              <div className="text-wrapper">Jovida</div>

              <img
                className="vector-2"
                alt="Vector"
                src="/img/vector-6839.svg"
              />

              <img
                className="avatar-container"
                alt="Avatar container"
                src="/img/avatar-container-2.png"
              />

              <div className="text-wrapper-2">Text Message · SMS</div>

              <p className="p">Mon, Sep 22 at 16:11</p>

              <div className="text-wrapper-3">Teday</div>

              <div className="div-wrapper">
                <p className="text-wrapper-4">
                  Finished training today. I just had some chicken breast and
                  broccoli.
                </p>
              </div>

              <div className="frame-3">
                <p className="text-wrapper-5">
                  Post-workout chicken breast and broccoli-so disciplined! You
                  nailed protein and fiber.
                </p>
              </div>

              <img
                className="rectangle-4"
                alt="Rectangle"
                src="/img/rectangle-346241651.svg"
              />

              <img
                className="rectangle-5"
                alt="Rectangle"
                src="/img/rectangle-346241652-2.svg"
              />

              <img className="image-2" alt="Image" src="/img/image-10.png" />
            </div>

            <img className="image-3" alt="Image" src="/img/image-9.png" />
          </div>

          <div className="title">
            <p className="text-wrapper-6">
              Chat with Jovida anytime by Message
            </p>

            <p className="text-wrapper-7">
              Simply send a text to stay connected. Share your updates, ask
              questions, or get gentle motivation，Jovida is always ready to
              listen and respond, wherever you are.
            </p>
          </div>
        </div>

        <div className="back">
          <Link className="back-button" to="/homepageh5">
            <div className="ic-back">
              <img
                className="vector-3"
                alt="Vector"
                src="/img/vector-6650.svg"
              />

              <img
                className="vector-4"
                alt="Vector"
                src="/img/vector-6653.svg"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
