import axios from 'axios';

const createAxios = (
  originUrl: any,
  url: any,
  contentType = 'application/json; charset=utf-8'
) => {
  return axios.create({
    baseURL: `${originUrl}${url}`,
    headers: {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': contentType,
      'X-Frame-Options': 'sameorigin',
    },
  });
};

// export const axiosPublic = createAxios(DEVEL_URL, '/v1/public');
export const axiosPublic = createAxios(
  'https://api.maxst.com',
  '/platform-service/v1'
);
