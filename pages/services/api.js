import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  //NEXT_PUBLIC_ evite de faire leaker des infos et est indispensable sinon le code ne fonctionne pas
  transformRequest: [
    (data, headers) => {
      headers.post["Content-Type"] = "application/json";
      headers.patch["Content-Type"] = "application/json";
      headers.put["Content-Type"] = "application/json";
      headers.delete["Content-Type"] = "application/json";
      return JSON.stringify(data);
    },
  ],
});

export default api;
