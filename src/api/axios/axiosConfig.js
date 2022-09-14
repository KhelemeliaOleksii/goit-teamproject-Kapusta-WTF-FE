import axios from 'axios';

// Always reload your application after making a change to the .env file
// Always prefix your variables with REACT_APP_

const { REACT_APP_BACK_URL } = process.env;
axios.defaults.baseURL = `${REACT_APP_BACK_URL}`;

export default axios;
