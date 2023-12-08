import React, { useState } from 'react'
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  
import 'bootstrap/dist/css/bootstrap.min.css';  
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'

function NavBar() {
  
    const [show, setShow] = useState(false);

    const handleLinkClick = () => {
        if(show){
            setShow(false);
        }    
    }

    return (
    <div style={{
        display:"flex",
        justifyContent:"space-between",
        fontSize:"16px",
    }}>
        <div className='logo'><img src={logo} width='100px' height='100px'/></div>
        <div>
            <Navbar expand="lg" style={{paddingRight:"5%", paddingLeft:"1%"}}>                
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/' style={{color:"black"}}>HOME</Nav.Link>
                        <Nav.Link href='SearchPage' style={{color:"black"}}>SEARCH</Nav.Link>
                        <Nav.Link style={{color:"black"}}>RANK</Nav.Link>
                        <Nav.Link href='Movie' style={{color:"black"}}>MOVIE</Nav.Link>
                        <Nav.Link href='TVSeries' style={{color:"black"}}>TV SERIES</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            

        </div>
    </div>

  )
}

export default NavBar