import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, Autoplay } from "swiper";
import './Corusels.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchSlider, } from "../Redux/SliderSlice";
import { Link } from "react-router-dom";

const Corusels = () => {


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSlider())
  }, [dispatch]);

  const corusels = useSelector(state => state.coruselSlice.data);
  return (
    <div className="" data-aos="zoom-in" data-aos-duration="1500" >

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={false}
        pagination={{ clickable: true, }}
        autoplay={{ delay: 3500, disableOnInteraction: false, }}
        modules={[Mousewheel, Pagination, Autoplay]}
        className="mySwiper"
      >
        {
          corusels?.map((corusel) => (

            <SwiperSlide key={corusel.id} >
              <Link to="" >
                <img src={corusel.image} className="corusel-img" />
              </Link>
            </SwiperSlide>
          ))
        }
        {/* <SwiperSlide><img src={img1} className="corusel-img" /></SwiperSlide> */}
      </Swiper>

    </div>
  );
};

export default Corusels;