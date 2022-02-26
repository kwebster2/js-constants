export const REACT_APP_BE_HOST = process.env.REACT_APP_BE_HOST;
export const REACT_APP_FE_HOST = process.env.REACT_APP_FE_HOST;
const REACT_APP_BE_HOST_HTTPS = process.env.REACT_APP_BE_HOST_HTTPS;
const REACT_APP_FE_HOST_HTTPS = process.env.REACT_APP_FE_HOST_HTTPS;

// FE HOST
export const FRONTEND_HOST_URL = `http${
  REACT_APP_FE_HOST_HTTPS ? 's' : ''
}://${REACT_APP_FE_HOST}`;

// BE HOST
export const BASE_API_URL = `http${
  REACT_APP_BE_HOST_HTTPS ? 's' : ''
}://${REACT_APP_BE_HOST}/api/v1`;
export const BASE_WS_URL = `ws${
  REACT_APP_BE_HOST_HTTPS ? 's' : ''
}://${REACT_APP_BE_HOST}/ws`;
export const BASE_APP_API_URL = `${BASE_API_URL}/app`;
export const BASE_REFEREE_API_URL = `${BASE_API_URL}/referee`;
export const BASE_BLOGGER_API_URL = `${BASE_API_URL}/blogger`;
export const BASE_ADMIN_API_URL = `${BASE_API_URL}/admin`;
export const BASE_PUBLIC_API_URL = `${BASE_API_URL}/public`;

// TWITCH
export const TWITCH_CLIENT_ID = 'ykdzxfspi25mu04131e7jq3wgp6ifm';
