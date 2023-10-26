import React, { useState } from 'react';
import logo from '../img/logo.png';
import avatar from '../img/avatars/4.png'
import { Link } from 'react-router-dom';


function Header() {
  const [issidebar, setIssidebar] = useState(true);

  return (
    <>
      <div className={issidebar ? 'SideMenu' : 'SideMenu SideMenu2'} id='sidebar'>
        <div className='d-flex align-items-baseline py-3 px-2 iconpart'>
          <div className='img-cont col-3'>
            <img src={avatar} alt='' />
          </div>
          <h2 className='col-9 px-3'>Satyam Satkar</h2>
        </div>

        <div className='side-option p-3'>
          <Link to="/myprofile"><p onClick={() => setIssidebar(!issidebar)}>View Profile</p></Link>
          <Link to="/contactus"><p onClick={() => setIssidebar(!issidebar)}>Contact Us</p></Link>
          {/* <Link to="/wishlist"><p onClick={() => setIssidebar(!issidebar)}>Wishlist -{wishItems.length} items</p></Link> */}
        </div>
      </div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid '>
          <Link to="/" className='navbar-brand'>
            <img src={logo} alt='' />

          </Link>
          
          <i className={issidebar?'bi bi-list':"bi-x-square" } id='togglebtn' onClick={() => setIssidebar(!issidebar)}></i>

        </div>
      </nav>
    </>
  );
}

export default Header;
