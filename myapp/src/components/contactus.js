//contactus.js
import React from 'react';
import './Contactus.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import image from './image.png';

export default class Contactus extends React.Component {
    render() {
        return (
            <div className='contactus-container'>
                <div className='contactus-box'>
                    <div className='contactus-image'>
                        <img src={image} alt='Contact Us' />
                    </div>
                    <div className='contactus-info'>
                        <div className='contact-column'>
                            <h3><FaMapMarkerAlt className='contact-icon' /> ADDRESS</h3>
                            <p>Weifield Group Contracting</p>
                            <p>146 Yuma Street Denver CO 80223</p>
                            <p>Northern Division Office</p>
                            <p>1270 Automation Drive Windsor, CO 80550</p>
                        </div>
                        <div className='contact-column'>
                            <h3><FaPhone className='contact-icon' /> PHONE</h3>
                            <p>Weifield Group Contracting</p>
                            <p>303.428.2011 phone</p>
                            <p>303.202.0466 facsimile</p>
                            <p>Weifield 24/7 Service Department</p>
                            <p>303.428.2011 (Then press 2 for emergency call-in)</p>
                        </div>
                        <div className='contact-column'>
                            <h3><FaEnvelope className='contact-icon' /> EMAIL</h3>
                            <p>Request for Proposal: Info@weifeldgroup.com</p>
                            <p>Electrical Service Calls: service@weifieldcontracting.com</p>
                            <p>Employment Opportunities: careers@weifieldcontracting.com</p>
                            <p>Northern Division Office</p>
                            <p>303.428.2011 phone</p>
                            <p>303.202.0466 facsimile</p>
                            <p>Wyoming Office</p>
                            <p>307.757.7967 phone</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
