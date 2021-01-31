import axios from 'axios';

const getData = async(dataName) => {
      const response = await axios.get(`/api/${dataName}`);
      return response.data;
}

export default getData;