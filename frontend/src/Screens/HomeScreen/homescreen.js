import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Appbar from '../../components/Navbar/navbar.js'
import Footer from '../../components/Footer/footer.js'
import Showcase from '../../components/Showcase/showcase.js'
import { Button, Form, Table } from 'react-bootstrap';
import { listConDetails } from '../../action/conferenceAction.js'
import Loader from '../../components/Loader/loader.js'
import Message from '../../components/Message/message.js'
import './homescreen.css'


const homeScreen = () => {

      return (
            <>
                  <div className="man">
                        <Appbar />
                        <Showcase />
                        <Footer />
                  </div>
            </>
      )
}

export default homeScreen