import React, {
  useCallback,
  useEffect,
  useState,
} from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { oauthForWhatsapp } from "../../apis/passprot";
import { reportUserProfileForWhatsapp, buildProfilesFromBrowser } from "../../apis/profile";
import "./style.css";
import { WHATSAPP_SUCCESS_URL } from "../../config/auth";


export const LoginApple = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [isAuthFinished, setIsAuthFinished] = useState(false);

  // 从 URL 参数中获取 Google OAuth 回调数据
  const appleCode = searchParams.get('code');
  const appleState = searchParams.get('state'); // Google 可能返回错误

  // 处理 Google OAuth 错误
  useEffect(() => {
    if (!appleState || !appleCode) {
      setError('Apple authentication failed');
    }
  }, [appleState, appleCode]);

  // 处理 Google OAuth 重定向回调
  useEffect(() => {
    if (appleCode && appleState && !isAuthFinished) {
      setError(null);

      oauthForWhatsapp({
        state: appleState, // nonce
        apple_auth_code: appleCode,
      })
        .then(async (response) => {
          console.log('oauth success', response);
          try {
            await reportUserProfileForWhatsapp(buildProfilesFromBrowser());

            handleStartClick();
          } catch (profileErr) {
            console.error("report user profile failed:", profileErr);
          }
          setIsAuthFinished(true);
        })
        .catch((err) => {
          setError(err.message || "Google authentication failed");
          console.error("Google OAuth error:", err);
          setIsAuthFinished(true); // 即使失败也隐藏 loading
        });
    }
  }, [appleCode, appleState, isAuthFinished]);


  if (error) {
    return (
      <div className="login-error">
        <div className="error-message">
          {error}
        </div>
      </div >
    );
  }

  const handleStartClick = useCallback(() => {
    window.open(WHATSAPP_SUCCESS_URL, '_blank');
  }, []);
  
  return (
    <div className="login-success">
      {/* Loading 蒙层 - 当正在处理认证时显示 */}
      {!isAuthFinished && (appleCode && appleState) && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <div className="loading-text">Processing authentication...</div>
        </div>
      )}
      
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
            <span className="span">You're all set! Tap </span>

            <span className="text-wrapper-27">Start</span>

            <span className="span"> to continue on WhatsApp.</span>
          </p>
        </div>

        <button className="apple-button-text-wrapper" onClick={handleStartClick}>
          <div className="apple-button-text-5">Start</div>
        </button>
      </div>
    </div>
  );
};
