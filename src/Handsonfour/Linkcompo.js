import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Compo.css"

function Linkcompo() {
  return (
    <>
    {/* <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/students'>Students</Link>
      <Link to='/contact'>Contact</Link>
      </div> */}
      <div className="navbar">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/students" activeClassName="active">
          Students
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </div>
    </>
  )
}

export default Linkcompo
