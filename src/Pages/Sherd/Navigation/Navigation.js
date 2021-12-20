import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">House Keeping Service</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/myorder">MyOrder</Nav.Link>
                        <Nav.Link as={HashLink} to="/appointment">Appointment</Nav.Link>



                        {user?.email ?

                            <div>
                                <Button onClick={logOut} variant="light">Logout</Button>
                                <Nav.Link as={HashLink} to="/admin">Admin</Nav.Link>
                                <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                            </div>
                            : <Nav.Link href="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <Link to="/login">{user?.displayName}</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;