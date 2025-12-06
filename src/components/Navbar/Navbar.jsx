import React from 'react'
import "./Navbar.css"
import Fire from "../../assets/images/fire.png"
import Party from "../../assets/images/partying-face.png"
import Star from "../../assets/images/star.png"
import { NavLink } from 'react-router-dom'
import DarkMode from '../DarkMode/DarkMode'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1 >MovieManiac</h1>

        <div className="navbar_links">
            <DarkMode/>
            <NavLink  to="/" className="navbar_link">
               Popular <img src={Star} alt="" className="navbar_emoji" />
            </NavLink>
            <NavLink  to="/top_rated" className="navbar_link">
               Top Rated <img src={Party} alt="" className="navbar_emoji" />
            </NavLink>
            <NavLink to="/upcoming" className="navbar_link">
               Upcoming <img src={Fire} alt="" className="navbar_emoji" />
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar