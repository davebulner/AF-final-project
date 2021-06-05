import React, { useState } from "react";
import styled from 'styled-components';
import { LoginScreen } from '../screens/LoginScreen'



const Navbar = () => {

      const [navlinkOpen, navlinkToggle] = useState(false);
      const [navbar, setnavbar] = useState(false);

      const handleNavLinksToggle = () => {
            navlinkToggle(!navlinkOpen)
      }

      const renderClasses = () => {
            let classes = 'navlinks';

            if (navlinkOpen) {
                  classes += " active"
            }
            return classes;
      }

      const changeBackground = () => {
            if (window.scrollY >= 80) {
                  setnavbar(true)
            } else {
                  setnavbar(false)
            }
      }

      window.addEventListener('scroll', changeBackground);

      const [showModal, setShowModal] = useState(false);

      const openModal = () => {
            setShowModal(prev => !prev);
      };


      return (
            <>
                  <nav className={navbar ? 'navbar active' : 'navbar'}>
                        <div className="logo">
                              <i className="fas fa-mountain"></i>
                              <h4>VCMS</h4>
                        </div>
                        <ul className={renderClasses()}>
                              <li className="link"><a href="#">Home</a></li>
                              <li className="link" onClick={openModal}><LoginScreen showModal={showModal} setShowModal={showModal}></LoginScreen>Login</li>
                              <li className="link"><a href="#">Register</a></li>
                              <li className="link"><a href="#">Contact us</a></li>
                        </ul>
                        <div onClick={handleNavLinksToggle} className="hambuger-toggle">
                              <i className="fas fa-bars fa-lg"></i>
                        </div>
                  </nav>

            </>

      )
}

export default Navbar