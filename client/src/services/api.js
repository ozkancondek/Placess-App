import axios from "axios";
import { API } from "./axiosInstance";

const base_url = process.env.REACT_APP_BASE_URL;
console.log(base_url);

export const fetchData = async (pageNum) => {
  if (pageNum) {
    let res = await API("/api/cities/" + `?page=${pageNum}`);
    return res.data;
  } else {
    let res = await API("/api/cities/");
    return res.data;
  }
};

export const fetchSingleData = async (id) => {
  let res = await API(`/api/cities/details/${id}`);
  return res;
};

export const register = async (data) => {
  let res = await API.post("/api/auth/register", data);
  return res.data;
};

export const login = async (data) => {
  let res = await API.post("/api/auth/login", data);
  return res;
};
export const newPlace = async (data) => {
  let res = await API.post("/api/city/newplace", data);
  return res;
};
export const sendComment = async (data) => {
  let res = await API.post("/api/city/addcomment", data);
  return res;
};
export const getComments = async () => {
  let res = await API(`/api/city/comments/`);
  return res;
};
export const addNewRate = async (data) => {
  let res = await API.post("/api/city/rate", data);
  return res;
};
export const getRates = async () => {
  let res = await API(`/api/city/rates`);
  return res;
};

export const initialServices = {
  fetchData,
  register,
  login,
  fetchSingleData,
  newPlace,
  sendComment,
  getComments,
  getRates,
  addNewRate,
};
