import axios from 'axios';

type AccessTokenApiType = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
};
type FetchAuthType = {
  username: string;
  password: string;
};

const instance = axios.create({
  baseURL: `https://api.sumra.net`,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Basic XzFvVjN1SlZVMHJ6TEVzMTVQdEdLT2RtcmxJYTpqQjIzbXVVN2FJa1JhN0tPRkNNMEh1VXA1U1Fh',
  },
});
export const fetchAuth = async ({username, password}: FetchAuthType) => {
  // const newData = new URLSearchParams({
  //   username,
  //   password,
  //   grant_type: "password",
  // })

  const data = await instance
    .post<AccessTokenApiType>(`/auth/v1/meet/authenticate`, {
      username,
      password,
    })
    .then((response) => response.data);

  return data;
};
