import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCompaignSlice } from '../Redux/CompaignSlice';


const Compaign = (props) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCompaignSlice())
    }, [dispatch])
    const compaigns = useSelector(state => state?.compaignSlice?.data)
    console.log("Compaigns", compaigns?.id)

    return (

        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-12 '>
                    <h2 > Kompaniyalar</h2>
                </div>

                {compaigns?.data?.length > 0
                    ?
                    compaigns.data?.map((compaign) => (
                        compaign.length > 0
                            ?
                            <div className='col-md-12'>
                                <p> Netice tapiladi</p>
                            </div>
                            :

                            <div className='col-md-4 mt-4' key={compaign?.id} >
                                <Link to={`/Compaign/${compaign?.id}`} className=''>
                                    <div className="card " data-aos="fade-up" data-aos-duration="1000"
                                        data-aos-anchor-placement="top-center">
                                        <img src={compaign?.image} className="card-img-top float-right" alt="Sunset Over the Sea" />
                                        <div className="card-body">
                                            <p className="card-text">{compaign?.title} Yeni kompaniyalar ilə xidmətinizdə...</p>
                                        </div>

                                    </div>
                                </Link>
                            </div>
                    ))
                    :
                    <p> Kompaniyalar yoxdur</p>
                }


            </div>
        </div>

    );
};

export default Compaign;
