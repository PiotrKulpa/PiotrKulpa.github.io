import { useEffect } from 'react';
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

  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxData.length === 0) {
      const fetchData = async () =>  {
        dispatch({ type: 'UPDATE_LOADER', payload: true });
        const response = await axios(config);
        const { data: { records = [] } = {} } = response || {};
        dispatch({ type: reducerName, payload: records });
        dispatch({ type: 'UPDATE_LOADER', payload: false });
      }

      try {
        fetchData();
      } catch (err) {
        console.log(err);
        dispatch({ type: 'UPDATE_LOADER', payload: false });
      }
      
    }
  });



};

export default useAirtableData;