import React from 'react';
import './Service.css'
const Service = (props) => {
    const { name, description, img } = props.service
    return (


        <div className="col-md-4 col-sm-12">
            <div className="card border-0">
                <div className="card-body">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='w-100 h-100' src={img} alt="Avatar" />
                            </div>
                            <div className="flip-card-back">
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                    <h5 className='mt-5'>{name}</h5>
                </div>
            </div>
        </div>

    );
};

export default Service;