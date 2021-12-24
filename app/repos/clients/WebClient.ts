import axios from 'axios';

export const get = async (url: string, queryString?: any) => {
  const instance = axios.create();
  const data = new URLSearchParams(queryString);

  const result = await instance({
    url,
    method: 'GET',
    data: data.toString(),
  });

  return result;
};
