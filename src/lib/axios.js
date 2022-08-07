import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3000",
  headers: { "X-Requested-With": "XMLHttpRequest" },
  withCredentials: true,
});

//リクエスト インターセプター
client.interceptors.request.use((request) => {
  console.log("Starting Request: ", request);
  return request;
});

//レスポンス インターセプター
client.interceptors.response.use((response) => {
  console.log("Response: ", response);
  return response;
});

export { client };
