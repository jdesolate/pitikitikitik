import React from "react";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/users' exact>
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to='/u1/pitiks'>MY PITIKS</NavLink>
      </li>
      <li>
        <NavLink to='/pitiks/new'>ADD PITIK</NavLink>
      </li>
      <li>
        <NavLink to='/auth'>AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
