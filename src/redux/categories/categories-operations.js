const axios = require('axios');

axios.defaults.baseURL = 'https://kapusta-wtf.herokuapp.com/';

const getCategories = async () => {
  const { data } = await axios.get(
    'api/v1/categories'
  );
  return data.data.result;
};

const categoriesOperations = {
  getCategories
};

export default categoriesOperations;
