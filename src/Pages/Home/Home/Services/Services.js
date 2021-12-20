import React from 'react';
import { Link } from 'react-router-dom';
import Service from '../../Service/Service';
import clean1 from './../../../../images/service.jpg'
import clean2 from './../../../../images/service2.jpg'
import clean3 from './../../../../images/service3.jpg'
const services = [
    {
        name: 'Clean',
        description: 'Special heated cleaning solutions to loosen embedded dirt',
        img: clean1
    },
    {
        name: 'Rinse',
        description: 'Thorough fiber rinse and extraction removes dirt along with cleaning solution',
        img: clean2
    },
    {
        name: 'Protect',
        description: 'Fabric protector & odor eliminator may extend carpet life',
        img: clean3
    }

]
const Services = () => {
    return (
        <div class="container mt-5">
            <h4 className='mt-5'>SERVICES WE PROVIDE</h4>
            <div class="row">
                {services.map(service =>

                    <Service service={service}
                        key={service.name}></Service>)
                }
            </div>
            <Link to='/appointment'><button className='mt-5 mb-5 btn'>Appointment</button></Link>
        </div>
    );
};

export default Services;