import {getUserAccessToken} from './../store/auth/actions';
import axios from 'axios';
import accessToken from './jwt-token-access/accessToken';
import basicToken from './jwt-token-access/basicToken';
//pass new generated access token here
const token = accessToken;

/* //apply base url for axios
const API_URL = ""

const axiosApi = axios.create({
  baseURL: API_URL,
}) */

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
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic XzFvVjN1SlZVMHJ6TEVzMTVQdEdLT2RtcmxJYTpqQjIzbXVVN2FJa1JhN0tPRkNNMEh1VXA1U1Fh',
  },
});
export const fetchAuth = ({username, password}: FetchAuthType): any => {
  const newData = new URLSearchParams({
    username,
    password,
    grant_type: 'password',
  });

  return instance
    .post<AccessTokenApiType>(`/token`, newData)
    .then((response) => response.data);
};

/* export async function login({ username, password }) {
  const resp = await fetch(`https://api.sumra.net/auth/v1/meet/authenticate`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = await resp.json()

  return data
}
 */
// fetch with base64 custom key and custom secret key

/* export const fetchAuth = ({ username, password }) => {
  const newData = new URLSearchParams({
    username,
    password,
    grant_type: "password",
  })

  return instance.post(`/token`, newData).then(response => response)
} */

/* export async function login({ username, password }) {
  var auth =
    "Basic " +
    Buffer.from(
      "_1oV3uJVU0rzLEs15PtGKOdmrlIa:jB23muU7aIkRa7KOFCM0HuUp5SQa"
    ).toString("base64")
  const resp = await fetch(`https://api.sumra.net/token`, {
    method: "POST",
    body: String(
      new URLSearchParams({
        username,
        password,
        grant_type: "password",
      })
    ),
    headers: {
      Authorization: auth,

      "Content-Type": "application/x-www-form-urlencoded",
    },
  })

  const data = await resp.json()

  return data
}
 */
/* axiosApi.defaults.headers.common["Authorization"] = token

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
} */
