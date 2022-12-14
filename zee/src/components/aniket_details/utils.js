import axios from "axios";

// Trending section url
const url = "https://mockdata.onrender.com/Trending/";

// get
export const getReq_Products = async () => {
  let data = await axios.get(url).then((res) => res.data);
  return data;
};

// add product
export const addReq_Products = async (product) => {
  let data = await axios.post(url, product).then((res) => res.data);
  return data;
};

// delete product
export const deleteReq_Products = async (id) => {
  let data = await axios.delete(url + id).then((res) => res.data);
  return data;
};

// update product
export const patchReq_Products = async (id, changes) => {
  let data = await axios
    .patch(url + id, { ...changes })
    .then((res) => res.data);
  return data;
};
