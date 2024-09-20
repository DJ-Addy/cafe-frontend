import React from "react";

const Footer = () => (
  <footer className="page-footer font-small pt-4" style={{ backgroundColor: 'black', color: 'white' }}>
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">La Casa tu Tia</h5>
          <p>Here you can use rows and columns to organize your footer content.</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" style={{ borderColor: 'white' }} />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Other Pages</h5>
          <ul className="list-unstyled">
            <li><a href="#!" style={{ color: 'white' }}>Menu</a></li>
            <li><a href="#!" style={{ color: 'white' }}>CartPage</a></li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Social Media</h5>
          <ul className="list-unstyled">
            <li><a href="#!" style={{ color: 'white' }}>Instagram: @LaCasaTuTia</a></li>
            <li><a href="#!" style={{ color: 'white' }}>Facebook: @LaCasaTuTia</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3" style={{ color: 'white' }}>
      © 2024 Copyright: <a href="https://mdbootstrap.com/" style={{ color: 'white' }}>Diana and Co.</a>
    </div>
  </footer>
);

export default Footer;
