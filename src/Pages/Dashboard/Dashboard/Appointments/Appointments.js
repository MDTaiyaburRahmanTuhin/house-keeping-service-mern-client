import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const Appointments = () => {
    const { user, token } = useAuth();
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        const url = `https://pure-journey-39120.herokuapp.com/appointments?email=${user.email}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`,
            }
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    return (
        <div>
            <h2>My appointment:{appointments.length}</h2>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">service Name</th>
                        <th scope="col">Name</th>
                        <th scope="col">email</th>
                        <th scope="col">Date</th>
                        <th scope="col">time</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((row) => (
                        <tr
                            key={row._id}
                        >
                            <td>{row.name}</td>
                            <td>{row.displayName}</td>
                            <td>{row.email}</td>
                            <td>{row.selectedDate}</td>
                            <td>{row.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Appointments;