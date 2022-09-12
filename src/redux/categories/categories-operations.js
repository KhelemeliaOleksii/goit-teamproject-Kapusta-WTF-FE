import axios from '../../api/axios/axiosConfig';

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
