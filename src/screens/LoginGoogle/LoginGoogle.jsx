import React, {
  useCallback,
  useEffect,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import { oauthForWhatsapp } from "../../apis/passprot";
import { reportUserProfileForWhatsapp, buildProfilesFromBrowser } from "../../apis/profile";
import "./style.css";
import { authConfig, WHATSAPP_SUCCESS_URL } from "../../config/auth";


export const LoginGoogle = () => {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [isAuthFinished, setIsAuthFinished] = useState(false);

  // 从 URL 参数中获取 Google OAuth 回调数据
  const googleCode = searchParams.get('code');
  const googleState = searchParams.get('state'); // state 就是 nonce
  const googleError = searchParams.get('error'); // Google 可能返回错误

  const handleStartClick = useCallback(() => {
    window.open(WHATSAPP_SUCCESS_URL, '_blank');
  }, []);

  // 处理 Google OAuth 错误
  useEffect(() => {
    if (googleError) {
      const errorDescription = searchParams.get('error_description') || googleError;
      setError(errorDescription);
    }
  }, [googleError, searchParams]);

  // 处理 Google OAuth 重定向回调
  useEffect(() => {
    if (googleCode && googleState && !googleError && !isAuthFinished) {
      setError(null);

      oauthForWhatsapp({
        state: googleState, // nonce
        google_auth_code: googleCode,
        redirect_url: authConfig.google.redirectUri,
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
  }, [googleCode, googleState, googleError, isAuthFinished, handleStartClick]);


  if (error) {
    return (
      <div className="login-error">
        <div className="error-message">
          {error}
        </div>
      </div >
    );
  }
  return (
    <div className="login-success">
      {/* Loading 蒙层 - 当正在处理认证时显示 */}
      {!isAuthFinished && (googleCode && googleState) && (
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

        <button className="google-button-text-wrapper" onClick={handleStartClick}>
          <div className="google-button-text-5">Start</div>
        </button>
      </div>
    </div>
  );
};
