import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Headers.css';
import Logo from "../img/Hekimler/LOGO.png"
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Search from './Search';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNavDepartamentsSlice } from '../Redux/NavSlice';
import { fecthContactSlice } from '../Redux/ContactSlice';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = (props) => {

  const [activestate, setActiveState] = useState(false);

  const handleClick = () => {
    setActiveState(activeState => !activestate);
  }

  let active = activestate ? null : 'Activeon';

  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNavDepartamentsSlice(id))
  }, [dispatch, id])

  const departaments = useSelector(state => state?.navSlices?.data)

  useEffect(() => {
    dispatch(fecthContactSlice())
  }, [dispatch])
  const contact = useSelector(state => state?.contactSlice?.data?.data?.[2]?.details)




  return (
    <div className='Header' data-aos="fade-down" data-aos-duration="1000">

      <nav className="navbar navbar-expand-lg navbar-light">

        <div className="container">
          <Link to='/' className="navbar-brand" >
            <img src={Logo} className="card-img-top float-right Logo" alt="Sunset Over the Sea" />
            <div className='col-sm-12 hospitalName'>
              <h1 className=''>İstanbul Hospital</h1>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse col-md-7" id="navbarNavAltMarkup">
            {active
              ? <div className={active} >
                <ul className='navbar-nav mx-auto mr-3'>
                  <li className='nav-item' data-aos="fade-right" data-aos-duration="1000">
                    <Link to='/Haqqimizda' className='nav-link'> <span>  Haqqımızda </span> </Link>
                  </li>
                  <li className='nav-item nav-active ' data-aos="fade-right" data-aos-duration="1000">
                    <Link to='/departments' className='nav-link  '>  Bölmələrimiz </Link>
                    <div className='inner'>
                      <ul  >

                        {
                          departaments?.map((homeDepar) => (

                            <li className='innerComponents' key={homeDepar?.id}>
                              <Link to={`/departamentsInfo/${homeDepar?.id}`} className=' nav-link '  > {homeDepar.name} </Link>

                              <ul className="innerList">

                                {homeDepar?.childeran
                                  ?
                                  "melumat yoxdur"
                                  :
                                  homeDepar?.children.map((child) => (
                                    <li key={child?.id}>
                                      <Link to={`/departamentsInfo/${child?.id}`} className=' nav-link' >
                                        {child?.name}
                                      </Link>
                                    </li>
                                  ))

                                }
                              </ul>

                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </li>
                  <li className='nav-item' data-aos="fade-right" data-aos-duration="1000">
                    <Link to='/doctors' className='nav-link'> <span>  Həkimlərimiz </span>  </Link>
                  </li>
                  <li className='nav-item' data-aos="fade-right" data-aos-duration="1000">
                    <Link to='/blocks' className='nav-link'> <span>  Məqalələr </span> </Link>
                  </li>
                  <li className='nav-item' data-aos="fade-right" data-aos-duration="1000">
                    <Link to='/reservation' className='nav-link'> <span>  Qəbula yazılmaq </span> </Link>
                  </li>
                  <li className='nav-item' data-aos="fade-right" data-aos-duration="1000">
                    <Link to='/company' className='nav-link'> <span>  Kompaniya </span> </Link>
                  </li>
                  <li className='nav-item' data-aos="fade-right" data-aos-duration="1000">
                    <Link to='/Elaqe' className='nav-link'> <span>   Əlaqə </span> </Link>
                  </li>
                </ul>
              </div>
              : <div className=" w-100" >
                <div className=" ui transparent icon input searchInput" data-aos="fade-down" data-aos-duration="1000">
                  <Link to='/Search'  >
                    <form onSubmit={props.handleSubmit}>
                      <input type="text" placeholder="Axtar..." onChange={(e) => props.setSearch(e.target.value)} />
                      <i className="search icon"></i>
                    </form>
                  </Link>
                </div>
                {/* <Search setSearch={props.setSearch} handleSubmit={props.handleSubmit} /> */}
              </div>
            }
            {active
              ?
              <BsSearch onClick={handleClick} className="searchIcon" />
              :
              <AiOutlineClose onClick={handleClick} className="searchIcon" />
            }
          </div>

          <div className='col-md-3'>
            {
              contact?.map((con) => (
                <div className='sosials-icons' data-aos="fade-down" data-aos-duration="1000">
                  <a href={con.link} className='sosials-icons'>
                    <span dangerouslySetInnerHTML={{ __html: con?.icon }} >
                    </span>
                  </a>
                </div>
              ))
            }
            <div className='col-md-auto ' data-aos="fade-down" data-aos-duration="1000">
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;