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
      // 테스트 잠시
      Authorization:
        'Bearer eyJraWQiOiI4YTk4ODRmZTI2MTA1YWU1NjBhNzNmMzA1YTYzYzE5MiIsImFsZyI6IlJTMjU2In0.eyJhcHAiOiJtYXh2ZXJzZS1wdWJsaWMiLCJzdWIiOiJjYjk2ZDkzYi0xMjU4LTQyM2YtODlkMi0wYjkwYWMwY2RhM2MiLCJhdWQiOiJjYjk2ZDkzYi0xMjU4LTQyM2YtODlkMi0wYjkwYWMwY2RhM2MiLCJhenAiOiJjYjk2ZDkzYi0xMjU4LTQyM2YtODlkMi0wYjkwYWMwY2RhM2MiLCJhdXRoX3RpbWUiOjE3MDE4MjczMjksImlzcyI6Imh0dHBzOi8vYWxwaGEtYXBpLm1heHN0LmNvbS9wYXNzcG9ydCIsInR5cCI6IkJlYXJlciIsImV4cCI6MTcwMTgzMDkyOSwiaWF0IjoxNzAxODI3MzI5LCJqdGkiOiI1ZDBjNmRhMC1lZGM2LTQ1ZmItOThhYS0zNjI0YTAxYmY4YTAifQ.Fqaz-s2X3E094h1Y2XNp1QKAPSr3lR4BQe7EsA8rmzMI4CwZ3e2co3JiLbl4v0cwqMQafnQnoujdFFACY21WiYISHnJ87p8U9isUErURUXdo5y3IcD9gfUSupWE9OAdEaboyE4yqNQ1ObxXv689oDuIKTRliNwU3l-wzQRh8flLA7n_XhwjFQ9GqJFVNCBf86kzS4cFAfOHDjn45MxgUUmo4wXr1SULZyGRrN8rIEp1_kzEShJdWXqomzwfVpwfJf7XPgBumCTrsflBnNzqQIcSC8_9OeVzURWX4VlWKq8W0-7n1xXhuEagZw1Dha0kNgPwl2VZy4DLT-I2ckVKn6Q',
    },
  });
};

// export const axiosPublic = createAxios(DEVEL_URL, '/v1/public');
export const axiosPublic = createAxios(
  'https://alpha-api.maxst.com',
  '/platform-service/v1'
);
