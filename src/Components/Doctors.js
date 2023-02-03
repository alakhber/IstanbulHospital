import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDoctors } from '../Redux/DoctorsSliece';

const Doctors = (props) => {


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDoctors());
    }, [dispatch])

    const { data } = useSelector(state => state.data)
    console.log("Doctorsapi ", data)
    return (
        <div className='container' >

            <div className='row'>
                <div className='col-md-12 mt-4 mb-2'>
                    <h2> Həkimlər </h2>
                </div>

                {data.length > 0
                    ?
                    data?.map((doctor) => (

                        <div className='col-md-3 ' data-aos="fade-right" data-aos-duration="1000" key={doctor.id} >

                            <div className="card mb-3"   >
                                <div className="row ">
                                    <div className="col-md-12">
                                        <Link to={`/doctorsInfo/${doctor.id}`}>
                                            <img src={doctor.image} alt="" className="doctors-img" />
                                        </Link>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="card-body">
                                            <h5 className="card-title"> {doctor.name} </h5>
                                            <p className="card-text">
                                                {doctor.speciality}
                                            </p>
                                            {/* <p className="card-text">
                                            <Link to="/Qebula_yazilmaq">
                                                <button className=" btn btn-sumary text-muted">
                                                    Qebula yazilmaq
                                                </button>
                                            </Link>
                                        </p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <p> Həkimlər yoxdur</p>
                }
            </div>
        </div>
    );
};

export default Doctors;