import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { URL, API_KEY } from '../const/config';

const useAirtableData = (tableName, reducerName, reduxData) => {

  const config = {
    method: 'get',
    url: `${URL}${tableName}`,
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
  };
  const [ loading, setLoading] = useState(false);
  const [ data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxData.length === 0) {
      const fetchData = async () =>  {
        setLoading(true);
        const response = await axios(config);
        const { data: { records = [] } = {} } = response || {};
        // console.log({response});
        dispatch({ type: reducerName, payload: records });
        setLoading(false);
        setData(records);

       
      }

      try {
        fetchData();
       
      } catch (err) {
        console.log(err);
        setLoading(false);
      }

    
      
    }
  });

  return {
    loading,
  }



};

export default useAirtableData;