import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader/loader.js'
import Message from '../../components/Message/message.js'
import { Button, Form, Table, Row, Col } from 'react-bootstrap';
import { appConList } from '../../action/conferenceAction'


const conferenceDetails = () => {
      const dispatch = useDispatch()

      const appCon = useSelector((state) => state.appCon)
      const { loading, error, conferencedetails } = appCon

      useEffect(() => {
            dispatch(appConList())
      }, [dispatch])


      return (
            <>


                  {loading ? (<Loader />) : error ? (
                        <Message variant='danger'>{error}</Message>
                  ) : (

                        <tbody>
                              {conferencedetails.map((con) => (
                                    <tr key={con._id} >
                                          <p>{con.conname}</p>
                                          <p>{con.description}</p>
                                          <p>{con.organizer}</p>
                                          <p>{con.phone}</p>
                                    </tr>
                              ))}
                        </tbody>

                  )}

            </>
      )

}

export default conferenceDetails