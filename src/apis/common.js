const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const DEFAULT_APPID = 1012;

export const PLATFORM = {
    WHATSAPP: 'whatsapp',
}

export const fetchWrap = async (url, options) => {
    options.credentials = 'include';
    const response = await fetch(`${API_BASE_URL}${url}`, options);
    const data = await response.json();
    if (response.status !== 200) {
        throw data;
    }
    return data;
};