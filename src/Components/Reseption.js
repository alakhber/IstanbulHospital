import React, { useEffect, useState } from 'react';
import './reseption.css';
import img from '../img/Hekimler/istanbulH.JPG';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReserDoctors } from '../Redux/ReserSliece';
import axios from 'axios';


const Reseption = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchReserDoctors());
  }, [dispatch])


  // const keys = ["id", "name", "days", "admisson_day", "hours"]
  const reserDocApi = useSelector(state => state.reservSliece?.data)
  // const docDate = (dD) => {
  //   return dD.filter((doctorDate) => keys.some(key => doctorDate[key] || []))
  // }
  console.log("reserDocApi ", reserDocApi)


  const [sregister, setRegister] = useState([])
  const [sdate, setDate] = useState([])
  const [admission, setAdmission] = useState([])
  const [shours, setHours] = useState([])
  console.log("sdate", typeof sdate)

  console.log("sregister", sregister)
  console.log("adadmission", admission)

  const createRegister = (e) => {
    e.preventDefault()
    const model = sregister
    axios.post("https://admin.istanbulhospital.az/api/reservation/reserved", model)
      .then(res => {
        console.log("res", res)
      })
    console.log("Create Register")
  }


  const handle = (e) => {
    setRegister({ ...sregister, [e.target.name]: e.target.value });
    setDate(parseInt(e.target.value));

    console.log('est', e.target.value)
  }
  const selectDoctor = (e) => {
    setDate(parseInt(e.target.value));
    setAdmission(reserDocApi?.map((doctor) => (
      doctor.days.filter((doctor) => doctor.doctor_id === sdate)
    )))
  }

  // console.log("admi", admission) 


  const selectDay = (e) => {
    setAdmission(parseInt(e.target.value));
    setHours(admission?.map((hour) => (
      hour.hours.filter((hour) => hour.admission_id === admission)
    )))
    console.log("admi", admission)
  }
  const selectHour = (e) => {
    alert('demo')
  }

  // const est = (e) => {

  //   setDate(parseInt(e.target.value));
  //     setAdmission(reserDocApi?.map((selectDoctor) => (
  //       selectDoctor.days.filter((day) => day.doctor_id === sdate)
  //     )))
  //   console.log("admisson", admission)
  // }
  // const test = (e) => {
  //   setDate(parseInt(e.target.value));
  // }
  // }
  // reserDocApi?.length > 0 && reserDocApi?.map((doctorName) => (
  //   doctorName.days.filter((day) => day.admission_id == sdate).map((item) => (
  //     item.hours.filter((d) => d.admission_id == sdate).map((s) => (

  //       console.log('days', s)
  //     ))
  //   ))
  // ))

  return (
    <div className='container mt-4 reseption'>
      <div className='row justify-content-between'>

        <div className='col-lg-6'>
          <div className="col-md-12 justify-content-center" data-aos="fade-up" data-aos-duration="1000">

            <img
              src={img}
              alt=""
              className=""
            />

          </div>
        </div>
        <div className='col-lg-5 mt-4 justify-content-center' data-aos="fade-up" data-aos-duration="1000">
          <form action="" onSubmit={createRegister} >
            <label for="fname">Ad Soyad</label>
            <input type="text" id="fname" name="fullname" placeholder="Ad Soyad.." value={sregister.fullname} onChange={handle} />

            <label for="lname">Telefon</label>
            <input type="text" id="lname" name="phone" placeholder="Telefon.." value={sregister.phone} onChange={handle} />

            <label for="fname">Mail</label>
            <input type="text" id="" name="email" placeholder="Mail.." value={sregister.email} onChange={handle} />


            <label for=''>Həkim seçin</label>
            <select key='' id='' name="doctor_id" onChange={selectDoctor}   >
              <option  > Həkim adı seçin</option>
              {
                reserDocApi?.map((doctorName) => (
                  <option key={doctorName?.id} value={doctorName?.id}  > {doctorName?.name}</option>
                ))
              }
            </select>

            <div className=''>
              <div className='col-md-4'>

                <label for=""  >Tarix Seçin</label>
                <select key='' id='' name="doctor_id" onChange={selectDay}   >
                  <option  > Tarix Seçin</option>
                  {

                    admission?.length > 0 && admission?.map((Day) => (
                      <option key={Day?.id} value={Day?.id}  > {Day?.admission_day}</option>
                    ))
                  }

                </select>


              </div>
              <div className='col-md-4'>
                <label for=""  >Saat Seçin</label>
                <select key='' id='' name="doctor_id" onChange={selectHour}   >
                  <option  > Saat Seçin</option>
                  {

                    reserDocApi?.map((doctorHours) => (
                      doctorHours.days.filter((docTime) => docTime.id === sdate).map((time) => (
                        time.hours.filter((docTime) => docTime.admission_id === sdate).map((hour) => (
                          // console.log("hou", hou)
                          <option key={hour?.id} value={hour?.id}  > {hour?.admission_hour}</option>
                        ))
                      ))
                    ))


                  }
                </select>
              </div>

            </div>


            <div className='col-md-3 mt-3'>
              <Stack spacing={2} direction="row">
                <Button variant="contained" type='Sumbit'>Göndər</Button>
              </Stack>
            </div>
          </form>

        </div>
      </div >
    </div >
  );
};

export default Reseption;