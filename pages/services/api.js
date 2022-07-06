import axios from "axios";

const api = axios.create({
  transformRequest: [
    (data, headers) => {
      headers.authorization = "Basic dnNjOnZzYw==";
      headers.get["Content-Type"] = "application/xml";
      return JSON.stringify(data);
    },
  ],
});

export default api;
