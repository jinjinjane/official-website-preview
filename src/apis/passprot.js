import { DEFAULT_APPID, PLATFORM, fetchWrap } from "./common";

const API = {
    REGISTER_DEVICE: {
        method: 'POST',
        url: '/uc/v1/passport/register_device'
    },
    OAUTH: {
        method: 'POST',
        url: '/uc/v1/passport/oauth'
    },
    OAUTH_STATE: {
        method: 'POST',
        url: '/uc/v1/passport/oauth_state'
    },
    LOGOUT: {
        method: 'POST',
        url: '/uc/v1/passport/web_logout'
    }
};


const registerDevice = async (data, platform, deviceId) => {
    const response = await fetchWrap(API.REGISTER_DEVICE.url, {
        method: API.REGISTER_DEVICE.method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Vita-Aid': DEFAULT_APPID,
            'Vita-Platform': platform,
            'Vita-Did': deviceId,
        }
    });
    return response.data;
};

// 当用户使用 Whatsapp 登录链接时，它的 DeviceID 是绑定到 whatsapp_token 之中的，所以 deviceID 先写死一个即可
export const registerDeviceForWhatsapp = async (whatsapp_token) => {
    return registerDevice(whatsapp_token, PLATFORM.WHATSAPP,
        'whatsapp_token',
    );
};

const oauth = async (data, platform, deviceId) => {
    return fetchWrap(API.OAUTH.url, {
        method: API.OAUTH.method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Vita-Aid': DEFAULT_APPID,
            'Vita-Platform': platform,
            'Vita-Did': deviceId,
        }
    });
};

export const oauthForWhatsapp = async (data) => {
    return oauth(data, PLATFORM.WHATSAPP,
        'whatsapp_token',
    );
};

const oauthState = async (data, platform, deviceId) => {
    return fetchWrap(API.OAUTH_STATE.url, {
        method: API.OAUTH_STATE.method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Vita-Aid': DEFAULT_APPID,
            'Vita-Platform': platform,
            'Vita-Did': deviceId,
        }
    });
};

export const oauthStateForWhatsapp = async () => {
    return oauthState({}, PLATFORM.WHATSAPP,
        'whatsapp_token',
    );
};

export const logout = async (platform, deviceId) => {
    return fetchWrap(API.LOGOUT.url, {
        method: API.LOGOUT.method,
        headers: {
            'Content-Type': 'application/json',
            'Vita-Aid': DEFAULT_APPID,
            'Vita-Platform': platform,
            'Vita-Did': deviceId,
        }
    });
};