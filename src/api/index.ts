import axios from 'axios';
import { DEVEL_URL } from '@/src/const/apiUrl';

// const baseURL = 'https://api.punkapi.com/v2';

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
export const axiosPublic = createAxios('https://alpha-api.maxst.com/platform-service', '/v1');

