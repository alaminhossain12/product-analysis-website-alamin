import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='container navbar justify-content-center'>
            <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'link')}
                to='/home'>Home</NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'link')}
                to='/reviews'>Review</NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'link')}
                to='/dashboard'>DashBoard</NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'link')}
                to='/blogs'>Blogs</NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'link')}
                to='/about'>About us</NavLink>
        </div>
    );
};

export default Navbar;