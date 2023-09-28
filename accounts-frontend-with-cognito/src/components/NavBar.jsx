import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = ({ user, signOut }) => {
    const userString = JSON.stringify(user, null, 2);

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

            <Nav.Item className="ml-auto">
                <p>Welcome {user.username}</p>
            </Nav.Item>
            <Nav.Item>
                <button onClick={signOut}>Sign out</button>
            </Nav.Item>
        </Navbar>
    );
};

export default NavBar;