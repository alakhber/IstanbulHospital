import React from 'react';
import './PageInfo.css';
import img from '../img/heading.jpg'
const PageInfo = () => {
    return (
        <div className='mt-4'>
           <div className='col-md-12 PageInfo' data-aos="zoom-in" data-aos-duration="1000" >
           <img
                            src={img}
                            alt="Trendy Pants and Shoes"
                            className=""
                        />
           </div>

            
        </div>
    );
};

export default PageInfo;