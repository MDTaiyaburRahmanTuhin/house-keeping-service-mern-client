import React, { useState } from 'react';
import { Alert, Form, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginimg from './../../../images/access-control-system-abstract-concept_335657-3180.jpg';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, authError, isLoading } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-md-6'>
                    <h2>Login</h2>
                    <form onSubmit={handleLoginSubmit}>
                        <Form.Control className='w-50 m-5 '
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            placeholder="Enter email" />
                        <Form.Control className='w-50 m-5'
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            placeholder="Password" />
                        <button className='btn w-25' type="submit">
                            Login
                        </button>
                        <NavLink to="/register">
                            <p>New User? Pleace  Register</p>
                        </NavLink>
                    </form>
                    <p>-----------------------</p>
                    <button onClick={handleGoogleSignIn} className='btn w-25'>
                        Google sign In
                    </button>
                    {isLoading && <Spinner animation="border" role="status"></Spinner>}
                    {user?.email && <Alert>User Created successfully!</Alert>}
                    {authError && <Alert>{authError}</Alert>}
                </div>
                <div className='col-md-6'>
                    <img src={loginimg} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Login;