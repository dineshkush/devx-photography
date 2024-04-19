import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center text-white">
                <a className="logo" href="/">
                  Dev<span>X</span> Photography
                </a>
                <p>© 2024 DevX Photography. All rights reserved.</p>
                <ul className="footer_sm">
                  <li>
                    <a href="/">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
