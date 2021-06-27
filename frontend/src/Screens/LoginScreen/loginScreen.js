import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './loginscreen.css'
import Navbar from '../../components/Navbar/navbar.js'
import Footer from '../../components/Footer/footer.js'
import { login } from '../../action/userAction';


const Loginscreen = () => {


      return (
            <>
                  <Navbar />

                  <div className='wrapper'>
                        <div className='nm'>

                        </div>
                        <div className='content'>

                              <Form>
                                    <h3 align='center'>Sign In</h3>

                                    <div className="form-group bn">
                                          <label>Email address</label>
                                          <input type="email" className="form-control" placeholder="Enter email" />
                                    </div>

                                    <div className="form-group bn">
                                          <label>Password</label>
                                          <input type="password" className="form-control" placeholder="Enter password" />
                                    </div>

                                    <div className="form-group bn">
                                          <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                          </div>
                                    </div>

                                    <Button type="submit" className="btn btn-primary btn-block">Submit</Button>
                                    <p className="forgot-password text-right">
                                          Forgot <a href="#">password?</a>
                                    </p>
                              </Form>
                        </div>

                  </div>


                  <Footer />
            </>


      )


}

export default Loginscreen