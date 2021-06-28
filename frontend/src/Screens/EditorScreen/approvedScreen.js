import React, { useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message/message'
import Loader from '../../components/Loader/loader'
import { appConList } from '../../action/conferenceAction'
import Appbar from '../../components/Navbar/navbar.js'
import Editornavbar from '../../components/EditorNav/editorNavbar.js'


const appconlistScreen = () => {
      const dispatch = useDispatch()

      const appCon = useSelector((state) => state.appCon)
      const { loading, error, conferencedetails } = appCon

      useEffect(() => {
            dispatch(appConList())
      }, [dispatch])

      return (
            <>
                  <Appbar />
                  <h1>Editor Dashboard</h1>
                  <Editornavbar />
                  {loading ? (<Loader />) : error ? (
                        <Message variant='danger'>{error}</Message>
                  ) : (
                        <Table striped bordered hover responsive variant="dark" className='table-sm'>
                              <thead>
                                    <tr>
                                          <th>ID</th>
                                          <th>NAME</th>
                                          <th>EMAIL</th>
                                          <th>ADMIN</th>
                                          <th></th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {conferencedetails.map((con) => (
                                          <tr key={con._id} >
                                                <td>{con.conname}</td>
                                                <td>{con.description}</td>
                                                <td>{con.organizer}</td>
                                                <td>{con.phone}</td>
                                                <td>{con.email}</td>
                                                <td>{con.venue}</td>
                                          </tr>
                                    ))}
                              </tbody>
                        </Table>
                  )}

            </>
      )

}


export default appconlistScreen