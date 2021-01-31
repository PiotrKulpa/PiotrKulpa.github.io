import { useState, useMemo } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { useRouter } from 'next/router';
import LoaderContext from './LoaderContext';
import Loader from './Loader';

const Layout = ({ children }) => {

  const router = useRouter();
  const { pathname = ' '} = router;
  const [isLoading, setIsLoading] = useState({});

  const setLoader = (loadingState) => {
    setIsLoading(state => ({...state, ...loadingState}));
  }

  const isGlobalLoading = useMemo(() => {
    return Object.values(isLoading).some(el => el === true);
  }, [isLoading]);

  return (
    <>
    <Loader fadeOut={!isGlobalLoading}/>
      {pathname === '/' && <div id="pattern"></div>}
      <div className="pt-wrapper" style={{height: pathname === '/' && '100vh'}}>
      <LoaderContext.Provider value={{setLoader, isLoading }}>
        <Menu/>
        <>{children}</>
        <Footer />
      </LoaderContext.Provider>
      </div>
    </>
  )
}

export default Layout;
