import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import './Articles.css';
import { fetchBlogsHomeSlice } from '../Redux/BlogsHomeSlice';
import { faL } from '@fortawesome/free-solid-svg-icons';


const Articles = () => {


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBlogsHomeSlice())
    }, [dispatch])

    const BlogSlice = useSelector(state => state?.BlogSlice?.data);
    return (
        <div className='container'>
            <div className='col-lg-12 mt-3 mb-3'>
                <h2> Məqalələr</h2>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerGroup={3}

                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="myArticles"
                data-aos="fade-up"
                data-aos-duration="1000"

            >

                {
                    BlogSlice?.map((BlogSlices) => (
                        <SwiperSlide key={BlogSlices?.id}>
                            <Link to={`block/${BlogSlices?.id}`} key={BlogSlices?.id}>
                                <div className='article-img'>
                                    <img src={BlogSlices?.image} alt="" className="img-fluid rounded-start" />
                                </div>
                                <div className='article'>
                                    <span> {BlogSlices?.title}</span>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))


                }
                {/* {
                    BlogSlice?.map((BlogSlices) => (

                        <SwiperSlide >
                            <Link to="" key={BlogSlices.id}>
                                <div className='article-img'>
                                    <img src={BlogSlices?.image} alt="" className="img-fluid rounded-start" />
                                </div>
                                <div className='article'>
                                    <span>{BlogSlices?.title}</span>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))
                } */}


            </Swiper>





        </div>
    );
};

export default Articles;