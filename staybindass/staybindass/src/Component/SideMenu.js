import React from 'react'
import avatar from '../img/avatars/4.png'

const SideMenu = () => {
  return (
    <div>
         <div className="SideMenu " id="sidebar">
      <div className="d-flex align-items-baseline py-3 px-2 iconpart">
        <div className="img-cont col-3">
        <img src={avatar} alt="profile-img" />
        </div>
        <h2 className="col-9 px-3">Satyam Satkar</h2>
      </div>

      <div className="side-option p-3">
        <p>Manage Profile</p>
        <p>Contatct Us</p>
      </div>
    </div>
    </div>
  )
}

export default SideMenu