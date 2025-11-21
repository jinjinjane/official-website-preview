const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const googleRedirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;

const appleClientId = import.meta.env.VITE_APPLE_CLIENT_ID;
const appleRedirectUri = import.meta.env.VITE_APPLE_REDIRECT_URI;
const appleScope =
  import.meta.env.VITE_APPLE_SCOPE || "name email";
const appleState = import.meta.env.VITE_APPLE_STATE;

export const authConfig = {
  google: {
    clientId: googleClientId,
    redirectUri: googleRedirectUri,
    scope: "openid profile email",
  },
  apple: {
    clientId: appleClientId,
    redirectUri: appleRedirectUri,
    scope: appleScope,
    state: appleState,
  },
  apiBaseUrl:
    import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/, "") || "/api",
};

export const WHATSAPP_SUCCESS_URL = import.meta.env.VITE_WHATSAPP_SUCCESS_URL;

export const validateAuthConfig = () => {
  const missing = [];

  if (!googleClientId) {
    missing.push("VITE_GOOGLE_CLIENT_ID");
  }

  if (!appleClientId) {
    missing.push("VITE_APPLE_CLIENT_ID");
  }

  if (missing.length) {
    console.warn(
      `[auth] Missing required env vars: ${missing.join(
        ", "
      )}. Third-party login buttons will remain disabled.`
    );
  }
};
