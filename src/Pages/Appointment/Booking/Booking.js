import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import useAuth from '../../../hooks/useAuth';

const Booking = (props) => {
  const { id, name, time, location } = props.bookings
  const [selectedDate, SetSelectedDate] = useState(null)
  const { user } = useAuth();
  const initialInfo = { displayName: user.displayName, email: user.email, phone: '' }
  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo }
    newInfo[field] = value;
    console.log(newInfo);
    setBookingInfo(newInfo);
  }

  const handleBookingSubmit = e => {
    const appointment = {
      ...bookingInfo,
      name,
      time,
      location,
      selectedDate: selectedDate.toLocaleDateString()
    }
    fetch('https://pure-journey-39120.herokuapp.com/appointments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(appointment)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          setBookingSuccess(true)
        }
      })
    console.log(appointment);
    //send to the server
    e.preventDefault();
  }
  return (
    <div className="col-md-4 col-sm-12">
      <div className="card text-center m-2">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{time}</p>
          <p className="card-text">Location: {location}</p>

          <button className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Booking Service</button>

          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">{name}</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleBookingSubmit}>
                    <input disabled defaultValue={name} />
                    <br />
                    <input disabled defaultValue={time} />
                    <br />
                    <input disabled defaultValue={location} />
                    <br />
                    <input defaultValue={user.email} name='email' onBlur={handleOnBlur} />
                    <br />
                    <input defaultValue={user.displayName} name='displayName' onBlur={handleOnBlur} />
                    <br />
                    <input defaultValue='phone Number' name='phone' onBlur={handleOnBlur} />
                    <DatePicker selected={selectedDate} onChange={date => SetSelectedDate(date)} isClearable placeholderText='Date' name='date' onBlur={handleOnBlur} />
                    <button type='submit'>Submit</button>
                    {bookingSuccess && <Alert>User Created successfully!</Alert>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

/* 
<!-- Button trigger modal -->
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<!-- Modal -->
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>

*/