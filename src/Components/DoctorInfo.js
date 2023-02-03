import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from "react-router-dom";
import './DoctorInfo.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdoctorDetail } from '../Redux/DoctorsSliece';



const DoctorInfo = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchdoctorDetail(id))
    }, [dispatch, id])
    const { data } = useSelector(state => state.data)
    console.log("doctors data", data)





    return (
        <div className='container mt-4' key={data?.id}>
            <div className='row'>

                <div className='row'>

                    <div className='col-md-4'>

                        <div className='DoctorInfoImg'>
                            <img
                                src={data?.image}
                                alt=""
                                className=""
                            />

                        </div>
                    </div>
                    <div className='col-md-8 '>
                        <div className='DoctorInfoText '>
                            <h3> {data?.name} </h3>
                            <span>  {data.speciality}</span>
                            <p className='p-2'>
                                <span className="m-3">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                </span>
                                <b>
                                    {data?.quote}
                                </b>
                                <span className="m-3">
                                    <FontAwesomeIcon icon={faQuoteRight} />
                                </span>
                            </p>
                            <p>
                                <b>
                                    Fəaliyyət sahəsi: {data?.fields}
                                </b>
                                <br></br>
                            </p>
                            <Link to={`/reservation/${data?.id}`} >
                                <button className='btn btn sumary' > Qebula yailmaq </button>
                            </Link>
                        </div>
                    </div>


                    <div className='col-md-6 mt-3'>
                        <div >
                            <h4>
                                Təhsil və kurslar


                            </h4>

                            <ul>
                                {
                                    data?.educations?.map((el) => (
                                        <li>
                                            <span>{el?.period}</span>

                                            <ul>
                                                <li>
                                                    <span>
                                                        <b>
                                                            {
                                                                data?.educations?.map((ed) => (
                                                                    <span key={ed?.id}>{ed?.education}</span>
                                                                ))
                                                            }
                                                        </b>
                                                    </span>
                                                </li>
                                            </ul>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-6 '>
                        <div>
                            <h4>
                                Təcrübə
                            </h4>
                            <ul>


                                {
                                    data?.experiencies?.map((ex) => (
                                        <li>

                                            <span>{ex?.experience}</span>
                                        </li>
                                    ))
                                }


                            </ul>
                        </div>
                    </div>
                    <div className='col-md-12 '>
                        <div>
                            <h4>
                                Serifikat
                            </h4>
                            <div className='col-md-12 certificate'>
                                <div className='row' >
                                    {
                                        data?.certificates?.map((ser) => (
                                            <div className='col-md-2 ' key={ser?.id}>
                                                <img src={ser?.certificate} className='' alt='' />

                                            </div>

                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div>
            </div >
        </div >
    );
};

export default DoctorInfo;