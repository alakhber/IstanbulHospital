import { configureStore } from "@reduxjs/toolkit";
import AboutSlice from "../Redux/AboutSlice";
import BlogsHomeSlice from "../Redux/BlogsHomeSlice";
import CompaignSlice from "../Redux/CompaignSlice";
import ContactSlice from "../Redux/ContactSlice";
import DeparSlice from "../Redux/DepartamentSlice";
import DoctorHomeSlice from "../Redux/DoctorHomeSlice";
import DoctorsSilece from "../Redux/DoctorsSliece";
import navSlice from "../Redux/NavSlice";
import ReserSliece from "../Redux/ReserSliece";
import SearchSlice from "../Redux/SearchSlice";
import CoruselsSlice from "../Redux/SliderSlice";


export default configureStore({
    reducer: {
        data: DoctorsSilece,
        coruselSlice: CoruselsSlice,
        depart: DeparSlice,
        homeDocSlice: DoctorHomeSlice,
        BlogSlice: BlogsHomeSlice,
        compaignSlice: CompaignSlice,
        navSlices: navSlice,
        aboutSlices: AboutSlice,
        contactSlice: ContactSlice,
        searchSlices: SearchSlice,
        reservSliece: ReserSliece
    },

});