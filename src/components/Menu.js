import Link from 'next/link';
import { useState, useEffect, useCallback, useContext } from 'react';
import { useRouter } from 'next/router';

import getData from '../utils/getData';
import LoaderContext from './LoaderContext';

const Menu = () => {

  const [airtableData, setAirtableData] = useState([]);
  const router = useRouter();
  const { pathname = ' ' } = router;
  const { setLoader } = useContext(LoaderContext);

  const getMenu = useCallback(async () => {


    try {
      const result = await getData('menu');
      setAirtableData(result);
      setLoader({ menu: false });
    } catch (error) {
      console.error(error);
      setLoader({ menu: false });
    }
  }, [getData]);

  useEffect(() => {
    getMenu();
  }, [getMenu]);

  const [menuState, setMenuState] = useState(false);

  const toggleMenu = () => {
    setMenuState((prev) => !prev);
  };

  return <>
    <nav id="mainNav" className={`css3Animate ${pathname === '/' ? 'lightNav' : 'darkNav navTop'}`} role="navigation" style={{ top: 0 }}>
      <div className={`pt-trigger-container ${pathname === '/' ? '' : 'aboutmeNav'}`}>
        <h1>
          <Link href='/'>
            <a className="custom-logo">
              <button className="navbar-brand round-logo pt-trigger css3Animate" data-animation={22} data-goto={1} data-style="lightNav">
                PK
            </button>
            </a>
          </Link>
        </h1>

        <ul className="nav navbar-nav hidden-xs">
          {airtableData && airtableData.map(({ name, slug }, i) => {
            return <li key={i}>
              <Link href={slug}>
                <a className="custom-nav-link">
                  <button
                    className={`pt-trigger css3Animate ${i === 1 ? 'right-margin' : ''} ${i === 2 ? 'left-margin' : ''}`}
                    data-animation={22}
                    data-goto={2}
                    data-style="darkNav"
                    data-style2="aboutmeNav">
                    {name}
                    <span className="line css3Animate" />

                  </button>
                </a>
              </Link>
            </li>
          })}



        </ul>
        <a href="#" onClick={toggleMenu} id="menuMobileOpen" className="css3Animate hidden-sm hidden-md hidden-lg" aria-hidden="true" data-icon="a" />
      </div>
    </nav>
    <div className="menu-mobile" style={{ display: menuState ? 'block' : 'none' }}>
      <a href="#" onClick={toggleMenu} id="menuMobileClose" className="css3Animate" aria-hidden="true" data-icon="Q" title />
      <ul className="nav navbar-nav">
        {airtableData && airtableData.map(({ name, slug }, i) => {
          return <li key={i}>
            <Link href={slug}>
              <a className="custom-mobile-menu-link">
                <button
                  className="pt-trigger css3Animate"
                  data-animation={22}
                  data-goto={2}
                  data-style="darkNav"
                  data-style2="aboutmeNav"
                >
                  {name}<span className="line css3Animate" />
                </button>
              </a>
            </Link>
          </li>
        })}
      </ul>
    </div>

  </>
}

export default Menu;
