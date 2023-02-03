import React from 'react';
import { Link } from 'react-router-dom';
import "./Search.css";

const Search = ({ searchData }) => {



    return (
        <div className='container mt-2 mb-2' data-aos="fade-right" data-aos-duration="1000">
            <dic className="row">
                {searchData?.length > 0
                    ?
                    searchData.map((sear) => (
                        <div className='col-md-3 ' data-aos="fade-right" data-aos-duration="1000" key={sear?.detail?.id} >

                            <div className="card mb-3"   >
                                <div className="row ">
                                    <div className="col-md-12">
                                        <Link to={`/${sear?.type}Info/${sear?.detail?.id}`}>
                                            <img src={sear?.detail?.image} alt="" className="doctors-img" />
                                        </Link>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="card-body">
                                            <h5 className="card-title"> {sear?.detail?.name} </h5>
                                            <p className="card-text">
                                                {sear?.detail?.speciality}

                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    null
                }
            </dic>
        </div>
    );
};

export default Search;