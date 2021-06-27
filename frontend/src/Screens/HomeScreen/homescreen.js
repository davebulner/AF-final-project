import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/Navbar/navbar.js'
import Footer from '../../components/Footer/footer.js'
import Showcase from '../../components/Showcase/showcase.js'
import { Button, Form, Table } from 'react-bootstrap';

import Loader from '../../components/Loader/loader.js'
import Message from '../../components/Message/message.js'


const homeScreen = () => {

      return (
            <>
                  <Navbar />
                  <Showcase />

                  <Footer />
            </>
      )
}

export default homeScreen