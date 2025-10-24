import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Apple } from "../../components/Apple";
import { authConfig, validateAuthConfig } from "../../config/auth";
import { loadScript } from "../../utils/loadScript";
import "./style.css";

const GOOGLE_SCRIPT_SRC = "https://accounts.google.com/gsi/client";
const APPLE_SCRIPT_SRC =
  "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";

export const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loadingProvider, setLoadingProvider] = useState(null);
  const [googleReady, setGoogleReady] = useState(false);
  const [appleReady, setAppleReady] = useState(false);
  const googleClientRef = useRef(null);

  const appleState = useMemo(() => {
    if (authConfig.apple.state) {
      return authConfig.apple.state;
    }

    if (typeof window !== "undefined" && window.crypto?.randomUUID) {
      return window.crypto.randomUUID();
    }

    return Math.random().toString(36).slice(2);
  }, []);

  useEffect(() => {
    validateAuthConfig();
  }, []);

  const sendAuthPayload = useCallback(
    async (provider, payload) => {
      setLoadingProvider(provider);
      setError(null);

      try {
        const response = await fetch(
          `${authConfig.apiBaseUrl}/auth/${provider}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        if (!response.ok) {
          const message = await response.text();
          throw new Error(
            message || `Unable to complete ${provider} authentication`
          );
        }

        const data = await response.json().catch(() => ({}));

        if (data?.token) {
          window.localStorage?.setItem("jovida.authToken", data.token);
        }

        navigate("/loginsuccess", {
          replace: true,
          state: { provider, profile: data?.profile },
        });
      } catch (err) {
        setError(err.message || `Authentication failed: ${provider}`);
        throw err;
      } finally {
        setLoadingProvider(null);
      }
    },
    [navigate]
  );

  useEffect(() => {
    let cancelled = false;

    if (typeof window === "undefined" || !authConfig.google.clientId) {
      return undefined;
    }

    loadScript(GOOGLE_SCRIPT_SRC, { id: "google-identity-script" })
      .then(() => {
        if (
          cancelled ||
          !window.google?.accounts?.oauth2 ||
          !authConfig.google.clientId
        ) {
          return;
        }

        googleClientRef.current =
          window.google.accounts.oauth2.initCodeClient({
            client_id: authConfig.google.clientId,
            scope: authConfig.google.scope,
            ux_mode: "popup",
            redirect_uri: authConfig.google.redirectUri,
            callback: async (response) => {
              if (response.error) {
                setError(response.error_description || response.error);
                return;
              }

              if (!response.code) {
                setError("Google did not return an authorization code");
                return;
              }

              try {
                await sendAuthPayload("google", {
                  code: response.code,
                  clientId: authConfig.google.clientId,
                  serverClientId: authConfig.google.serverClientId,
                  redirectUri: authConfig.google.redirectUri,
                });
              } catch {
                // Error state handled inside sendAuthPayload
              }
            },
          });

        setGoogleReady(true);
      })
      .catch((err) => {
        setError(err.message || "Unable to load Google login");
      });

    return () => {
      cancelled = true;
    };
  }, [sendAuthPayload]);

  useEffect(() => {
    let cancelled = false;

    if (typeof window === "undefined" || !authConfig.apple.clientId) {
      return undefined;
    }

    loadScript(APPLE_SCRIPT_SRC, {
      id: "apple-login-script",
      attributes: { crossorigin: "anonymous" },
    })
      .then(() => {
        if (cancelled || !window.AppleID?.auth?.init) {
          return;
        }

        window.AppleID.auth.init({
          clientId: authConfig.apple.clientId,
          redirectURI: authConfig.apple.redirectUri,
          scope: authConfig.apple.scope,
          state: appleState,
          nonce: authConfig.apple.nonce,
          usePopup: true,
        });

        setAppleReady(true);
      })
      .catch((err) => {
        setError(err.message || "Unable to load Apple login");
      });

    return () => {
      cancelled = true;
    };
  }, [appleState]);

  const handleGoogleClick = useCallback(() => {
    if (!googleClientRef.current || loadingProvider || !googleReady) {
      return;
    }

    googleClientRef.current.requestCode();
  }, [googleReady, loadingProvider]);

  const handleAppleClick = useCallback(async () => {
    if (!appleReady || loadingProvider || !window.AppleID?.auth?.signIn) {
      return;
    }

    try {
      const response = await window.AppleID.auth.signIn();

      const {
        authorization: { code, id_token: idToken, state },
        user,
      } = response;

      if (!code && !idToken) {
        setError("Apple login did not return authorization data");
        return;
      }

      try {
        await sendAuthPayload("apple", {
          code,
          idToken,
          state: state || appleState,
          user,
          clientId: authConfig.apple.clientId,
          redirectUri: authConfig.apple.redirectUri,
        });
      } catch {
        // sendAuthPayload already surfaced the error message
      }
    } catch (err) {
      if (err?.error === "popup_closed_by_user") {
        return;
      }

      setError(
        err?.message ||
          "Apple authentication failed. Please try again or use another method."
      );
    }
  }, [
    appleReady,
    appleState,
    loadingProvider,
    sendAuthPayload,
  ]);

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
            <button
              type="button"
              className="google-button-wrapper"
              onClick={handleGoogleClick}
              disabled={isGoogleDisabled}
              aria-busy={loadingProvider === "google"}
            >
              <div className="div-6">
                <img
                  className="social-media-icons"
                  alt="Social media icons"
                  src="/img/social-media-icons-1.svg"
                />

                <div className="google-button-text">
                  {loadingProvider === "google"
                    ? "Signing in..."
                    : "Continue with Google"}
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
