import React from 'react';
import img from './../../../images/my-answer-concept-illustration_114360-4391.jpg';
const Contact = () => {
    return (
        <div data-aos="fade-right" data-aos-duration="400" id='contact-me'>
            <h2>Contact Me</h2>
            <form className='p-5' target="_blank" action="https://formsubmit.co/tuhinkhandakar99@gmail.com" method="POST">
                <div className='row align-items-center'>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <input type='text' className='form-control mb-3' placeholder='Name' name='name' />
                        <input type='email' className='form-control mb-3' placeholder='Email' name='email' />
                        <input type='text' className='form-control mb-3' placeholder='Subject' name='subject' />
                        <input type='text' className='form-control mb-3' placeholder='Message' name='message' />
                        <input type='submit' className='btn' value='send message' />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <img src={img} alt="" srcset="" />
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Contact;