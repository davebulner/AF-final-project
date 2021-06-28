import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../Message/message.js'
import Loader from '../../Loader/loader.js'
import { AdminconferenceList } from '../../../action/adminAction.js'
import Appbar from '../../Navbar/navbar.js'



const AdminconferenceListScreen = () => {
    const dispatch = useDispatch()

    const appConference = useSelector((state) => state.appConference)
    const { loading,error, conferencedetails } = appConference

    useEffect(() => {
        dispatch(AdminconferenceList())
  }, [dispatch])

  return (
    <>
          <Appbar />
          <h1>Admin Dashboard</h1>
          {loading ? (<Loader />) : error ? (
                <Message variant='danger'>{error}</Message>
          ) : (
                <Table striped bordered hover responsive variant="light" className='table-sm'>
                      <thead>
                            <tr>
                                  <th>Name</th>
                                  <th>Email</th>
                                  <th>Phone</th>
                                  <th>Venue</th>
                                  <th>isApproved</th>
                            </tr>
                      </thead>
                      <tbody>
                            {conferencedetails.map((con) => (
                                  <tr key={con._id} >
                                        <td>{con.conname}</td>
                                        <td>{con.email}</td>
                                        <td>{con.phone}</td>
                                        <td>{con.venue}</td>
                                        <td>{con.isApproved ? 
                                          (<i className='fas fa-check' style={{ color:'green' }}> </i>) : (<i className='fas fa-times' style={{ color:'red' }}> </i>)
                                        }
                                        </td>
                                        <td>
                                            <LinkContainer to={`/conDetails/${con._id}`}>
                                                <Button variant='light' className='btn-sm'>
                                                    Details
                                                </Button>
                                            </LinkContainer>
                                        </td>
                                       
                                  </tr>
                            ))}
                      </tbody>
                </Table>
          )}

    </>
)

}


export default AdminconferenceListScreen
