import React, { useState } from "react";
import './navbar.css'
import { LoginScreen } from "../../Screens/LoginScreen/loginScreen";
import { useDispatch, useSelector } from "react-redux";
import { Nav, NavDropdown } from "react-bootstrap";
import { logout } from "../../action/userAction.js";
import { Link } from "react-router-dom";

const Appbar = () => {

      const dispatch = useDispatch()

      const userLogin = useSelector(state => state.userLogin)
      const { userInfo } = userLogin

      const logoutHandler = () => {
            dispatch(logout())
      }

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

                              <li className="link"><a href="/">Home</a></li>
                              <li className="link" ><a href="/login"> Login</a></li>
                              <li className="link"><a href="/register">Register</a></li>
                              <li className="link"><a href="#">Contact us</a></li>
                              {userInfo ? (


                                    <NavDropdown title={userInfo.name} id='username'>
                                          <a href="#" />
                                          <NavDropdown.Item>Profile</NavDropdown.Item>
                                          <NavDropdown.Item onClick={logoutHandler}>
                                                <li className="link">logout</li>
                                          </NavDropdown.Item>
                                    </NavDropdown>

                              ) : <Nav.Link>
                                    <li className="link"><a href="#">User</a></li>
                              </Nav.Link>}


                              {userInfo && userInfo.isEditor && (
                                    <NavDropdown>
                                          <Link to='/editor'>
                                                editor
                                          </Link>

                                    </NavDropdown>
                              ) || userInfo && userInfo.isAdmin && (
                                    <NavDropdown>
                                          <Link to='/admincon'>
                                                Admin
                                          </Link>

                                    </NavDropdown>
                              )}



                        </ul>
                        <div onClick={handleNavLinksToggle} className="hambuger-toggle">
                              <i className="fas fa-bars fa-lg"></i>
                        </div>
                  </nav >
            </>
      )

}
export default Appbar