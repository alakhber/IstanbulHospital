import React, { useEffect, useState } from "react";
import "./reseption.css";
import img from "../img/Hekimler/istanbulH.JPG";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchReserDoctors } from "../Redux/ReserSliece";
import axios from "axios";

const Reseption = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReserDoctors());
  }, [dispatch]);

  const reserDocApi = useSelector((state) => state.reservSliece?.data);
  // const docDate = (dD) => {
  //   return dD.filter((doctorDate) => keys.some(key => doctorDate[key] || []))
  // }

  const [sregister, setRegister] = useState([]);
  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([]);

  const createRegister = (e) => {
    e.preventDefault();
    const model = sregister;
    axios
      .post("https://admin.istanbulhospital.az/api/reservation/reserved", model)
      .then((res) => {
        console.log("res", res);
      });
    console.log("Create Register");
  };
  const selectDoctor = (e) => {
    setDays(reserDocApi.filter((adm) => adm.id === parseInt(e.target.value)));
  };
  const selectDay = (e) => {
    setHours(
      days?.map((day) =>
        day?.days?.filter((hours) => hours.id === parseInt(e.target.value))
      )
    );
    hours?.map((hour) =>
      hour?.map((h) => h?.hours?.map((hr) => console.log(hr)))
    );
  };

  return (
    <div className="container mt-4 reseption">
      <div className="row justify-content-between">
        <div className="col-lg-6">
          <div
            className="col-md-12 justify-content-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={img} alt="" className="" />
          </div>
        </div>
        <div
          className="col-lg-5 mt-4 justify-content-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <form action="" onSubmit={createRegister}>
            <label for="fname">Ad Soyad</label>
            <input
              type="text"
              id="fname"
              name="fullname"
              placeholder="Ad Soyad.."
              value={sregister.fullname}
            />

            <label for="lname">Telefon</label>
            <input
              type="text"
              id="lname"
              name="phone"
              placeholder="Telefon.."
              value={sregister.phone}
            />

            <label for="fname">Mail</label>
            <input
              type="text"
              id=""
              name="email"
              placeholder="Mail.."
              value={sregister.email}
            />

            <label for="">Həkim seçin</label>
            <select key="" id="" name="doctor" onChange={selectDoctor}>
              <option> Həkim adı seçin</option>
              {reserDocApi?.map((doctorName) => (
                <option key={doctorName?.id} value={doctorName?.id}>
                  {" "}
                  {doctorName?.name}
                </option>
              ))}
            </select>

            <div className="">
              <div className="col-md-4">
                <label for="">Tarix Seçin</label>
                <select key="" id="" name="day" onChange={selectDay}>
                  <option> Tarix Seçin</option>
                  {days?.length > 0 &&
                    days?.map((Day) =>
                      Day?.days?.map((s) => (
                        <option key={s?.id} value={s?.id}>
                          {" "}
                          {s?.admission_day}
                        </option>
                      ))
                    )}
                </select>
              </div>
              <div className="col-md-4">
                <label for="">Saat Seçin</label>
                <select key="" id="" name="hour_id">
                  <option> Saat Seçin</option>
                  {hours?.map((hour) =>
                    hour?.map((h) =>
                      h?.hours?.map((hr) => (
                        <option key={hr?.id} value={hr?.id}>
                          {" "}
                          {hr?.admission_hour}
                        </option>
                      ))
                    )
                  )}
                </select>
              </div>
            </div>

            <div className="col-md-3 mt-3">
              <Stack spacing={2} direction="row">
                <Button variant="contained" type="Sumbit">
                  Göndər
                </Button>
              </Stack>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reseption;
