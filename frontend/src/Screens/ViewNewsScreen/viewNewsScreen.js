import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message/message'
import Loader from '../../components/Loader/loader'
import FromContainer from '../../components/FormContainer/formContainer.js'
import { getNewsDetails } from '../../action/newsAction'

const ViewNewsScreen = ({ match, history }) => {
      const nId = match.params.id

      const [name, setName] = useState('')
      const [date, setDate] = useState('')
      const [message, setMessage] = useState('')

      const dispatch = useDispatch()

      const getNews = useSelector((state) => state.getNews)
      const { loading, error, news } = getNews

      useEffect(() => {
            if (!news.name || news._id !== nId) {
                  dispatch(getNewsDetails(nId))
            } else {
                  setName(news.name)
                  setDate(news.date)
                  setMessage(news.message)
            }
      }, [dispatch, history, nId, news])

      return (
            <>

                  <Link to='/' className='btn btn-light my-3'>
                        Go Back
                  </Link>
                  <FromContainer>
                        <h1>NEWS DETAILS</h1>

                        {loading ? (
                              <Loader />
                        ) : error ? (
                              <Message variant='danger'>{error}</Message>
                        ) : (
                              <Form>
                                    <Form.Group controlId='name'>
                                          <Form.Label>Name</Form.Label>
                                          <Form.Control
                                                type='name'
                                                placeholder='Enter Name'
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='date'>
                                          <Form.Label>Date</Form.Label>
                                          <Form.Control
                                                type='date'
                                                palceholder='Enter Date'
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='message'>
                                          <Form.Label>Message</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter message'
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                              </Form>
                        )}
                  </FromContainer>


            </>
      )
}

export default ViewNewsScreen