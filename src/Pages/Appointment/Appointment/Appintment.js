import React, { useState } from 'react';
import Navigation from '../../Sherd/Navigation/Navigation';
import Booking from '../Booking/Booking';
const booking = [
    {
        id: 1,
        name: 'House Services',
        time: '08.00AM-09.00AM',
        location: 'Basabo'
    },
    {
        id: 2,
        name: 'Indoor Services',
        time: '09.00AM-10.00AM',
        location: 'Kilkhat'
    },
    {
        id: 2,
        name: 'Indoor Services',
        time: '09.00AM-10.00AM',
        location: 'Kilkhat'
    },
    {
        id: 3,
        name: 'Bathroom Services',
        time: '10.00AM-11.00AM',
        location: 'SobahanBag'
    },
    {
        id: 4,
        name: 'Outdoor Services',
        time: '08.00AM-09.00AM',
        location: 'Danmondi'
    },
    {
        id: 5,
        name: 'House Fixing',
        time: '08.00AM-09.00AM',
        location: 'Karaniganj'
    },
    {
        id: 6,
        name: 'Window Cleaning',
        time: '08.00AM-09.00AM',
        location: 'Taltola'
    },
    {
        id: 7,
        name: 'Door Cleaning',
        time: '08.00AM-09.00AM',
        location: 'Gulsan'
    },
    {
        id: 7,
        name: 'Door Cleaning',
        time: '08.00AM-09.00AM',
        location: 'Gulsan'
    },
    {
        id: 7,
        name: 'Door Cleaning',
        time: '08.00AM-09.00AM',
        location: 'Gulsan'
    },
    {
        id: 8,
        name: 'Kitchen Cleaning',
        time: '08.00AM-09.00AM',
        location: 'Baridara'
    },
    {
        id: 9,
        name: 'Car Cleaning',
        time: '08.00AM-09.00AM',
        location: 'Utors'
    },
    {
        id: 10,
        name: 'Kitchen Cleaning',
        time: '08.00AM-09.00AM',
        location: 'Mirpur-2'
    },
    {
        id: 10,
        name: 'Kitchen Cleaning',
        time: '08.00AM-09.00AM',
        location: 'Mirpur-2'
    },
    {
        id: 10,
        name: 'Kitchen Cleaning',
        time: '08.00AM-09.00AM',
        location: 'Mirpur-2'
    },
    {
        id: 10,
        name: 'Kitchen Cleaning',
        time: '08.00AM-09.00AM',
        location: 'Mirpur-2'
    },
]
const Appintment = () => {
    const [bookItems, setBookItems] = useState(booking);

    const filterItem = (address) => {
        const filterItems = booking.filter((item) => item.location === address);
        setBookItems(filterItems);
    }
    return (
        <div>
            <Navigation></Navigation>
            <h2>Our Service</h2>
            <p>Location and filter</p>
            <button className='btn m-2' onClick={() => setBookItems(booking)}>All</button>
            <button className='btn m-2' onClick={() => filterItem('Basabo')}>Basabo</button>
            <button className='btn m-2' onClick={() => filterItem('Kilkhat')}>Kilkhat</button>
            <button className='btn m-2' onClick={() => filterItem('SobahanBag')}>SobahanBag</button>
            <button className='btn m-2' onClick={() => filterItem('Danmondi')}>Danmondi</button>
            <button className='btn m-2' onClick={() => filterItem('Mirpur-2')}>Mirpur-2</button>
            <div class="row">
                {bookItems.map(bookings =>

                    <Booking bookings={bookings}
                        key={bookItems.id}></Booking>)
                }
            </div>
        </div>
    );
};

export default Appintment;