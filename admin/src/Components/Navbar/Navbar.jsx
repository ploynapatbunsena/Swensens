import React from 'react'
import "./Navbar.css"
import icon_logo from "../../assets/swensens_logo-red.svg"
import profile from "../../assets/nav-profile.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={icon_logo} alt="" className="nav-logo" />
      <h1>Admin Panel</h1>
      <img src={profile} className="nav-profile" alt="" />
    </div>
  )
}

export default Navbar