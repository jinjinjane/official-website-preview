import { DEFAULT_APPID, PLATFORM, fetchWrap } from "./common";

const API = {
  REPORT_USER_PROFILE: {
    method: "POST",
    url: "/ha/v1/app/agent/report_user_profile",
  },
};

export const reportUserProfileForWhatsapp = async (profiles) => {
  return fetchWrap(API.REPORT_USER_PROFILE.url, {
    method: API.REPORT_USER_PROFILE.method,
    body: JSON.stringify({ profiles }),
    headers: {
      "Content-Type": "application/json",
      "Vita-Aid": DEFAULT_APPID,
      "Vita-Platform": PLATFORM.WHATSAPP,
      "Vita-Did": "whatsapp_token",
    },
  });
};

export const buildProfilesFromBrowser = () => {
  const now = new Date().toISOString();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  const offsetSeconds = -new Date().getTimezoneOffset() * 60;

  return [
    {
      domain: "physical",
      key: "timezone",
      valueType: 1, // PROFILE_VALUE_TYPE_TEXT
      textValue: { value: timezone },
      createdAt: now,
      updatedAt: now,
    },
    {
      domain: "physical",
      key: "UTC offset",
      valueType: 2, // PROFILE_VALUE_TYPE_NUMERIC
      numericValue: {
        value: offsetSeconds,
        unit: "sec",
      },
      createdAt: now,
      updatedAt: now,
    },
  ];
};
