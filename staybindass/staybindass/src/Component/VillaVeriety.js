import React, { useState } from 'react';

import { Veriety } from './constant';
import { useEffect } from 'react';
// import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';



const VillaVeriety = () => {
  const [click, setClick] = useState('');
  const [villas, setvilla] = useState([]);

  const fetchJson = () => {
    fetch('https://staybindass.com/projson.php')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setvilla(data);
      });
  };
  useEffect(() => {
    fetchJson();
  }, []);





  return (
    <div className='tab-section '>
      <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
        {Veriety.map((item) => {
          return (
            <li className='nav-item text-center' role='presentation' key={item.id}>
              <button className={item.class} id={item.id} data-bs-toggle='pill' value={item.value} onClick={(e) => setClick(e.target.value)} data-bs-target={item.target} type='button' role='tab' aria-controls={item.controls} aria-selected='true'>
                {/* <input type='image' className='' src={item.img} alt='' style={{width:"50px"}} disabled/> */}
                <p style={{ width: '150px' }} onClick={(e) => setClick(e.target.value)}></p>
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>

      <div className='tab-content' id='pills-tabContent'>
        <div className='tab-pane fade show active row' id='pills-home' role='tabpanel' aria-labelledby='pills-Collection'>
          <div className='col-sm-12'>
            {villas.map((item) => {
              return (
                <Link to={`/hotelmenu/${item.id}`} key={item.id}>
                  <div className='item card my-3 overflow-hidden' >
                    <div className='img-fit'>
                      <i className='bi bi-heart-fill heartbtn' ></i>
                      <img src={'https://staybindass.com/upload/property_thumbnail/' + item?.image} alt='' />
                      <p className='night-label '>{item.nights}</p>
                    </div>

                    <div className='info-part'>
                      <h4>{item?.title} </h4>
                      <p className='dest-text'>{item?.city}</p>
                      <p className='dest-text'>
                        Upto {item?.minguest} Guest | {item?.room_type} | {item?.pool}
                      </p>
                      <p className='dest-text'>
                        <b>
                          <span className='fs-5'>₹0</span> /night
                        </b>
                      </p>
                      <p className='extra-text'>(exc. taxes & charges)</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className='tab-pane fade show active row' id='pills-Beachside' role='tabpanel' aria-labelledby='pills-Beachside'>
          <div className='col-sm-12'>
            {villas
              .filter((user) => (user.propcat).includes(click))
              .map((item) => {
                return (
                  <Link to={`/hotelmenu/${item.id}`}  key={item.id}>
                  <div className='item card my-3 overflow-hidden'>
                    <div className='img-fit'>
                      <i className='bi bi-heart-fill heartbtn' ></i>
                      <img src={'https://staybindass.com/upload/property_thumbnail/' + item?.image} alt='' />
                      <p className='night-label '>{item.nights}</p>
                    </div>

                    <div className='info-part'>
                      <h4>{item?.title} </h4>
                      <p className='dest-text'>{item?.city}</p>
                      <p className='dest-text'>
                        Upto {item?.minguest} Guest | {item?.room_type} | {item?.pool}
                      </p>
                      <p className='dest-text'>
                        <b>
                          <span className='fs-5'>₹0</span> /night
                        </b>
                      </p>
                      <p className='extra-text'>(exc. taxes & charges)</p>
                    </div>
                  </div>
                </Link>
                );
              })}
          </div>
        </div>
        <div className='tab-pane fade show active row' id='pills-Luxurious' role='tabpanel' aria-labelledby='pills-Luxurious'>
          <div className='col-sm-12'>
            {villas
              .filter((user) => (user.propcat).includes(click))
              .map((item) => {
                return (
                  <Link to={`/hotelmenu/${item.id}`} key={item.id}>
                  <div className='item card my-3 overflow-hidden' >
                    <div className='img-fit'>
                      <i className='bi bi-heart-fill heartbtn' ></i>
                      <img src={'https://staybindass.com/upload/property_thumbnail/' + item?.image} alt='' />
                      <p className='night-label '>{item.nights}</p>
                    </div>

                    <div className='info-part'>
                      <h4>{item?.title} </h4>
                      <p className='dest-text'>{item?.city}</p>
                      <p className='dest-text'>
                        Upto {item?.minguest} Guest | {item?.room_type} | {item?.pool}
                      </p>
                      <p className='dest-text'>
                        <b>
                          <span className='fs-5'>₹0</span> /night
                        </b>
                      </p>
                      <p className='extra-text'>(exc. taxes & charges)</p>
                    </div>
                  </div>
                </Link>
                );
              })}
          </div>
        </div>

        <div className='tab-pane fade show active row' id='pills-Riverside' role='tabpanel' aria-labelledby='pills-Riverside'>
          <div className='col-sm-12'>
            {villas
              .filter((user) => (user.propcat).includes(click))
              .map((item) => {
                return (
                  <Link to={`/hotelmenu/${item.id}`}  key={item.id}>
                  <div className='item card my-3 overflow-hidden'>
                    <div className='img-fit'>
                      <i className='bi bi-heart-fill heartbtn' ></i>
                      <img src={'https://staybindass.com/upload/property_thumbnail/' + item?.image} alt='' />
                      <p className='night-label '>{item.nights}</p>
                    </div>

                    <div className='info-part'>
                      <h4>{item?.title} </h4>
                      <p className='dest-text'>{item?.city}</p>
                      <p className='dest-text'>
                        Upto {item?.minguest} Guest | {item?.room_type} | {item?.pool}
                      </p>
                      <p className='dest-text'>
                        <b>
                          <span className='fs-5'>₹0</span> /night
                        </b>
                      </p>
                      <p className='extra-text'>(exc. taxes & charges)</p>
                    </div>
                  </div>
                </Link>
                );
              })}
          </div>
        </div>

        <div className='tab-pane fade show active row' id='pills-Natures' role='tabpanel' aria-labelledby='pills-Natures'>
          <div className='col-sm-12'>
            {villas
              .filter((user) => (user.propcat).includes(click))
              .map((item) => {
                return (
                  <Link to={`/hotelmenu/${item.id}`} key={item.id}>
                  <div className='item card my-3 overflow-hidden' >
                    <div className='img-fit'>
                      <i className='bi bi-heart-fill heartbtn' ></i>
                      <img src={'https://staybindass.com/upload/property_thumbnail/' + item?.image} alt='' />
                      <p className='night-label '>{item.nights}</p>
                    </div>

                    <div className='info-part'>
                      <h4>{item?.title} </h4>
                      <p className='dest-text'>{item?.city}</p>
                      <p className='dest-text'>
                        Upto {item?.minguest} Guest | {item?.room_type} | {item?.pool}
                      </p>
                      <p className='dest-text'>
                        <b>
                          <span className='fs-5'>₹0</span> /night
                        </b>
                      </p>
                      <p className='extra-text'>(exc. taxes & charges)</p>
                    </div>
                  </div>
                </Link>
                );
              })}
          </div>
        </div>

        <div className='tab-pane fade show active row' id='pills-Pet' role='tabpanel' aria-labelledby='pills-Pet'>
          <div className='col-sm-12'>
            {villas
              .filter((user) => (user.propcat).includes(click))
              .map((item) => {
                return (
                  <Link to={`/hotelmenu/${item.id}`} key={item.id}>
                  <div className='item card my-3 overflow-hidden' >
                    <div className='img-fit'>
                      <i className='bi bi-heart-fill heartbtn' ></i>
                      <img src={'https://staybindass.com/upload/property_thumbnail/' + item?.image} alt='' />
                      <p className='night-label '>{item.nights}</p>
                    </div>

                    <div className='info-part'>
                      <h4>{item?.title} </h4>
                      <p className='dest-text'>{item?.city}</p>
                      <p className='dest-text'>
                        Upto {item?.minguest} Guest | {item?.room_type} | {item?.pool}
                      </p>
                      <p className='dest-text'>
                        <b>
                          <span className='fs-5'>₹0</span> /night
                        </b>
                      </p>
                      <p className='extra-text'>(exc. taxes & charges)</p>
                    </div>
                  </div>
                </Link>
                );
              })}
          </div>
        </div>

        <div className='tab-pane fade show active row' id='pills-Riverside' role='tabpanel' aria-labelledby='pills-Riverside'>
          <div className='col-sm-12'>
            {villas
              .filter((user) => (user.propcat).includes(click))
              .map((item) => {
                return (
                  <Link to={`/hotelmenu/${item.id}`} key={item.id}>
                  <div className='item card my-3 overflow-hidden' >
                    <div className='img-fit'>
                      <i className='bi bi-heart-fill heartbtn' ></i>
                      <img src={'https://staybindass.com/upload/property_thumbnail/' + item?.image} alt='' />
                      <p className='night-label '>{item.nights}</p>
                    </div>

                    <div className='info-part'>
                      <h4>{item?.title} </h4>
                      <p className='dest-text'>{item?.city}</p>
                      <p className='dest-text'>
                        Upto {item?.minguest} Guest | {item?.room_type} | {item?.pool}
                      </p>
                      <p className='dest-text'>
                        <b>
                          <span className='fs-5'>₹0</span> /night
                        </b>
                      </p>
                      <p className='extra-text'>(exc. taxes & charges)</p>
                    </div>
                  </div>
                </Link>
                );
              })}
          </div>
        </div>
        <div className='tab-pane fade show active row' id='pills-Penthouse' role='tabpanel' aria-labelledby='pills-Penthouse'>
          <div className='col-sm-12'>
            {villas
              .filter((user) => (user.propcat).includes(click))
              .map((item) => {
                return (
                  <Link to={`/hotelmenu/${item.id}`} key={item.id}>
                  <div className='item card my-3 overflow-hidden' >
                    <div className='img-fit'>
                      <i className='bi bi-heart-fill heartbtn' ></i>
                      <img src={'https://staybindass.com/upload/property_thumbnail/' + item?.image} alt='' />
                      <p className='night-label '>{item.nights}</p>
                    </div>

                    <div className='info-part'>
                      <h4>{item?.title} </h4>
                      <p className='dest-text'>{item?.city}</p>
                      <p className='dest-text'>
                        Upto {item?.minguest} Guest | {item?.room_type} | {item?.pool}
                      </p>
                      <p className='dest-text'>
                        <b>
                          <span className='fs-5'>₹0</span> /night
                        </b>
                      </p>
                      <p className='extra-text'>(exc. taxes & charges)</p>
                    </div>
                  </div>
                </Link>
                );
              })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default VillaVeriety;
