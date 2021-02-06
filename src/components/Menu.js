import React, { useState, useEffect } from 'react';
import {
  Link,
  useLocation,
} from "react-router-dom";
import useAirtableData from '../utils/useAirtableData';
import { useSelector } from 'react-redux';

function Menu() {
  
  const [menuState, setMenuState] = useState(false);
  const location  = useLocation();
  const { pathname = '' } = location;
  const toggleMenu = () => {
    setMenuState((prev) => !prev);
  };
  
  const airtableData = useSelector(({ airtableReducer }) => airtableReducer.Menu)

  useAirtableData('Menu', 'FETCH_MENU', airtableData);

  console.log(airtableData)
  return (
    <>
    <nav 
      id="mainNav" 
      className={`css3Animate ${pathname === '/' ? 'lightNav' : 'darkNav navTop'}`} 
      role="navigation" 
      style={{ top: 0 }}
    >
      <div 
        className={`pt-trigger-container ${pathname === '/' ? '' : 'aboutmeNav'}`}
      >
        <h1>
          <Link to='/'>
            <a className="custom-logo">
              <button 
                className="navbar-brand round-logo pt-trigger css3Animate" 
                data-animation={22} 
                data-goto={1} 
                data-style="lightNav"
              >
                PK
            </button>
            </a>
          </Link>
        </h1>

        <ul className="nav navbar-nav hidden-xs">
          {airtableData && airtableData.map(({fields: { name, slug } = {} }, i) => {
            return <li key={i}>
              <Link to={slug} className="custom-nav-link">
                {/* <a className="custom-nav-link"> */}
                  <button
                    className={`pt-trigger css3Animate ${i === 1 ? 'right-margin' : ''} ${i === 2 ? 'left-margin' : ''}`}
                    data-animation={22}
                    data-goto={2}
                    data-style="darkNav"
                    data-style2="aboutmeNav">
                    {name}
                    <span className="line css3Animate" />

                  </button>
                {/* </a> */}
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
    
  )
}

export default Menu;
