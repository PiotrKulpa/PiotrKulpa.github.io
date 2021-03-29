import React from 'react';
import { useLocation } from "react-router-dom";

import './Footer.scss';

const Footer = () => {

  const location  = useLocation();
  const { pathname = '' } = location;
  
  return (
    pathname === '/' ? null : <footer className="darkFooter">
      <hr className="footer-line" />
      <div className="container">
        <div className="row top-footer-icons">
          <div className="col-md-4 col-sm-4">
            <p><i class="fa fa-map-marker" aria-hidden="true"></i></p>
            <p>Opalowa 3<br />Lublin (Poland)</p>
          </div>
          <div className="col-md-4 col-sm-4">
            <p><i class="fa fa-mobile" aria-hidden="true"></i></p>
            <p>+48 507 531 805</p>
          </div>
          <div className="col-md-4 col-sm-4">
            <p><i class="fa fa-envelope" aria-hidden="true"></i></p>
            <p>info.kulpa@gmail.com</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <ul className="footer-social">
              <li>
                <a href="#" className="facebook css3Animate"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
              </li>
              <li>
                <a className="twitter css3Animate" href="#" aria-hidden="true" data-toggle="tooltip" data-placement="top" title data-original-title="Twitter" >
                  <i class="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
              </li>
              <li><a href="#" className="instagram css3Animate"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
              <li>
                <a className="pinterest css3Animate" href="#" aria-hidden="true" data-toggle="tooltip" data-placement="top" title data-original-title="Pinterest">
                  <i class="fa fa-pinterest-square" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a className="googleplus css3Animate" href="#" aria-hidden="true" data-toggle="tooltip" data-placement="top" title data-original-title="Google Plus">
                  <i class="fa fa-google-plus-square" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <p className="copyright">Copyright © {new Date().getFullYear()} <a href="#">Piotr Kulpa</a> - All rights reserved.</p>
          </div>
        </div>
      </div>
      <a href="#" className="toTop css3Animate" aria-hidden="true"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
    </footer>

  )
}

export default Footer;
