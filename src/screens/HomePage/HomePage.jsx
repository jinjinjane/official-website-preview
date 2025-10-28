import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import { AppleIcon8 } from "../../icons/AppleIcon8";
import { AppleIcon13 } from "../../icons/AppleIcon13";
import "./style.css";

const SUPPORT_EMAIL = "support@fluxvita.com";
const WHATSAPP_PHONE_NUMBER = "85244547208";
const WHATSAPP_PRESET_MESSAGE = encodeURIComponent("Hi, Jovida!");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${WHATSAPP_PRESET_MESSAGE}`;

export const HomePage = () => {
  const screenWidth = useWindowWidth();
  const [toastMessage, setToastMessage] = React.useState("");
  const toastTimeoutRef = React.useRef(null);

  const showToast = React.useCallback((message) => {
    setToastMessage(message);

    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage("");
      toastTimeoutRef.current = null;
    }, 2000);
  }, []);

  const showCopiedToast = React.useCallback(() => {
    showToast("Email copied!");
  }, [showToast]);

  React.useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const copyEmailToClipboard = React.useCallback(() => {
    const fallbackCopy = () => {
      if (typeof document === "undefined") {
        return false;
      }

      const textarea = document.createElement("textarea");
      textarea.value = SUPPORT_EMAIL;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      let isSuccess = false;

      try {
        isSuccess = document.execCommand("copy");
      } catch (error) {
        // Swallow clipboard errors; no alternative action required.
      } finally {
        document.body.removeChild(textarea);
      }

      return isSuccess;
    };

    if (
      typeof navigator !== "undefined" &&
      navigator.clipboard &&
      navigator.clipboard.writeText
    ) {
      navigator.clipboard
        .writeText(SUPPORT_EMAIL)
        .then(showCopiedToast)
        .catch(() => {
          if (fallbackCopy()) {
            showCopiedToast();
          }
        });
      return;
    }

    if (fallbackCopy()) {
      showCopiedToast();
    }
  }, [showCopiedToast]);

  const handleCopyEmailKeyDown = React.useCallback(
    (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        copyEmailToClipboard();
      }
    },
    [copyEmailToClipboard],
  );

  const handleDownloadAppClick = React.useCallback(() => {
    showToast("Coming soon!");
  }, [showToast]);

  const handleDownloadAppKeyDown = React.useCallback(
    (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleDownloadAppClick();
      }
    },
    [handleDownloadAppClick],
  );

  return (
    <div
      className="home-page"
      style={{
        minWidth:
          screenWidth < 750
            ? "375px"
            : screenWidth >= 750
              ? "1440px"
              : undefined,
      }}
    >
      {toastMessage && (
        <div className="email-toast" role="status" aria-live="polite">
          {toastMessage}
        </div>
      )}
      <div
        className="hero-section"
        style={{
          backgroundImage:
            screenWidth < 750
              ? "url(/img/herosection-2.png)"
              : screenWidth >= 750
                ? "url(/img/herosection-3.png)"
                : undefined,
          height:
            screenWidth < 750
              ? "511px"
              : screenWidth >= 750
                ? "810px"
                : undefined,
          marginTop:
            screenWidth < 750
              ? "calc(env(safe-area-inset-top, 0px) * -1)"
              : undefined,
          paddingBottom: 0,
          paddingLeft:
            screenWidth < 750
              ? "21px"
              : screenWidth >= 750
                ? "428px"
                : undefined,
          paddingRight:
            screenWidth < 750
              ? "21px"
              : screenWidth >= 750
                ? "428px"
                : undefined,
          paddingTop:
            screenWidth < 750
              ? "env(safe-area-inset-top, 0px)"
              : undefined,
        }}
      >
        <div
          className="frame-4"
          style={{
            height:
              screenWidth < 750
                ? "445px"
                : screenWidth >= 750
                  ? "714px"
                  : undefined,
            width:
              screenWidth < 750
                ? "332px"
                : screenWidth >= 750
                  ? "584px"
                  : undefined,
          }}
        >
          {screenWidth < 750 && (
            <>
              <div className="group-2">
                <div className="text-wrapper-8">Most AI powers work</div>

                <div className="text-wrapper-9">We power health</div>
              </div>

              <img
                className="generated-image"
                alt="Generated image"
                src="/img/generated-image-september-02-2025-3-54pm-09-02-2025-1-2.png"
              />

              <div className="frame-5">
                <div
                  className="frame-6 download-app-trigger"
                  onClick={handleDownloadAppClick}
                  onKeyDown={handleDownloadAppKeyDown}
                  role="button"
                  tabIndex={0}
                >
                  <AppleIcon8 className="apple-icon" />
                  <div className="apple-button-text-2">Download App</div>
                </div>

                <a
                  className="frame-6"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Start with WhatsApp"
                >
                  <img
                    className="apple-icon-2"
                    alt="Apple icon"
                    src="/img/apple-icon-9.svg"
                  />

                  <div className="apple-button-text-3">Quick Start</div>
                </a>
              </div>

              <img
                className="logo-container"
                alt="Logo container"
                src="/img/logo-container-4.svg"
              />
            </>
          )}

          {screenWidth >= 750 && (
            <div className="group-3">
              <div className="frame-7">
                <div className="text-wrapper-10">Most AI powers work</div>

                <div className="text-wrapper-11">We power health</div>
              </div>

              <div className="frame-wrapper">
                <div className="frame-8">
                  <div className="group-4">
                    <img
                      className="vector-5"
                      alt="Vector"
                      src="/img/vector-6853-1.svg"
                    />

                    <img
                      className="vector-6"
                      alt="Vector"
                      src="/img/vector-6854-1.svg"
                    />
                  </div>

                  <div
                    className="frame-9 download-app-trigger"
                    onClick={handleDownloadAppClick}
                    onKeyDown={handleDownloadAppKeyDown}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="frame-10">
                      <AppleIcon13 className="apple-icon-13" />
                      <div className="apple-button-text-4">Download App</div>
                    </div>
                  </div>

                  <a
                    className="frame-11"
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Start with WhatsApp"
                  >
                    <div className="frame-10">
                      <img
                        className="apple-icon-3"
                        alt="Apple icon"
                        src="/img/apple-icon-14.svg"
                      />

                      <div className="apple-button-text-4">Quick Start</div>
                    </div>
                  </a>
                </div>
              </div>

              <img
                className="logo-container-2"
                alt="Logo container"
                src="/img/logo-container-6.svg"
              />
            </div>
          )}
        </div>
      </div>

      <div
        className="features-section"
        style={{
          alignSelf: screenWidth < 750 ? "stretch" : undefined,
          height:
            screenWidth < 750
              ? "2834px"
              : screenWidth >= 750
                ? "3221px"
                : undefined,
          width:
            screenWidth < 750
              ? "100%"
              : screenWidth >= 750
                ? "1440px"
                : undefined,
        }}
      >
        <div
          className="frame-12"
          style={{
            gap:
              screenWidth < 750
                ? "44px"
                : screenWidth >= 750
                  ? "80px"
                  : undefined,
            width:
              screenWidth < 750
                ? "327px"
                : screenWidth >= 750
                  ? "1200px"
                  : undefined,
          }}
        >
          <div
            className="companion-container"
            style={{
              alignItems: screenWidth < 750 ? "flex-start" : undefined,
              alignSelf: screenWidth < 750 ? "stretch" : undefined,
              display: screenWidth < 750 ? "flex" : undefined,
              flex: screenWidth < 750 ? "0 0 auto" : undefined,
              flexDirection: screenWidth < 750 ? "column" : undefined,
              gap: screenWidth < 750 ? "24px" : undefined,
              height: screenWidth >= 750 ? "540px" : undefined,
              width:
                screenWidth < 750
                  ? "100%"
                  : screenWidth >= 750
                    ? "1200px"
                    : undefined,
            }}
          >
            {screenWidth < 750 && (
              <>
                <div className="companion-card">
                  <div className="rectangle-6" />

                  <div className="daily-challenge-card">
                    <img
                      className="card-image"
                      alt="Card image"
                      src="/img/card-image-2.png"
                    />

                    <div className="frame-13">
                      <div className="card-title">#Daily Challenge</div>

                      <p className="card-title-2">Swap to Zero sugar drink!</p>

                      <div className="card-description">
                        Sugar out, water in!
                      </div>
                    </div>

                    <div className="daily-challenge-card-2">
                      <div className="button-text-wrapper">
                        <div className="button-text">Too hard</div>
                      </div>

                      <div className="button-2">
                        <div className="button-text-2">Take Photos</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="frame-14">
                  <div className="div-2">
                    <div className="rectangle-7" />

                    <img
                      className="vector-7"
                      alt="Vector"
                      src="/img/vector-6842-2.svg"
                    />

                    <img
                      className="vector-8"
                      alt="Vector"
                      src="/img/vector-6843-2.svg"
                    />

                    <div className="ellipse" />

                    <img
                      className="vector-9"
                      alt="Vector"
                      src="/img/vector-6846-10.svg"
                    />
                  </div>

                  <div className="text-wrapper-12">Effortless wellness</div>

                  <p className="text-wrapper-13">
                    No judgment, no impossible goals. Jovida meets you where you
                    are — making healthy choices feel natural, not forced.
                  </p>
                </div>
              </>
            )}

            {screenWidth >= 750 && (
              <div className="div-3">
                <div className="companion-card-2">
                  <div className="rectangle-8" />

                  <div className="daily-challenge-card-3">
                    <img
                      className="card-image-2"
                      alt="Card image"
                      src="/img/card-image-3.png"
                    />

                    <div className="frame-15">
                      <div className="card-title-3">#Daily Challenge</div>

                      <p className="card-title-4">Swap to Zero sugar drink!</p>

                      <div className="card-description-2">
                        Sugar out, water in!
                      </div>
                    </div>

                    <div className="daily-challenge-card-4">
                      <button className="button-3">
                        <div className="button-text-3">Too hard</div>
                      </button>

                      <button className="button-4">
                        <div className="button-text-4">Take Photos</div>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="div-4">
                  <div className="div-5">
                    <div className="rectangle-9" />

                    <img
                      className="vector-10"
                      alt="Vector"
                      src="/img/vector-6842-3.svg"
                    />

                    <img
                      className="vector-11"
                      alt="Vector"
                      src="/img/vector-6843-3.svg"
                    />

                    <div className="ellipse-2" />

                    <img
                      className="vector-12"
                      alt="Vector"
                      src="/img/vector-6846-15.svg"
                    />
                  </div>

                  <div className="companion-card-title">
                    Effortless wellness
                  </div>

                  <p className="text-wrapper-14">
                    No judgment, no impossible goals. Jovida meets you where you
                    are — making healthy choices feel natural, not forced.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div
            className="micro-challenges"
            style={{
              alignItems: screenWidth < 750 ? "flex-start" : undefined,
              alignSelf: screenWidth < 750 ? "stretch" : undefined,
              display: screenWidth < 750 ? "flex" : undefined,
              flex: screenWidth < 750 ? "0 0 auto" : undefined,
              flexDirection: screenWidth < 750 ? "column" : undefined,
              gap: screenWidth < 750 ? "24px" : undefined,
              height: screenWidth >= 750 ? "540px" : undefined,
              width:
                screenWidth < 750
                  ? "100%"
                  : screenWidth >= 750
                    ? "1200px"
                    : undefined,
            }}
          >
            <div
              className="frame-16"
              style={{
                alignItems:
                  screenWidth < 750
                    ? "flex-start"
                    : screenWidth >= 750
                      ? "center"
                      : undefined,
                alignSelf: screenWidth < 750 ? "stretch" : undefined,
                flex: screenWidth < 750 ? "0 0 auto" : undefined,
                flexDirection: screenWidth < 750 ? "column" : undefined,
                gap: screenWidth < 750 ? "24px" : undefined,
                justifyContent:
                  screenWidth >= 750 ? "space-between" : undefined,
                width:
                  screenWidth < 750
                    ? "100%"
                    : screenWidth >= 750
                      ? "1200px"
                      : undefined,
              }}
            >
              <div
                className="frame-17"
                style={{
                  alignItems: screenWidth >= 750 ? "flex-start" : undefined,
                  backgroundColor:
                    screenWidth < 750
                      ? "var(--collection-1-light-cyan)"
                      : undefined,
                  borderRadius: screenWidth < 750 ? "29.07px" : undefined,
                  display: screenWidth >= 750 ? "flex" : undefined,
                  flexDirection: screenWidth >= 750 ? "column" : undefined,
                  gap: screenWidth >= 750 ? "30px" : undefined,
                  height: screenWidth < 750 ? "327px" : undefined,
                  width:
                    screenWidth < 750
                      ? "327px"
                      : screenWidth >= 750
                        ? "578px"
                        : undefined,
                }}
              >
                {screenWidth < 750 && (
                  <>
                    <div className="group-5">
                      <div className="avatar-description">
                        <p className="text-wrapper-15">
                          I know you love strawberries for a pick-me-up. A
                          handful could provide a natural energy boost. It might
                          be just what you need right now.
                        </p>
                      </div>

                      <div className="ellipse-3" />

                      <div className="ellipse-4" />

                      <img
                        className="avatar-container-2"
                        alt="Avatar container"
                        src="/img/avatar-container-3.png"
                      />
                    </div>

                    <div className="group-6">
                      <div className="ellipse-5" />

                      <div className="avatar-content">
                        <p className="avatar-description-2">
                          Ugh, I&#39;m feeling so drained this afternoon.
                        </p>
                      </div>

                      <div className="ellipse-6" />
                    </div>
                  </>
                )}

                {screenWidth >= 750 && (
                  <>
                    <div className="div-5">
                      <div className="rectangle-10" />

                      <img
                        className="vector-12"
                        alt="Vector"
                        src="/img/vector-6846-15.svg"
                      />

                      <img
                        className="vector-13"
                        alt="Vector"
                        src="/img/vector-4.svg"
                      />
                    </div>

                    <div className="text-wrapper-16">It remembers you</div>

                    <p className="text-wrapper-14">
                      Every conversation, preference, and goal you&#39;ve
                      shared. Jovida builds your personal health story over
                      time, so you never have to repeat yourself.
                    </p>
                  </>
                )}
              </div>

              <div
                className="frame-18"
                style={{
                  alignItems: screenWidth < 750 ? "flex-start" : undefined,
                  alignSelf: screenWidth < 750 ? "stretch" : undefined,
                  backgroundColor:
                    screenWidth >= 750
                      ? "var(--collection-1-light-cyan)"
                      : undefined,
                  borderRadius: screenWidth >= 750 ? "48px" : undefined,
                  display: screenWidth < 750 ? "flex" : undefined,
                  flex: screenWidth < 750 ? "0 0 auto" : undefined,
                  flexDirection: screenWidth < 750 ? "column" : undefined,
                  gap: screenWidth < 750 ? "12px" : undefined,
                  height: screenWidth >= 750 ? "540px" : undefined,
                  width:
                    screenWidth < 750
                      ? "100%"
                      : screenWidth >= 750
                        ? "540px"
                        : undefined,
                }}
              >
                {screenWidth < 750 && (
                  <>
                    <div className="div-2">
                      <div className="rectangle-11" />

                      <img
                        className="vector-9"
                        alt="Vector"
                        src="/img/vector-6846-11.svg"
                      />

                      <img
                        className="vector-13"
                        alt="Vector"
                        src="/img/vector-3.svg"
                      />
                    </div>

                    <div className="text-wrapper-12">It remembers you</div>

                    <p className="text-wrapper-17">
                      Every conversation, preference, and goal you&#39;ve
                      shared. Jovida builds your personal health story over
                      time, so you never have to repeat yourself.
                    </p>
                  </>
                )}

                {screenWidth >= 750 && (
                  <>
                    <div className="group-7">
                      <div className="ellipse-7" />

                      <div className="avatar-description-wrapper">
                        <p className="text-wrapper-18">
                          Ugh, I&#39;m feeling so drained this afternoon.
                        </p>
                      </div>

                      <div className="ellipse-8" />
                    </div>

                    <div className="group-8">
                      <div className="avatar-description-3">
                        <p className="text-wrapper-18">
                          I know you love strawberries for a pick-me-up. A
                          handful could provide a natural energy boost. It might
                          be just what you need right now.
                        </p>
                      </div>

                      <div className="ellipse-9" />

                      <div className="ellipse-10" />

                      <img
                        className="avatar-container-3"
                        alt="Avatar container"
                        src="/img/avatar-container-4.png"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div
            className="science-based"
            style={{
              alignItems: screenWidth < 750 ? "flex-start" : undefined,
              alignSelf: screenWidth < 750 ? "stretch" : undefined,
              display: screenWidth < 750 ? "flex" : undefined,
              flex: screenWidth < 750 ? "0 0 auto" : undefined,
              flexDirection: screenWidth < 750 ? "column" : undefined,
              gap: screenWidth < 750 ? "24px" : undefined,
              height: screenWidth >= 750 ? "540px" : undefined,
              width:
                screenWidth < 750
                  ? "100%"
                  : screenWidth >= 750
                    ? "1200px"
                    : undefined,
            }}
          >
            {screenWidth < 750 && (
              <>
                <div className="science-based-card">
                  <div className="group-9" />

                  <img
                    className="group-10"
                    alt="Group"
                    src="/img/group-1912059672-1.png"
                  />

                  <div className="group-11">
                    <div className="group-12">
                      <div className="avatar-description-4">
                        <p className="text-wrapper-19">
                          Remember to take your supplements before going to bed
                          at night.
                        </p>
                      </div>
                    </div>

                    <div className="rectangle-wrapper">
                      <img
                        className="rectangle-12"
                        alt="Rectangle"
                        src="/img/rectangle-346241652-3.svg"
                      />
                    </div>
                  </div>

                  <img
                    className="frame-19"
                    alt="Frame"
                    src="/img/frame-2111805608-2.svg"
                  />
                </div>

                <div className="frame-14">
                  <div className="div-2">
                    <div className="rectangle-13" />

                    <img
                      className="vector-9"
                      alt="Vector"
                      src="/img/vector-6846-11.svg"
                    />

                    <div className="ellipse-11" />

                    <img
                      className="ellipse-12"
                      alt="Ellipse"
                      src="/img/ellipse-7961-2.svg"
                    />

                    <img
                      className="vector-14"
                      alt="Vector"
                      src="/img/vector-6847-2.svg"
                    />
                  </div>

                  <div className="text-wrapper-12">Proactive care</div>

                  <p className="text-wrapper-17">
                    More than a tracker, Jovida actively checks in, supports
                    your progress, and stays by your side like a real companion.
                  </p>
                </div>
              </>
            )}

            {screenWidth >= 750 && (
              <div className="div-3">
                <div className="science-based-card-2">
                  <div className="group-13" />

                  <img
                    className="group-14"
                    alt="Group"
                    src="/img/group-1912059671-1.png"
                  />

                  <div className="group-15">
                    <div className="group-16">
                      <div className="avatar-description-5">
                        <p className="text-wrapper-20">
                          Remember to take your supplements before going to bed
                          at night.
                        </p>
                      </div>
                    </div>

                    <div className="frame-20">
                      <img
                        className="rectangle-14"
                        alt="Rectangle"
                        src="/img/rectangle-346241652-4.svg"
                      />
                    </div>
                  </div>

                  <img
                    className="frame-21"
                    alt="Frame"
                    src="/img/frame-2111805608-3.svg"
                  />
                </div>

                <div className="div-4">
                  <div className="div-5">
                    <div className="rectangle-15" />

                    <img
                      className="vector-12"
                      alt="Vector"
                      src="/img/vector-6846-15.svg"
                    />

                    <div className="ellipse-13" />

                    <img
                      className="ellipse-14"
                      alt="Ellipse"
                      src="/img/ellipse-7961-3.svg"
                    />

                    <img
                      className="vector-15"
                      alt="Vector"
                      src="/img/vector-6847-3.svg"
                    />
                  </div>

                  <div className="text-wrapper-16">Proactive care</div>

                  <p className="text-wrapper-14">
                    More than a tracker, Jovida actively checks in, supports
                    your progress, and stays by your side like a real companion.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div
            className="personalization"
            style={{
              alignItems: screenWidth < 750 ? "flex-start" : undefined,
              alignSelf: screenWidth < 750 ? "stretch" : undefined,
              display: screenWidth < 750 ? "flex" : undefined,
              flex: screenWidth < 750 ? "0 0 auto" : undefined,
              flexDirection: screenWidth < 750 ? "column" : undefined,
              gap: screenWidth < 750 ? "24px" : undefined,
              height: screenWidth >= 750 ? "540px" : undefined,
              width:
                screenWidth < 750
                  ? "100%"
                  : screenWidth >= 750
                    ? "1200px"
                    : undefined,
            }}
          >
            {screenWidth < 750 && (
              <>
                <div className="keep-your-streak">
                  <div className="health-analyze">
                    <div className="health-analyze-card" />

                    <div className="health-analyze-card-wrapper">
                      <div className="health-analyze-card-2">
                        Health&nbsp;&nbsp;Analyze
                      </div>
                    </div>

                    <img
                      className="image-4"
                      alt="Image"
                      src="/img/image-1636403815-1.png"
                    />
                  </div>
                </div>

                <div className="frame-14">
                  <div className="div-2">
                    <div className="rectangle-16" />

                    <img
                      className="vector-9"
                      alt="Vector"
                      src="/img/vector-6846-11.svg"
                    />

                    <div className="ellipse-15" />

                    <div className="ellipse-16" />

                    <div className="ellipse-17" />
                  </div>

                  <div className="text-wrapper-12">Science-backed</div>

                  <p className="text-wrapper-17">
                    Powered by expert models and verified science, Jovida gives
                    you reliable guidance you can trust.
                  </p>
                </div>
              </>
            )}

            {screenWidth >= 750 && (
              <div className="div-3">
                <div className="div-4">
                  <div className="div-5">
                    <div className="rectangle-17" />

                    <img
                      className="vector-12"
                      alt="Vector"
                      src="/img/vector-6846-15.svg"
                    />

                    <div className="ellipse-18" />

                    <div className="ellipse-19" />

                    <div className="ellipse-20" />
                  </div>

                  <div className="text-wrapper-16">Science-backed</div>

                  <p className="text-wrapper-14">
                    Powered by expert models and verified science, Jovida gives
                    you reliable guidance you can trust.
                  </p>
                </div>

                <div className="health-analyze-wrapper">
                  <div className="health-analyze-2">
                    <div className="health-analyze-card-3" />

                    <div className="health-analyze-card-4">
                      <div className="health-analyze-card-5">
                        Health&nbsp;&nbsp;Analyze
                      </div>
                    </div>

                    <img
                      className="image-5"
                      alt="Image"
                      src="/img/image-1636403814-1.png"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className="science-based-2"
            style={{
              alignItems: screenWidth < 750 ? "flex-start" : undefined,
              alignSelf: screenWidth < 750 ? "stretch" : undefined,
              display: screenWidth < 750 ? "flex" : undefined,
              flex: screenWidth < 750 ? "0 0 auto" : undefined,
              flexDirection: screenWidth < 750 ? "column" : undefined,
              gap: screenWidth < 750 ? "24px" : undefined,
              height: screenWidth >= 750 ? "540px" : undefined,
              width:
                screenWidth < 750
                  ? "100%"
                  : screenWidth >= 750
                    ? "1200px"
                    : undefined,
            }}
          >
            <div
              className="frame-22"
              style={{
                alignItems:
                  screenWidth < 750
                    ? "flex-start"
                    : screenWidth >= 750
                      ? "center"
                      : undefined,
                alignSelf: screenWidth < 750 ? "stretch" : undefined,
                flex: screenWidth < 750 ? "0 0 auto" : undefined,
                flexDirection: screenWidth < 750 ? "column" : undefined,
                gap: screenWidth < 750 ? "24px" : undefined,
                justifyContent:
                  screenWidth >= 750 ? "space-between" : undefined,
                width:
                  screenWidth < 750
                    ? "100%"
                    : screenWidth >= 750
                      ? "1200px"
                      : undefined,
              }}
            >
              <img
                className="science-based-card-3"
                style={{
                  height:
                    screenWidth < 750
                      ? "327px"
                      : screenWidth >= 750
                        ? "540px"
                        : undefined,
                  width:
                    screenWidth < 750
                      ? "327px"
                      : screenWidth >= 750
                        ? "540px"
                        : undefined,
                }}
                alt="Science based card"
                src={
                  screenWidth < 750
                    ? "/img/science-based-card-2.svg"
                    : screenWidth >= 750
                      ? "/img/science-based-card-3.svg"
                      : undefined
                }
              />

              <div
                className="frame-23"
                style={{
                  alignSelf: screenWidth < 750 ? "stretch" : undefined,
                  flex: screenWidth < 750 ? "0 0 auto" : undefined,
                  gap:
                    screenWidth < 750
                      ? "12px"
                      : screenWidth >= 750
                        ? "30px"
                        : undefined,
                  width:
                    screenWidth < 750
                      ? "100%"
                      : screenWidth >= 750
                        ? "578px"
                        : undefined,
                }}
              >
                <div
                  className="proactive-care"
                  style={{
                    height:
                      screenWidth < 750
                        ? "64px"
                        : screenWidth >= 750
                          ? "110px"
                          : undefined,
                    width:
                      screenWidth < 750
                        ? "64px"
                        : screenWidth >= 750
                          ? "110px"
                          : undefined,
                  }}
                >
                  <div
                    className="rectangle-18"
                    style={{
                      borderRadius:
                        screenWidth < 750
                          ? "43.64px"
                          : screenWidth >= 750
                            ? "75px"
                            : undefined,
                      height:
                        screenWidth < 750
                          ? "58px"
                          : screenWidth >= 750
                            ? "100px"
                            : undefined,
                      left:
                        screenWidth < 750
                          ? "3px"
                          : screenWidth >= 750
                            ? "5px"
                            : undefined,
                      top:
                        screenWidth < 750
                          ? "5px"
                          : screenWidth >= 750
                            ? "8px"
                            : undefined,
                      width:
                        screenWidth < 750
                          ? "58px"
                          : screenWidth >= 750
                            ? "100px"
                            : undefined,
                    }}
                  />

                  <img
                    className="vector-16"
                    style={{
                      height:
                        screenWidth < 750
                          ? "10px"
                          : screenWidth >= 750
                            ? "17px"
                            : undefined,
                      left:
                        screenWidth < 750
                          ? "47px"
                          : screenWidth >= 750
                            ? "82px"
                            : undefined,
                      width:
                        screenWidth < 750
                          ? "15px"
                          : screenWidth >= 750
                            ? "26px"
                            : undefined,
                    }}
                    alt="Vector"
                    src={
                      screenWidth < 750
                        ? "/img/vector-6846-11.svg"
                        : screenWidth >= 750
                          ? "/img/vector-6846-15.svg"
                          : undefined
                    }
                  />

                  <img
                    className="rectangle-19"
                    style={{
                      height:
                        screenWidth < 750
                          ? "13px"
                          : screenWidth >= 750
                            ? "23px"
                            : undefined,
                      left:
                        screenWidth < 750
                          ? "calc(50.00% - 7px)"
                          : screenWidth >= 750
                            ? "calc(50.00% - 12px)"
                            : undefined,
                      top:
                        screenWidth < 750
                          ? "19px"
                          : screenWidth >= 750
                            ? "33px"
                            : undefined,
                      width:
                        screenWidth < 750
                          ? "13px"
                          : screenWidth >= 750
                            ? "23px"
                            : undefined,
                    }}
                    alt="Rectangle"
                    src={
                      screenWidth < 750
                        ? "/img/rectangle-346241663-2.svg"
                        : screenWidth >= 750
                          ? "/img/rectangle-346241663-3.svg"
                          : undefined
                    }
                  />

                  <div
                    className="rectangle-20"
                    style={{
                      borderRadius:
                        screenWidth < 750
                          ? "4.65px"
                          : screenWidth >= 750
                            ? "8px"
                            : undefined,
                      height:
                        screenWidth < 750
                          ? "18px"
                          : screenWidth >= 750
                            ? "31px"
                            : undefined,
                      left:
                        screenWidth < 750
                          ? "calc(50.00% - 12px)"
                          : screenWidth >= 750
                            ? "calc(50.00% - 21px)"
                            : undefined,
                      top:
                        screenWidth < 750
                          ? "29px"
                          : screenWidth >= 750
                            ? "49px"
                            : undefined,
                      width:
                        screenWidth < 750
                          ? "24px"
                          : screenWidth >= 750
                            ? "42px"
                            : undefined,
                    }}
                  />

                  <div
                    className="ellipse-21"
                    style={{
                      borderRadius:
                        screenWidth < 750
                          ? "2.91px"
                          : screenWidth >= 750
                            ? "5px"
                            : undefined,
                      height:
                        screenWidth < 750
                          ? "6px"
                          : screenWidth >= 750
                            ? "10px"
                            : undefined,
                      left:
                        screenWidth < 750
                          ? "29px"
                          : screenWidth >= 750
                            ? "50px"
                            : undefined,
                      top:
                        screenWidth < 750
                          ? "33px"
                          : screenWidth >= 750
                            ? "56px"
                            : undefined,
                      width:
                        screenWidth < 750
                          ? "6px"
                          : screenWidth >= 750
                            ? "10px"
                            : undefined,
                    }}
                  />

                  <img
                    className="ellipse-22"
                    style={{
                      height:
                        screenWidth < 750
                          ? "5px"
                          : screenWidth >= 750
                            ? "8px"
                            : undefined,
                      left:
                        screenWidth < 750
                          ? "27px"
                          : screenWidth >= 750
                            ? "47px"
                            : undefined,
                      top:
                        screenWidth < 750
                          ? "38px"
                          : screenWidth >= 750
                            ? "65px"
                            : undefined,
                      width:
                        screenWidth < 750
                          ? "9px"
                          : screenWidth >= 750
                            ? "16px"
                            : undefined,
                    }}
                    alt="Ellipse"
                    src={
                      screenWidth < 750
                        ? "/img/ellipse-7966-2.svg"
                        : screenWidth >= 750
                          ? "/img/ellipse-7966-3.svg"
                          : undefined
                    }
                  />
                </div>

                <div
                  className="text-wrapper-21"
                  style={{
                    color:
                      screenWidth < 750
                        ? "#000000"
                        : screenWidth >= 750
                          ? "var(--collection-1-gary1)"
                          : undefined,
                    fontSize:
                      screenWidth < 750
                        ? "24px"
                        : screenWidth >= 750
                          ? "48px"
                          : undefined,
                    lineHeight:
                      screenWidth < 750
                        ? "normal"
                        : screenWidth >= 750
                          ? "50px"
                          : undefined,
                    whiteSpace: screenWidth >= 750 ? "nowrap" : undefined,
                  }}
                >
                  Private by design
                </div>

                <p
                  className="your-health-journey"
                  style={{
                    color:
                      screenWidth < 750
                        ? "#000000"
                        : screenWidth >= 750
                          ? "var(--collection-1-gary1)"
                          : undefined,
                    fontSize:
                      screenWidth < 750
                        ? "14px"
                        : screenWidth >= 750
                          ? "24px"
                          : undefined,
                    lineHeight:
                      screenWidth < 750
                        ? "normal"
                        : screenWidth >= 750
                          ? "28px"
                          : undefined,
                  }}
                >
                  Your health journey is nobody&#39;s business but yours.
                  End-to-end encryption ensures your data stays 100% private —
                  no sharing, no exceptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="CTA-section"
        style={{
          backgroundImage:
            screenWidth < 750
              ? "url(/img/ctasection-2.png)"
              : screenWidth >= 750
                ? "url(/img/ctasection-3.png)"
                : undefined,
          height:
            screenWidth < 750
              ? "206px"
              : screenWidth >= 750
                ? "570px"
                : undefined,
          padding:
            screenWidth < 750
              ? "40px 21px"
              : screenWidth >= 750
                ? "169px 244px"
                : undefined,
        }}
      >
        <div
          className="frame-24"
          style={{
            flex: screenWidth < 750 ? "0 0 auto" : undefined,
            gap:
              screenWidth < 750
                ? "20px"
                : screenWidth >= 750
                  ? "40px"
                  : undefined,
            height: screenWidth >= 750 ? "232px" : undefined,
            width:
              screenWidth < 750
                ? "332px"
                : screenWidth >= 750
                  ? "952px"
                  : undefined,
          }}
        >
          <p
            className="main-title"
            style={{
              alignSelf: screenWidth >= 750 ? "stretch" : undefined,
              flex: screenWidth >= 750 ? "1" : undefined,
              fontSize:
                screenWidth < 750
                  ? "24px"
                  : screenWidth >= 750
                    ? "64px"
                    : undefined,
              lineHeight:
                screenWidth < 750
                  ? "normal"
                  : screenWidth >= 750
                    ? "64px"
                    : undefined,
              width: screenWidth < 750 ? "316px" : undefined,
            }}
          >
            Start your wellness journey with Jovida
          </p>

          <div
            className="frame-25"
            style={{
              alignItems: screenWidth < 750 ? "center" : undefined,
              alignSelf: screenWidth < 750 ? "stretch" : undefined,
              display: screenWidth < 750 ? "flex" : undefined,
              flex: screenWidth < 750 ? "0 0 auto" : undefined,
              gap: screenWidth < 750 ? "12px" : undefined,
              height: screenWidth >= 750 ? "60px" : undefined,
              width:
                screenWidth < 750
                  ? "100%"
                  : screenWidth >= 750
                    ? "378px"
                    : undefined,
            }}
          >
            <div
              className="frame-26 download-app-trigger"
              onClick={handleDownloadAppClick}
              onKeyDown={handleDownloadAppKeyDown}
              role="button"
              tabIndex={0}
              style={{
                alignItems: screenWidth < 750 ? "center" : undefined,
                gap: screenWidth < 750 ? "8px" : undefined,
                height: screenWidth >= 750 ? "60px" : undefined,
                justifyContent: screenWidth < 750 ? "center" : undefined,
                left: screenWidth >= 750 ? "0" : undefined,
                padding: screenWidth < 750 ? "12px 16px" : undefined,
                position:
                  screenWidth < 750
                    ? "relative"
                    : screenWidth >= 750
                      ? "absolute"
                      : undefined,
                top: screenWidth >= 750 ? "0" : undefined,
                width:
                  screenWidth < 750
                    ? "160px"
                    : screenWidth >= 750
                      ? "182px"
                      : undefined,
              }}
            >
              {screenWidth < 750 && (
                <>
                  <AppleIcon8 className="apple-icon" />
                  <div className="apple-button-text-2">Download App</div>
                </>
              )}

              {screenWidth >= 750 && (
                <div className="frame-27">
                  <AppleIcon13 className="apple-icon-13" />
                  <div className="apple-button-text-4">Download App</div>
                </div>
              )}
            </div>

            <div
              className="frame-28"
              style={{
                gap: screenWidth < 750 ? "8px" : undefined,
                height: screenWidth >= 750 ? "60px" : undefined,
                left: screenWidth >= 750 ? "198px" : undefined,
                padding: screenWidth < 750 ? "12px 16px" : undefined,
                position:
                  screenWidth < 750
                    ? "relative"
                    : screenWidth >= 750
                      ? "absolute"
                      : undefined,
                top: screenWidth >= 750 ? "0" : undefined,
                width:
                  screenWidth < 750
                    ? "160px"
                    : screenWidth >= 750
                      ? "180px"
                      : undefined,
              }}
            >
              <a
                className="frame-29"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Start with WhatsApp"
              >
                {screenWidth < 750 ? (
                  <>
                    <img
                      className="apple-icon-2"
                      alt="Apple icon"
                      src="/img/apple-icon-9.svg"
                    />

                    <div className="apple-button-text-3">Quick Start</div>
                  </>
                ) : (
                  <>
                    <img
                      className="apple-icon-3"
                      alt="Apple icon"
                      src="/img/apple-icon-15.svg"
                    />

                    <div className="apple-button-text-4">Quick Start</div>
                  </>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="footer-section"
        style={{
          backgroundColor:
            screenWidth < 750
              ? "#000000"
              : screenWidth >= 750
                ? "var(--collection-1-gary1-duplicate)"
                : undefined,
          justifyContent:
            screenWidth < 750
              ? "flex-end"
              : screenWidth >= 750
                ? "flex-end"
                : undefined,
          height:
            screenWidth < 750
              ? "340px"
              : screenWidth >= 750
                ? "520px"
                : undefined,
          padding:
            screenWidth < 750
              ? "0px 24px"
              : screenWidth >= 750
                ? "0px 120px"
                : undefined,
        }}
      >
        <div
          className="frame-30"
          style={{
            alignItems: screenWidth >= 750 ? "flex-start" : undefined,
            display: screenWidth >= 750 ? "flex" : undefined,
            flex: screenWidth >= 750 ? "0 0 auto" : undefined,
            flexWrap: screenWidth >= 750 ? "wrap" : undefined,
            gap: screenWidth >= 750 ? "62px 683px" : undefined,
            height: screenWidth < 750 ? "302px" : undefined,
            width:
              screenWidth < 750
                ? "324px"
                : screenWidth >= 750
                  ? "1200px"
                  : undefined,
          }}
        >
          {screenWidth < 750 && (
            <>
              <img
                className="logo-container-3"
                alt="Logo container"
                src="/img/logo-container-5.svg"
              />

              <div className="footer-container">
                <p className="footer-text">
                  © 2025 FluxVita. All rights reserved.
                </p>

                {/* <p className="footer-text-2">8 THE GREEN STE R, DOVER, DE</p> */}

                <Link
                  className="footer-text-2"
                  rel="noopener noreferrer"
                  target="_blank"
                  to="/terms"
                >
                  Terms of Use
                </Link>

                
                <Link
                  className="footer-text-2"
                  rel="noopener noreferrer"
                  target="_blank"
                  to="/privacy"
                >
                  Privacy Policy
                </Link>

              </div>
              

              <div className="frame-31">
                <div className="contact-title">Contact us</div>

                <div className="group-17">
                  <a
                    className="email-address"
                    href={`mailto:${SUPPORT_EMAIL}`}
                  >
                    {SUPPORT_EMAIL}
                  </a>

                  <div
                    className="email-icon-container copy-email-trigger"
                    onClick={copyEmailToClipboard}
                    onKeyDown={handleCopyEmailKeyDown}
                    role="button"
                    tabIndex={0}
                    aria-label="Copy support email to clipboard"
                    title="Copy email address"
                  >
                    <div className="email-icon" />

                    <img
                      className="vector-17"
                      alt="Vector"
                      src="/img/vector-6837-2.svg"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {screenWidth >= 750 && (
            <>
              <div className="contact-container">
                <div className="contact-title-2">Contact us</div>

                <div className="email-container">
                  <a
                    className="email-address-2"
                    href={`mailto:${SUPPORT_EMAIL}`}
                  >
                    {SUPPORT_EMAIL}
                  </a>

                  <div
                    className="apple-icon-13 copy-email-trigger"
                    onClick={copyEmailToClipboard}
                    onKeyDown={handleCopyEmailKeyDown}
                    role="button"
                    tabIndex={0}
                    aria-label="Copy support email to clipboard"
                    title="Copy email address"
                  >
                    <div className="email-icon" />

                    <img
                      className="vector-17"
                      alt="Vector"
                      src="/img/vector-6837-3.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="footer-container-2">
                <p className="footer-text">
                  © 2025 FluxVita. All rights reserved.
                </p>

                <p className="footer-text-2">8 THE GREEN STE R, DOVER, DE</p>

                <Link
                  className="footer-text-2"
                  rel="noopener noreferrer"
                  target="_blank"
                  to="/terms"
                >
                  Terms of Use
                </Link>

                <Link
                  className="footer-text-2"
                  rel="noopener noreferrer"
                  target="_blank"
                  to="/privacy"
                >
                  Privacy Policy
                </Link>

              </div>

              <img
                className="logo-container-4"
                alt="Logo container"
                src="/img/logo-container-7.svg"
              />
            </>
          )}
        </div>
        {screenWidth < 750 && <div className="mobile-safe-area-bottom" />}
      </div>
    </div>
  );
};
