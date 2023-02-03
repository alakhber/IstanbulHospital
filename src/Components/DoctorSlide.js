import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDoctorsHomeSlice } from '../Redux/DoctorHomeSlice';

const DoctorSlide = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDoctorsHomeSlice())
    }, [dispatch])

    const doctrosApiSlice = useSelector(state => state.homeDocSlice.data)

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 mt-4 mb-2'>
                    <h2> Həkimlər </h2>
                </div>
                {doctrosApiSlice?.map((doctors) => (
                    <div className='col-md-3 ' data-aos="zoom-in" data-aos-duration="1000" key={doctors?.id} >
                        <div className='card mb-3' >
                            <div className="row ">
                                <div className="col-md-12">
                                    <Link to={`/doctorsInfo/${doctors?.id}`} >
                                        <img
                                            src={doctors?.image}
                                            alt="Trendy Pants and Shoes"
                                            className="doctors-img"
                                        />
                                    </Link>
                                </div>
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h5 className="card-title"> {doctors?.name} </h5>
                                        <p className="card-text">
                                            {doctors?.speciality}
                                        </p>
                                        <p className="card-text">
                                            <Link to="/reservation">
                                                <button className=" btn btn sumary">
                                                    Qəbula yazılmaq
                                                </button>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}



            </div>
        </div>
    );
};

export default DoctorSlide;