import React from 'react'
import Nav from 'react-bootstrap/Nav'

const Editornavbar = () => {

      return (
            <Nav fill variant="tabs" defaultActiveKey="/home">
                  <Nav.Item>
                        <Nav.Link href="/editor">All</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                        <Nav.Link href="/applist">Approved list</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                        <Nav.Link href="/unapplist">UnApproved list</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                              Disabled
                        </Nav.Link>
                  </Nav.Item>
            </Nav>
      )


}

export default Editornavbar