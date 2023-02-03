import React from 'react';
import './Contact.css';
const ContactsHeader = () => {
    return (
        <div className='Contact pt-1'>
            <div className='container headerInfo '>
                <div className='row '>
                    <div className='col-lg-auto  d-flex header-tel'>
                        <ul className='' >

                            <li className='mr-2' data-aos="fade-down" data-aos-duration="1000"> <span>012 562 40 02</span> </li>

                            <li className='' data-aos="fade-down" data-aos-duration="1000"> <span> istanbul_hospital@gmail.com</span> </li>
                        </ul>
                    </div>
                    {/* <div className='col-lg-auto Language' data-aos="fade-down" data-aos-duration="1000">
                        <p>AZ</p>
                        <p>EN</p>
                        <p>RU</p>
                    </div> */}


                </div>
            </div>
        </div>
    );
};

export default ContactsHeader;