import React from "react";

const Navbar = () => {
      return <nav>
            <div className="logo">
                  <i className="fas fa-mountain"></i>
                  <h4>VCMS</h4>
            </div>
            <ul className="navlinks">
                  <li className="link"><a href="#">Home</a></li>
                  <li className="link"><a href="#">About</a></li>
                  <li className="link"><a href="#">Services</a></li>
                  <li className="link"><a href="#">Contact us</a></li>
            </ul>
      </nav>
}

export default Navbar