import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InnerHeader from './InnerHeader';


const fullnameuser = localStorage.getItem('fullname');
const mobile = localStorage.getItem('mobile');
const email = localStorage.getItem('email');
const ManageProfile = () => {



  const [values, setValues] = useState({
    fullname: '',
    id: localStorage.getItem('userId'),
    mobile: '',
    email: '',
    gender: '',
    address: '',
    describeYou: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // localStorage.setItem("user",JSON.stringify(values));

    axios
      .post('http://localhost:8081/awt_registeruser_update', values)
      .then((res) => {
        navigate('/myprofile');
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };

  return (
    <>
    <InnerHeader/>
       <div className='property-list-main mt80 mb80'>
      <div className='property-list-form m-auto p-4 container'>
        <h2>
          <b>My Profile</b>
        </h2>

        <form action='POST' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='fullname' className='form-label'>
              Full Name*
            </label>
            <input type='text' className='form-control' id='fullname' onChange={handleChange} value={fullnameuser} name='fullname' />
          </div>

          <div className='mb-3'>
            <label htmlFor='mob1' className='form-label'>
              Mobile
            </label>
            <input type='number' className='form-control' id='mob1' value={mobile} onChange={handleChange} name='mobile' />
          </div>

          <div className='mb-3'>
            <label htmlFor='email1' className='form-label'>
              Email
            </label>
            <input type='email' className='form-control' id='email1' value={email} onChange={handleChange} name='email' readOnly />
          </div>

          <div className='mb-3'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              I Am
            </label>
            <select className='form-select' aria-label='Default select example' onChange={handleChange} name='gender'>
              <option defaultValue>Male</option>
              <option value='1'>Female</option>
              <option value='2'>Other</option>
            </select>
          </div>

          <div className='mb-3'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Where You Live
            </label>
            <input type='text' className='form-control' id='exampleInputPassword1' placeholder='e.g Mumbai, Delhi' onChange={handleChange} name='address' />
          </div>

          <div className='form mb-3'>
            <label htmlFor='' className=''>
              Describe Yourself
            </label>
            <textarea className='form-control' id='' style={{ height: '100px' }} placeholder='I am Albert, and i like to meet people and and learn about various cultures. ' onChange={handleChange} name='describeYou'></textarea>
          </div>

          <div className=''>
            <button type='submit' className='btn btn-primary w-100'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
 
  );
};

export default ManageProfile;
