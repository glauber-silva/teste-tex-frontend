import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import './header.scss';
import logo from './logo.png'

class Header extends React.Component{
    render(){
        return(
            <Navbar className="NavBar" fluid={false}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/"><Image src={logo}/></a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;