import axios from 'axios';
import React, { useState } from 'react';
import md5 from 'js-md5';
import { useNavigate } from 'react-router-dom';
import InnerHeader from './InnerHeader';

const ChangePass = () => {
  const [values, setValues] = useState({
    currentPassword: '',
    password: '',
    id: localStorage.getItem('userId'),
  });
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const hashcurrentPassword = md5(values.currentPassword);
    const hashPassword = md5(values.password);

    const data = {
      currentPassword: hashcurrentPassword,
      password: hashPassword,
      id: localStorage.getItem('userId'),
    };


    axios.post('http://localhost:8081/change_pass', data)
      .then((res) => {
        Navigate('/changepass');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
    <InnerHeader/>
        <div className='mt90 px-3 login'>
      <h2 className='py-3'>Change Password ?</h2>

      <form name='form' id='form' method='POST' onSubmit={handleSubmit}>
        <div className='row'>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Current Password
            </label>
            <input type='password' className='form-control' id='currentpass' value={values.currentPassword} onChange={handleChange} name='currentPassword' />
            <span id=''></span>
          </div>

          <div className='mb-3 col-6'>
            <label htmlFor='email1' className='form-label'>
              New Password
            </label>
            <input type='password' className='form-control' id='password' value={values.password} onChange={handleChange} name='password' />
          </div>

          <div className='mb-3 col-6 '>
            <label htmlFor='email1' className='form-label'>
              Confirm New Password
            </label>
            <input type='password' className='form-control' id='confpass' />
          </div>

          <button type='submit' className='btn w-100 submit-btn' name='submit' id='submit'>
            submit
          </button>
        </div>
      </form>
    </div>
    </>

  );
};

export default ChangePass;
