import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Apple } from "../../components/Apple";
import { authConfig, validateAuthConfig } from "../../config/auth";
import { PLATFORM } from "../../apis/common";
import { registerDeviceForWhatsapp, oauthStateForWhatsapp, logout } from "../../apis/passprot";
import { ERROR_CODE } from "../../apis/errorCode";
import "./style.css";

const isNeedRegisterDevice = location.search.includes('whatsapp_token');

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadGoogle(nonce) {
  if (!authConfig.google.clientId) {
    return;
  }

  while (!window.google?.accounts?.oauth2) {
    await sleep(1000);
  }

  return window.google.accounts.oauth2.initCodeClient({
    client_id: authConfig.google.clientId,
    scope: authConfig.google.scope,
    ux_mode: "redirect",
    redirect_uri: authConfig.google.redirectUri,
    state: nonce,
  });
}

async function loadApple(nonce) {
  if (!authConfig.apple.clientId) {
    return;
  }

  while (!window.AppleID?.auth?.init) {
    await sleep(1000);
  }

  return window.AppleID.auth.init({
    clientId: authConfig.apple.clientId,
    redirectURI: authConfig.apple.redirectUri,
    scope: authConfig.apple.scope,
    state: nonce,
    nonce: nonce,
    usePopup: false,
  });
}

async function loadMain(whatsappToken) {
  await logout(PLATFORM.WHATSAPP, 'whatsapp_token')
  await registerDeviceForWhatsapp({ whatsapp_token: whatsappToken })
  const response = await oauthStateForWhatsapp()
  const nonce = response.nonce
  const googleInstance = await loadGoogle(nonce)
  const appleInstance = await loadApple(nonce)
  return { googleInstance, appleInstance }
}

export const Login = () => {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [loadingProvider, setLoadingProvider] = useState(null);
  const [googleReady, setGoogleReady] = useState(false);
  const [appleReady, setAppleReady] = useState(false);
  const [isWhatsappRegisterLinkInvalid, setIsWhatsappRegisterLinkInvalid] = useState(false);

  const googleClientRef = useRef(null);

  useEffect(() => {
    validateAuthConfig();
  }, []);

  useEffect(() => {
    if (isNeedRegisterDevice) {
      const whatsappToken = searchParams.get('whatsapp_token');
      if (whatsappToken) {
        loadMain(whatsappToken).then(({ googleInstance }) => {
          googleClientRef.current = googleInstance;
          setGoogleReady(true);
          setAppleReady(true);
        }).catch((e) => {
          if (e.reason === ERROR_CODE.REASON_WHATSAPP_REGISTER_LINK_INVALID) {
            setIsWhatsappRegisterLinkInvalid(true);
          }
          console.error('register device failed', e);
        });
      }
    }
  }, []);


  const handleGoogleClick = useCallback(() => {
    if (!googleClientRef.current || loadingProvider || !googleReady) {
      return;
    }

    // 设置 loading 状态
    setLoadingProvider("google");
    setError(null);

    // 触发 OAuth authorization code 流程
    googleClientRef.current.requestCode();
  }, [googleReady, loadingProvider]);

  const handleAppleClick = useCallback(async () => {
    if (!appleReady || loadingProvider || !window.AppleID?.auth?.signIn) {
      return;
    }
    setLoadingProvider("apple");
    try {
      await window.AppleID.auth.signIn();
    } catch (err) {
      if (err?.error === "popup_closed_by_user") {
        return;
      }

      setError(
        err?.message ||
        "Apple authentication failed. Please try again or use another method."
      );
    }
  }, [appleReady, loadingProvider]);

  const isGoogleDisabled =
    !authConfig.google.clientId || !googleReady || Boolean(loadingProvider);
  const isAppleDisabled =
    !authConfig.apple.clientId || !appleReady || Boolean(loadingProvider);

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

          {isWhatsappRegisterLinkInvalid && (
            <p className="auth-error">  
              The WhatsApp link is invalid. Please talk with whatsapp support and get a new link.
            </p>
          )}


            <button
              type="button"
              className="google-button-wrapper"
              onClick={handleGoogleClick}
              disabled={isGoogleDisabled}
              aria-busy={loadingProvider === "google"}
            >
              <div className="div-6">
                <div className="google-button-text-wrap">
                  <div className="google-button-img">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="LgbsSe-Bz112c">
                      <g>
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                        <path fill="none" d="M0 0h48v48H0z"></path>
                      </g>
                    </svg>
                  </div>
                  <span className="google-button-text">
                    {loadingProvider === "google"
                      ? "Signing in..."
                      : "Continue with Google"}
                  </span>
                </div>
              </div>
            </button>

            <button
              type="button"
              className="apple-button-wrapper"
              onClick={handleAppleClick}
              disabled={isAppleDisabled}
              aria-busy={loadingProvider === "apple"}
            >
              <div className="div-6">
                <Apple />
                <div className="apple-button-text-6">
                  {loadingProvider === "apple"
                    ? "Signing in..."
                    : "Continue with Apple"}
                </div>
              </div>
            </button>

            {error ? <p className="auth-error">{error}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};
