import React from 'react';
import './DepartamentsInfo.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDeparInfoSlice } from '../Redux/DepartamentSlice';


const DepartamentsInfo = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDeparInfoSlice(id))
    }, [dispatch, id])

    const departament = useSelector(state => state?.depart?.data)
    // console.log('DeparInfos', departament)
    return (
        <div className='container mt-3 mb-3 DepartamentsInfo'>
            <div className='row'>


                <div className='col-md-12 mt-3 mb-3'>
                    <h2 data-aos="fade-right" data-aos-duration="1000"> {departament?.name} </h2>
                    <div data-aos="fade-right" data-aos-duration="1000" className="DepartamentsInfoImg content card-text" dangerouslySetInnerHTML={{ __html: departament?.content }}>
                    </div>
                </div>

                <div className='col-md-12' data-aos="fade-right" data-aos-duration="1000">

                </div>
            </div>
        </div >
    );
};

export default DepartamentsInfo;