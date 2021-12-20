import React, { useState } from 'react';
import { Alert, Form, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not mathe')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <div className='container row'>
            <div className='col-md-6'>
                <h2>Login</h2>
                {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <Form.Control className='w-50 m-5 '
                        name="name"
                        onBlur={handleOnBlur}
                        placeholder="Your Name" />
                    <Form.Control className='w-50 m-5 '
                        type="email"
                        name="email"
                        onBlur={handleOnBlur}
                        placeholder="Enter email" />
                    <Form.Control className='w-50 m-5'
                        type="password"
                        name="password"
                        onBlur={handleOnBlur}
                        placeholder="Password" />
                    <Form.Control className='w-50 m-5'
                        type="password"
                        name="password2"
                        onBlur={handleOnBlur}
                        placeholder="Retype Password" />

                    <button className='btn' type="submit">
                        Register
                    </button>
                    <NavLink to="/login">
                        <p>Already Registered? Pleace  Login</p>
                    </NavLink>
                </form>}
                {isLoading && <Spinner animation="border" role="status"></Spinner>}
                {user?.email && <Alert>User Created successfully!</Alert>}
                {authError && <Alert>{authError}</Alert>}
            </div>
            <div className='col-md-6'>
                <h2>tuhin</h2>
            </div>
        </div>
    );
};

export default Register;