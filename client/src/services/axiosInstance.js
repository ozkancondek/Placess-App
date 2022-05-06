import axios from "axios";

const base_url = process.env.REACT_APP_BASE_URL;
export const API = axios.create({
  baseURL: base_url,
});
