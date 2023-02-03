import React from 'react';

import Articles from "../Components/Articles";
import Cards from "../Components/Cards";
import Corusels from "../Components/Corusels";
import Content from "../Components/Content";
// import PageInfo from "../Components/PageInfo";
import DoctorSlide from './DoctorSlide';
import { Link } from 'react-router-dom';
const Home = (props) => {



    return (
        <div className='container mt-3'>
            <div className='row'>
                <div>
                    <Corusels />
                    <Cards />
                    <Content />
                    <DoctorSlide />
                    <Articles />
                    <iframe data-aos="zoom-in" data-aos-duration="1000" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2553.9507522853896!2d49.84268184225261!3d40.42709257005833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9c6071034d0716a!2s%C4%B0stanbul%20Klinika!5e0!3m2!1saz!2s!4v1660112493985!5m2!1saz!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>
        </div >
    );
};

export default Home;