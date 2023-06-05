import React from 'react';

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <svg className="footer__icon icon-trip_house_mobile">
        <use href="#trip_house_mobile" />
      </svg>
      <div className="footer__list">
        <div className="col-lg-3 col-md-3 col-sm-1 col-xs-1">
          <ul className="footer__links">
            <li>
              <a className="footer__text-title footer__text" href="#">
                About
              </a>
            </li>
            <li>
              <a className="footer__text" href="#">
                How Triphouse works
              </a>
            </li>
            <li>
              <a className="footer__text" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="footer__text" href="#">
                Privacy
              </a>
            </li>
            <li>
              <a className="footer__text" href="#">
                Terms
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-2 col-xs-2">
          <ul className="footer__links">
            <li>
              <a className="footer__text footer__text-title" href="#">
                Property types
              </a>
            </li>
            <li>
              <a className="footer__text" href="#">
                Guest houses
              </a>
            </li>
            <li>
              <a className="footer__text" href="#">
                Hotels
              </a>
            </li>
            <li>
              <a className="footer__text" href="#">
                Apartments
              </a>
            </li>
            <li>
              <a className="footer__text" href="#">
                Villas
              </a>
            </li>
            <li>
              <a className="footer__text" href="#">
                Holiday homes
              </a>
            </li>
            <li>
              <a className="footer__text" href="#">
                Hostels
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-1 col-xs-1">
          <ul className="footer__links">
            <li>
              <a className="footer__text footer__text-title" href="#">
                Support
              </a>
            </li>
            <li>
              <a className="footer__text" href="#">
                Contact Customer Service
              </a>
            </li>
            <li>
              <a className="footer__text" href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
        <div className="footer__item-bot">
          <p className="footer__text footer__text-bottom">
            © 2022Triphouse, Inc. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
);
