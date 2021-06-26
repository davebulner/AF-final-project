import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './registerscreen.css'

import Navbar from '../../components/Navbar/navbar.js'
import Footer from '../../components/Footer/footer.js'

const registerScreen = () => {
      return (
            <>
                  <Navbar />

                  <div className='wrapper'>
                        <div className='ni'>

                        </div>
                        <div className='content'>
                              <Form>
                                    <h3 align='center'>Sign Up</h3>

                                    <div className="form-group bn">
                                          <label>First name</label>
                                          <input type="text" className="form-control" placeholder="First name" />
                                    </div>

                                    <div className="form-group bn">
                                          <label>Last name</label>
                                          <input type="text" className="form-control" placeholder="Last name" />
                                    </div>

                                    <div className="form-group bn">
                                          <label>Email address</label>
                                          <input type="email" className="form-control" placeholder="Enter email" />
                                    </div>

                                    <div className="form-group bn">
                                          <label>Password</label>
                                          <input type="password" className="form-control" placeholder="Enter password" />
                                    </div>

                                    <Button type="submit" className="btn btn-primary btn-block ">Sign Up</Button>
                                    <p className="forgot-password text-right">
                                          Already registered <a href="/login">sign in?</a>
                                    </p>
                              </Form>
                        </div>

                  </div>


                  <Footer />

            </>

      )
}

export default registerScreen