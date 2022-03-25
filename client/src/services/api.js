import axios from "axios";

export const fetchData = async (pageNum) => {
  if (pageNum) {
    let res = await axios(
      "http://localhost:5000/api/cities/" + `?page=${pageNum}`
    );
    return res.data;
  } else {
    let res = await axios("http://localhost:5000/api/cities/");
    return res.data;
  }
};

export const fetchSingleData = async (id) => {
  let res = await axios(`http://localhost:5000/api/cities/details/${id}`);
  return res.data;
};

export const register = async (data) => {
  let res = await axios.post("http://localhost:5000/api/auth/register", data);
  return res.data;
};

export const login = async (data) => {
  let res = await axios.post("http://localhost:5000/api/auth/login", data);
  return res.data;
};
export const newPlace = async (data) => {
  let res = await axios.post("http://localhost:5000/api/city/newplace", data);
  return res.data;
};

export const initialServices = {
  fetchData,
  register,
  login,
  fetchSingleData,
  newPlace,
};
