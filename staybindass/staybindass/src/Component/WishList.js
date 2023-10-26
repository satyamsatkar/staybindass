import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import axios from 'axios';
import Header from './Header';
import EmptyCart from './EmptyCart';

const WishList = () => {
  const [getwish, setwish] = useState({});

  const data = {
    user_id: localStorage.getItem('userId'),
  };
  async function fetchJson() {
    axios
      .post('http://localhost:8081/wish_get', data)
      .then((res) => {
        setwish(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {

    fetchJson();
  }, []); 


  const onhandleDelete = (prop) => {
    const data1 = {
      property_id: prop,
      user_id: localStorage.getItem('userId'),
    };

    axios
      .post('http://localhost:8081/wish_delete', data1)
      .then((res) => {
        console.log(res);
       
      })
      .catch((err) => {
        console.log(err);
      });
      fetchJson();
  };

  return getwish?.data?.length === 0 ? (<>
<EmptyCart/>
</>
  ) :(
    <>
    <Header/>
      <div>
        <div className='mt80 main-wish'>
          <div className='row justify-between text-center'>
            <p className=' wish-count col-6'>Item</p>
            <p className='col-6'>Clear All</p>
          </div>
        </div>
        {getwish?.data?.map((item , index) => (
          <div className='card' key={index}>
            <div className='info-part row'>
              <div className='img-fit col-6'>
                <img src={'https://staybindass.com/upload/property_thumbnail/' + item?.uploadimage} alt='' />
              </div>
              <div className='col-6'>
                <h4>{item?.title} </h4>
                <p className='dest-text'>{item?.city}</p>
                <p className='dest-text'>
                  Upto {item?.minguest} Guest | {item?.room_type} | {item?.pool}
                </p>
                <p className='dest-text'>
                  <b>
                    <span className='fs-5'>{item?.title}</span> /night
                  </b>
                </p>
                <p className='extra-text'>(exc. taxes & charges)</p>
              </div>
              <i className='bi bi-trash remove-item' onClick={() => onhandleDelete(item.property_id)}></i>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default WishList;
