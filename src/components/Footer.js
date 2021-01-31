import { useState, useEffect, useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import getData from '../utils/getData';
import LoaderContext from './LoaderContext';

import Scroll from 'react-scroll';
const scroll = Scroll.animateScroll;
 
const Footer = () => {

  const [airtableData, setAirtableData] = useState([]);
  const router = useRouter();
  const { pathname = ' ' } = router;
  const { setLoader } = useContext(LoaderContext);

  const getFooter = useCallback(async () => {
    setLoader({ footer: true });
    try {
      const result = await getData('footer');
      setAirtableData(result);
      setLoader({ footer: false });
    } catch (error) {
      console.error(error);
      setLoader({ footer: false });
    }
  }, [getData]);

  useEffect(() => {
    getFooter();
  }, [getFooter]);

  const scrollToTopPage = () => {
    scroll.scrollToTop();
  };

  return (
    pathname !== '/' && <footer className="darkFooter">
      {airtableData && airtableData[0] && 
        <div dangerouslySetInnerHTML={{ __html: airtableData[0].content }} />}
        <a href="#" onClick={scrollToTopPage} className="toTop css3Animate" aria-hidden="true" data-icon={2} title />
    </footer>
  )
}

export default Footer;