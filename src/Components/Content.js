import React from 'react';
import './Content.css';
import doctor from '../img/1/3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor, faVialCircleCheck, faHospital, faHeartPulse } from '@fortawesome/free-solid-svg-icons'
const Content = () => {

    return (
        <div className='container mt-5 mb-4 '>
            <div className='row justify-content-between'>


                <div className='col-md-12' >
                    <ul className='content-list'>
                        <li data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className=" medicalInfo"  >
                                <div className='medicalIcons'>

                                    <FontAwesomeIcon icon={faHeartPulse} size="lg" className='medical-icon' />
                                    <span>ETİBARLILIQ</span>
                                </div>

                                <p>Həmvətənlərimiz tibbimizə, avadanlığımıza, həkimlərimizə, klinikalarımıza,
                                    xidmət səviyyəmizə və təqdim olunan rahatlığa etibar edir.</p>
                            </div>
                        </li>
                        <li data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className="medicalInfo" >
                                <div className="medicalIcons">

                                    <FontAwesomeIcon icon={faHospital} size="lg" className='medical-icon' />
                                    <span>ƏN MÜASİR AVADANLIQ</span>
                                </div>
                                <p>Istanbul Hospital beynəlxalq protokollara uyğun olaraq yüksək səviyyəli diaqnostik tədqiqatların
                                    aparılmasına imkan verən mütəxəssis avadanlıqları ilə təchiz edilmişdir</p>
                            </div>
                        </li>
                        <li data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className="medicalInfo" >
                                <div className="medicalIcons">
                                    <FontAwesomeIcon icon={faVialCircleCheck} size="lg" className='medical-icon' />
                                    <span>DƏQİQ LABORATOR ANALİZ</span>
                                </div>
                                <p>Klinikamızda yalnız Avropada və Amerika, İsrail və Kanada kimi ölkələrdə istehsal olunan reaktivlər istifadə olunur. Bütün laboratoriya testləri bütün dünyada qəbul edilir.
                                    Avtomatlaşdırılmış laboratoriya avadanlığı insan amilini aradan qaldırır.</p>
                            </div>
                        </li>
                        <li data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className="medicalInfo" >
                                <div className="medicalIcons">
                                    <FontAwesomeIcon icon={faUserDoctor} size="lg" className='medical-icon' />
                                    <span>PEŞƏKAR HEYYƏT</span>
                                </div>
                                {/* <img src={Empolees} className=" " alt="" /> */}
                                <p>Tibb Mərkəzinin dəyərli sərmayəsi Avropada ixtisaslaşmış peşəkar həkimlərdir</p>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* <div className='col-md-7 ' data-aos="fade-up" data-aos-duration="1000">
                    <div className='content-divider '>

                        <div className='content-img '>
                            <img src={doctor} className=" " alt="" />

                        </div>
                        <div className='divider'></div>
                    </div>
                </div> */}



            </div>
        </div>
    );
};

export default Content;