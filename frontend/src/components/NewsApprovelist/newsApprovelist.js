import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader/loader.js'
import Message from '../Message/message.js'
import { listAllNews } from '../../action/newsAction'

import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

export const newsList = () => {
      const dispatch = useDispatch()

      const listNews = useSelector(state => state.listNews)
      const { loading, error, news } = listNews


      useEffect(() => {
            dispatch(listAllNews())

      }, [dispatch])

      return (
            <>


                  {loading ? (<Loader />) : error ? (
                        <Message variant='danger'>{error}</Message>
                  ) : (
                        <Card className="text-center" >
                              <h3>CONFERENCE NEWS</h3>
                              {news.map((newA) => (
                                    <tr key={newA._id} >
                                          <Card.Title variant="warning"  >{newA.name}</Card.Title>
                                          <Card.Body>
                                                <Card.Text>
                                                      {newA.date}
                                                </Card.Text>
                                                <Button variant="warning">View News</Button>
                                          </Card.Body>


                                    </tr>
                              ))}

                        </Card>
                  )
                  }


            </>
      )
}

export default newsList