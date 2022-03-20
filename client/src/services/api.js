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

export const initialServices = {
  fetchData,
};
