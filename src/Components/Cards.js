import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchthreeDeparSlice } from '../Redux/DepartamentSlice';
const Cards = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchthreeDeparSlice())
    }, [dispatch])

    const departaments = useSelector(state => state.depart.data)
    return (
        <div className='container mt-3 mb-3'>
            <div className='row'>
                <div className='col-md-12 '>
                    <h2 >
                        Bölmələrimiz
                    </h2>
                </div>
                {
                    departaments?.data?.map((depar) => (
                        <div className='col-md-4 mt-4 ' data-aos="zoom-in-right" data-aos-duration="1000" key={depar?.id}>
                            <div className="card  ">
                                <Link to={`/departamentsInfo/${depar?.id}`} >
                                    <img src={depar.image} className="card-img-top float-right cardImg" alt="Sunset Over the Sea" />
                                </Link>
                                <div className="card-body">
                                    <h3> {depar?.name} </h3>
                                    <p className="card-text">{depar?.content} </p>
                                </div>
                            </div>
                        </div>
                    ))

                }

            </div>
        </div>
    );
};

export default Cards;