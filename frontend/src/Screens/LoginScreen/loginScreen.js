import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './loginscreen.css'

import 'bootstrap/dist/css/bootstrap.min.css';

const Loginscreen = () => {


      return (
            <>

                  <div className='wrapper'>
                        <div className='nm'>

                        </div>
                        <div className='content'>
                              <h4>Login </h4>
                              <Form >
                                    <Form.Group controlId='email' className='py-2'>
                                          <Form.Label>Email Address</Form.Label>
                                          <Form.Control type='email' placeholder='Enter email'  ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='password' className='py-2'>
                                          <Form.Label>Password</Form.Label>
                                          <Form.Control type='password' placeholder='Enter password'  ></Form.Control>
                                    </Form.Group>
                                    <Form.Group className='py-2'>
                                          <Button type='submit' variant='primary'>
                                                Sign In
                                          </Button>
                                    </Form.Group>

                              </Form>
                        </div>

                  </div>



            </>


      )


}

export default Loginscreen