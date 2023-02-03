import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeparSlice } from '../Redux/DepartamentSlice';
import "./DepartamentsInfo.css"


const Departaments = (props) => {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDeparSlice(id))
    }, [dispatch, id])

    const departament = useSelector(state => state?.depart?.data)
    // console.log(" DepartamnetsINfo: ", departament)

    return (
        <div className='container mt-3'>
            <div className='col-md-12'>
                <div className='row'>
                    {departament?.data?.length > 0
                        ? departament?.data?.map((dep) => (

                            <div className='col-md-3 mt-4' key={dep.id}>
                                <Link to={`/departamentsInfo/${dep.id}`} >
                                    <div className="card " data-aos="fade-right" data-aos-duration="1000" key={dep.id}
                                    >
                                        <img src={dep?.image} className="departmentImg" alt="" />
                                        <div className="card-body">
                                            <h4> {dep?.name} </h4>
                                            <p className="card-text"> {dep?.content} </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                        :
                        <p>Bölmələrimiz yoxdur</p>
                    }




                </div>
            </div>
        </div>
    );
};

export default Departaments;