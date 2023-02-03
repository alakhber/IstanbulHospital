import React from 'react';
import './Content.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAboutSlice } from '../Redux/AboutSlice';

const About = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAboutSlice())
    }, [dispatch])

    const About = useSelector(state => state?.aboutSlices?.data)
    console.log("About", About)
    return (
        <div className=' container mt-4 mb-4'>
            <div className='row'>
                <div className="content card-text" data-aos="zoom-in" data-aos-duration="1000" dangerouslySetInnerHTML={{ __html: About?.data?.content }}></div>
                {/* <div className='col-md-5' >
                    <p>
                        Sağlamlıq xoşbəxliyin mənbəyidir. Bizim şüarımız isə “ Sağalacağınız məkan,
                        İstanbul Hospital”-dır!

                    </p>
                    <p>
                        İstanbul Hospital ölkəmizdə özəl tibb müəssisələrinin çox az sayda fəaliyyətə
                        başladığı bir dövrdə,yəni 13 sentyabr 2013-cü ildə şərəfli fəaliyyətinə başlamışdır.
                        Bu illər ərzində özəl tibb müəssisələrində müxtəlif çətinliklərin olmasına baxmayaraq
                        İstanbul Hospital öz yaradıcılarının səriştələri, ümumdünya təcrübələrindən faydalanmaları
                        səbəbindən böyük və fərqli bir tibb məkanının əsası kimi yaddaşlarda silinməz izlər buraxdı.
                        Bununla da hospital ölkəmizin özəl səhiyyə sisteminin ilk dayaq nöqtələrindən birinə çevrildi.

                    </p>
                    <p>
                        İstanbul Hospital hazırda Azərbaycan Respublikasının
                        İqtisadiyyat Nazirliyi tərəfindən verilmiş 28 iyun 2016-ci il tarixli İN/L-1520/2016 qeydiyyat
                        nömrəli lisenziya ilə fəaliyyət göstərir.

                    </p>
                    <p>
                        Hospitalın fəaliyyəti çoxsahəlidir. Poliklinika xidmətindən tutmuş əməliyyat bloku,
                        reanimasiya-anesteziologiya şöbələrinə kimi fəaliyyət göstərir. Şöbələrin sayı bügün də
                        artmaqdadır. Müxtəlif ideyalar üzərində çalışmaların nəticəsində daha fərqli xidmətlər
                        təşkil olunmuşdur. Hospitalın pasientlər üçün daha önəmli, daha sərfəli olmasının bir
                        səbəbi də 	onun Azadlıq Metrostansiyasının yaxınlığında yerləşməsidir. Bundan əlavə
                        stasionar xəstələrin, eyni zamanda müayinə və müalicə alan digər pasientlərin dincəlmələri
                        üçün müvafiq şərait yaradılmışdır.

                    </p>
                </div>
                <div className='col-md-7 ' data-aos="zoom-in" data-aos-duration="1000">
                    <div className='content-divider'>

                        <div className='divider-about'></div>
                        <div className='content-img'>
                            <img src={doctor} className=" " alt="" />
                        </div>
                    </div>
                </div>

                <div className='col-md-12' data-aos="zoom-in" data-aos-duration="1000">


                    <p>
                        Poliklinika şöbəsi kardiologiya, qastroenterologiya, ginekologiya, travmatologiya, endokrinologiya, urologiya,
                        otorinolarinqologiya, nevrologiya, terapiya, oftalmologiya, pediatriya, dermatologiya və digər müxtəlif qollara ayrılır.
                        Peşəkar həkimlər tərəfindən hər sahə üzrə ambulator qəbullar həyata keçirilir.
                    </p>
                    <p>
                        Poliklinika şöbəsi kardiologiya, qastroenterologiya, nevropatologiya, fizioterapiya,
                        ginekologiya, endokrinologiya, otorinolarinqologiya, pediatriya, dermotologiya,
                        stomatologiya və digər müxtəlif tibbi qollara ayrılır. Burada peşəkar həkimlər tərəfindən
                        hər sahə üzrə ambulator qəbullar həyata keçirilir.

                    </p>
                    <p>
                        Şüa diaqnostika şöbəsi hospitalın ən mühüm strukturlarından biridir.
                        Şöbə başlıca olaraq  rentgenoloji , ultrasəs müayinəsi xidmətlərini əhatə edir.
                        Bu şöbədə eyni zamanda rentgenoqrafiya və ultrasəs müayinələrinin aparılması üçün
                        ən son model avadanlıqlar vardır.

                    </p>
                    <p>
                        Hamımız bilirik ki, laboratoriya hər bir tibb müəssisəsinin əsas sütunlarından biridir.
                        İstanbul Hospitalın laboratoriyası nizamlı iş sistemi, operativliyi ilə seçilir.Laboratoriyada
                        ümumi kliniki, hematoloji, biokimyəvi, immunoloji, mikrobioloji, sitoloji, tibbi-genetik
                        müayinələr aparılır. Tam avtomat avadanlıqların olması, keyfiyyətli reaktiv və test sistemlərin
                        istifadəsi analizlərin dəqiqliklə həyata keçirilməsinə imkan yaradır.

                    </p>
                    <p>
                        Əməliyyat bloku anesteziologiya-reanimasiya intensiv terapiya və stasionar şöbələri vəhdət
                        halında və saat mexanizmi kimi dəqiqliklə təşkil olunub. Sistemli şəkildə yaradılmış bu şöbələr
                        müasir standartlara uyğun olan hər cür tibbi avadanlıqlarla təchiz olunmuşdur. Hospitalın
                        cərrahiyyə xidməti başlıca olaraq ümumi cərrahiyyə, otorinolarinqologiya, ginekologiya və digər
                        sahələr üzrə həyata keçilir.

                    </p>
                    <p>
                        Fərəhlə deyə bilərik ki, İstanbul Hospital peşəkar və təcrübəli həkimlərin çalışdığı bir məkandır.
                        Həkim mütəxəssizlərin böyük əksəriyyəti Türkiyə, Almaniyada iş təcrübəsinə malik, dünyanın bir
                        sıra ölkələrində ixtisaslaşmış və təkmilləşmiş bu gün üçün ən vacib tibbi kurslar keçmiş
                        kadrlardır. Onların arasında alimlər, professorlar, tibb üzrə fəlsəfə doktorları vardır.
                        Peşəkar orta tibbi heyət tibbi xidmətlərin daha keyfiyyətlə və dəqiqliklə həyata keçirilməsində
                        böyük rol oynayır.

                    </p>
                </div> */}


            </div>
        </div>
    );
};

export default About;