import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InnerHeader from './InnerHeader';

const ListProperty = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    mobile: '',
    property_type: '',
    location: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8081/property_enquiry', values)
      .then((res) => {
        navigate('/listproperty');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <InnerHeader/>
      <div className='property-list-main mt80 mb80'>
        <div className='property-list-form m-auto p-4 container'>
          <h2>Partner as a Homeowner</h2>
          <p>StayBindass specializes in creating and curating luxury holiday homes all over</p>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className='mb-3'>
                <label htmlFor='fullname' className='form-label'>
                  Full Name
                </label>
                <input type='text' className='form-control' id='fullname' aria-describedby='emailHelp' onChange={handleChange} name='name' />
              </div>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input type='email' className='form-control' id='email' onChange={handleChange} name='email' />
              </div>
              <div className='mb-3'>
                <label htmlFor='mobile' className='form-label'>
                  Mobile
                </label>
                <input type='number' className='form-control' id='mobile' onChange={handleChange} name='mobile' />
              </div>
              <div className='mb-3'>
                <label htmlFor='type' className='form-label'>
                  Property type
                </label>
                <select className='form-select' aria-label='Default select example' id='type' onChange={handleChange} name='property_type'>
                  <option defaultValue>Open this select menu</option>
                  <option value='one'>One</option>
                  <option value='two'>Two</option>
                  <option value='three'>Three</option>
                </select>
              </div>
              <div className='mb-3'>
                <label htmlFor='location' className='form-label'>
                  Loacation
                </label>
                <input type='text' className='form-control' onChange={handleChange} id='location' name='location' />
              </div>

              <div className='form mb-3'>
                <label htmlFor='' className=''>
                  Your Messages
                </label>
                <textarea className='form-control' id='text' onChange={handleChange} name='message' style={{ height: '100px' }}></textarea>
              </div>

              <div className=''>
                <button type='submit' className='btn btn-primary w-100'>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ListProperty;
