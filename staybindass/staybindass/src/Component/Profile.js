import React, { useState } from 'react';
import avatar from '../img/avatars/4.png';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Profile = () => {
  const [log, setLog] = useState(true);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    localStorage.removeItem('mobile');
    localStorage.removeItem('fullname');

    navigate('/myprofile');
  };

  const username = localStorage.getItem('fullname');
  const isLocalStorageEmpty = Object.keys(localStorage).length === 0;

  return (
    <div>
      <Header />
      <div className='p-3 mt80 '>
        <div className='header text-center'>
          <div className='floting-info'>
            <a href='edit_profile.html' className='' style={{ display: 'block' }}>
              <div className='profile text-center'>
                <img src={avatar} alt='profile-img' />
              </div>
            </a>

            <div className='heading-text px-3'>
              <h5 className='fw-bold'>{username}</h5>
            </div>
            {log && isLocalStorageEmpty ? (
              <Link to='/loginpage'>
                <button className='btn btn-light'>Sign In</button>
              </Link>
            ) : null}
          </div>
        </div>

        <hr className='mx-2' />
        {isLocalStorageEmpty ? null : (
        <div className='list-group mb-3 fontSize mt-3'>
          
          <div>
            <Link to='/manageprofile' className='list-group-item list-group-item-action padd-20 '>
              <div className='row align-items-baseline'>
                <i className='fa-solid fa-user  col-2'></i>
                <p className='col-10'>Manage your Profile</p>
              </div>
            </Link>

            <Link to='/listproperty' className='list-group-item list-group-item-action padd-20'>
              <div className='row align-items-baseline'>
                <i className='fa-solid fa-list  col-2'></i>
                <p className='col-10'>List Your Property</p>
              </div>
            </Link>
            <Link to='/changepass' className='list-group-item list-group-item-action padd-20'>
              <div className='row align-items-baseline'>
                <i className='fa-solid fa-gear col-2'></i>
                <p className='col-10'>Change Password</p>
              </div>
            </Link>
          </div>


          <div className='text-center'>
          
              <button type='button' className='btn ' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>
                <i className='fa-solid fa-right-from-bracket '></i>Logout
              </button>
           

            <div
              className={'modal fade modal-dialog modal-dialog'}
              id='staticBackdrop'
              data-bs-backdrop='static'
              data-bs-keyboard='false'
              tabIndex='-1'
              aria-labelledby='staticBackdropLabel'
              aria-hidden='true'
            >
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h1 className='modal-title fs-5' id='staticBackdropLabel'>
                      Modal title
                    </h1>
                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                  </div>
                  <div className='modal-body'>Are you sure you want to log out?</div>
                  <div className='modal-footer'>
                    <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                      No
                    </button>
                    {
                      <button type='button' className='btn btn-primary' data-bs-dismiss='modal' onClick={handleLogout}>
                        yes
                      </button>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
