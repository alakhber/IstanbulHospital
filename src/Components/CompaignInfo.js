import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCompaignInfoSLice } from '../Redux/CompaignSlice';
// import { fetchBlogSlice } from '../Redux/BlogsHomeSlice';


const CompaignInfo = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCompaignInfoSLice(id))
    }, [dispatch, id])

    const blogInfo = useSelector(state => state?.compaignSlice?.data)

    console.log("------", blogInfo)

    return (
        <div className='container' >
            <div className='row'>
                <div className='col-md-12 mt-4'  >
                    <div className="card articles " key={blogInfo?.id} data-aos="fade-up" data-aos-duration="1000"
                        data-aos-anchor-placement="top-center">
                        <img src={blogInfo?.image} className="" alt="" />
                        <div className="card-body">
                            <h4>  {blogInfo?.name} </h4>
                            {blogInfo?.slug}

                            <div className="content card-text" dangerouslySetInnerHTML={{ __html: blogInfo?.content }}></div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default CompaignInfo;