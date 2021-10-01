import axios from 'axios';

const TEST_URL = 'https://fakestoreapi.com/products?limit=8';

export const getProductList = async () => {
  return await axios
    .get(TEST_URL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
