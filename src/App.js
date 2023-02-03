import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from "./Components/Header";
import Footter from "./Components/Footter";
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Departaments from './Components/Departaments';
import Doctors from './Components/Doctors';
import Blocks from './Components/Blocks';
import ContactsInfo from './Components/ContactsInfo';
import Article from './Components/Article';
import Reseption from './Components/Reseption';
import Compaign from './Components/Compaign';
import ContactsHeader from './Components/ContactsHeader';
import DepartamentsInfo from './Components/DepartamentsInfo';
import DoctorInfo from './Components/DoctorInfo';
import { useDispatch, useSelector } from 'react-redux';
import CompaignInfo from './Components/CompaignInfo';
import { fetchSearchSlice } from './Redux/SearchSlice';
import Search from './Components/Search';

function App() {

  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  console.log("setQuery", search)

  const searchSlice = useSelector(state => state.searchSlices.data) || [];
  console.log(searchSlice)
  const keys = ["name", " title", "slug", "content", "speciality", "quote", "fields"];

  const searchData = (data) => {
    // return data.filter((dataFil) => dataFil.toLowerCase().includes(keys))
    return data.filter((dataFil) => keys.some((key) => dataFil?.detail[key].includes(search) || []))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearchSlice(search));
    return <Link to="/Search"> </Link>
  }
  console.log("handle", handleSubmit)
  return (
    <div className="App ">



      <ContactsHeader />
      <Header setSearch={setSearch} handleSubmit={handleSubmit} />

      <Routes>

        <Route path='/' exact element={<Home />} />
        <Route path='/Haqqimizda' element={<About />} />
        <Route path='/departments' element={<Departaments />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/blocks' element={<Blocks />} />
        <Route path='/Elaqe' element={<ContactsInfo />} />
        <Route path="/reservation" element={<Reseption />} />
        <Route path="/reservation/:id" element={<Reseption />} />
        <Route path="/company" element={<Compaign />} />
        <Route path="/departamentsInfo/:id" element={<DepartamentsInfo />} />
        <Route path="/doctorsInfo/:id" element={<DoctorInfo />} />
        <Route path='/block/:id' element={< Article />} />
        <Route path='/Compaign/:id' element={< CompaignInfo />} />
        <Route path='/Search' element={<Search searchData={searchData(searchSlice)} />} />
      </Routes>

      <Footter />
    </div>
  );
}

export default App;
