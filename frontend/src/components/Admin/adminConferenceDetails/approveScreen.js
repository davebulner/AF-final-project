import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, ListGroup} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../../components/Message/message'
import Loader from '../../../components/Loader/loader'
import { getConferenceDetailsById } from '../../../action/adminAction.js'


const ApproveScreen = ({ match }) => {
      const confId = match.params.id

    

      const dispatch = useDispatch()

      const cDetails = useSelector((state) => state.cDetails)
      const { conferencedetails, loading, error } = cDetails


      useEffect(() => {

        if (conferencedetails) {
                  dispatch(getConferenceDetailsById(confId))
            } 
      }, [dispatch])


      return loading ? (
            <Loader />
      ) : error ? (
            <Message variant='danger'>{error}</Message>
      ) : (
            <>
                  <h1>Conference {conferencedetails.conname}</h1>
                  <Row>
                        <Col md={8}>
                              <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                          <p>
                                                <strong>Name: </strong> {conferencedetails.conname}
                                          </p>
      
                                          <p>
                                                <strong>Address:</strong>
                                                {conferencedetails.organizer}  
                                          </p>
                                          {conferencedetails.isApproved ? (
                                                <Message variant='success'>
                                                      isApproved 
                                                </Message>
                                          ) : (
                                                <Message variant='danger'>Not isApproved</Message>
                                          )}
                                    </ListGroup.Item>

                                   
                                  
                                    
                                   
                                                    

                                 </ListGroup>                                      

                                        
                             
                        </Col>
                  </Row>
            </>
      )
}

export default ApproveScreen