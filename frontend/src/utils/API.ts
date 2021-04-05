import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:7071/api/",
  responseType: "json",
});
