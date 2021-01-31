import { useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';
import LoaderContext from './LoaderContext';

const AboutMe = () => {
  const [aboutMeData, setAboutMeData] = useState([]);
  const { setLoader } = useContext(LoaderContext);

  const getAboutMe = useCallback(async() => {
    try {
        setLoader({aboutMe: true});
        const response = await axios.get('/api/about-me');
        setAboutMeData(response.data);
        setLoader({aboutMe: false});
    } catch (error) {
      console.error(error);
      setLoader({aboutMe: false});
      setAboutMeData({content: '<p>Network error. Try again later.</p>'});
    }
  }, []);

  useEffect(() => {
    getAboutMe();
  }, [getAboutMe]);
  
  return (
    <>
      {aboutMeData && aboutMeData[0] && <div dangerouslySetInnerHTML={{__html: aboutMeData[0].content}} /> }
    </>
  )
}

export default AboutMe;
