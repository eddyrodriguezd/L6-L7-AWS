import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Bank Admin</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="/create-account">Create new account</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/retrieve-account">Retrieve single account</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/update-balance">Update account's balance</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;