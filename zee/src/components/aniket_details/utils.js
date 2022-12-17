import axios from "axios";

// Movies Products Related utilities
// Trending section url
const trendingMovies_url = "https://mockdata.onrender.com/Trending/";

// get
export const getReq_Products = async () => {
  let data = await axios.get(trendingMovies_url).then((res) => res.data);
  return data;
};

// add product
export const addReq_Products = async (product) => {
  let data = await axios
    .post(trendingMovies_url, product)
    .then((res) => res.data);
  return data;
};

// delete product
export const deleteReq_Products = async (id) => {
  let data = await axios
    .delete(trendingMovies_url + id)
    .then((res) => res.data);
  return data;
};

// update product
export const patchReq_Products = async (id, changes) => {
  let data = await axios
    .patch(trendingMovies_url + id, { ...changes })
    .then((res) => res.data);
  return data;
};

// Admins Related utilities
// Admins api url
const url_admins = "https://mock-server-app-ycs2.onrender.com/zee5Admins/";

export const getReq_AdminsData = async () => {
  let data = await axios.get(url_admins).then((res) => res.data);
  return data;
};
