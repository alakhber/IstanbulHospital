import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBlogSlice } from '../Redux/BlogsHomeSlice';
import "./Blocks.css";
const Article = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBlogSlice(id))
    }, [dispatch, id])

    const blogInfo = useSelector(state => state?.BlogSlice?.data)
    // const compaigns = useSelector(state => state.compaignSlice)
    console.log("bloqInfo", blogInfo)
    return (
        <div className='container' >
            <div className='row'>
                <div className='col-md-12 mt-4'  >
                    <div className="card articles " data-aos="fade-up" data-aos-duration="1000"
                        data-aos-anchor-placement="top-center">
                        <img src={blogInfo?.image} className="blogImg" alt="" />
                        <div className="card-body">
                            <h4>  {blogInfo?.name} </h4>
                            <div className="content card-text" dangerouslySetInnerHTML={{ __html: blogInfo?.content }}></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;