import React, { useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://pure-journey-39120.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }

            })
        e.preventDefault()
    }
    return (
        <div>
            <h2>This is Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <Form.Control className='w-50 m-5 '
                    type="email"
                    placeholder="Enter email"
                    onBlur={handleOnBlur}
                />

                <button type='submit'>Make Admin</button>
            </form>
            {success && <Alert>Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;