import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../../components/Message/message'
import Loader from '../../../components/Loader/loader'
import FromContainer from '../../../components/FormContainer/formContainer.js'
import { getConferenceDetailsById } from '../../../action/adminAction.js'
import { ADMIN_CONFERENCE_DETAILS_ID_RESET } from '../../../constants/adminConstants.js'

const ApproveScreen = ({ match }) => {
      const conId = match.params.id

      const dispatch = useDispatch()

      const ConfDetails = useSelector((state) => state.ConfDetails)
      const { loading, error, conferencedetails } = ConfDetails

      useEffect(() => {
            if (!conferencedetails) {
                  dispatch(getConferenceDetailsById(conId))
            } 
            
      }, [dispatch])

      return (
            <>

            
                        <h1>Conference  Details {conferencedetails.conname}</h1>
                  </>   )     
}             

export default ApproveScreen