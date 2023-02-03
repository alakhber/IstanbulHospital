import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchBlogsHomeSlice } from '../Redux/BlogsHomeSlice';
import "./Blocks.css";

const Blocks = (props) => {
    const { id } = useParams
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBlogsHomeSlice(id))
    }, [dispatch, id])

    const BloksApi = useSelector(state => state?.BlogSlice?.data)
    console.log("BlogAPI", BloksApi)
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className="col-md-12">
                    <h2 > Məqalələr</h2>
                </div>
                {BloksApi?.length > 0
                    ?
                    BloksApi?.map((blog) => (
                        <div className='col-md-4 mt-4 Block' key={blog?.id}>
                            <Link to={`/block/${blog?.id}`} >
                                <div className="card " data-aos="fade-up" data-aos-duration="1000"
                                    data-aos-anchor-placement="top-center">
                                    <img src={blog?.image} className="blogImg" alt="" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            {blog?.title}
                                        </p>
                                    </div>

                                </div>
                            </Link>
                        </div>
                    ))
                    :
                    <p> Məqalələr yoxdur</p>

                }



            </div>
        </div>
    );
};

export default Blocks;