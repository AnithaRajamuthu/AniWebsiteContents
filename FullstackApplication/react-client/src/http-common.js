import axios from "axios";

export default axios.create({
  baseURL: "http://34.201.82.161:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
