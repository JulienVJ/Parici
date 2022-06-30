import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FiMap } from "react-icons/fi";
import { RiCompassLine } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import "../styles/navigation.css";


// Il s'agit du header : sa partie navigation
export function Navigation() {

    window.addEventListener('scroll', function() {
        
        const header = document.querySelector(".navigation");
        const hundredVh = document.querySelector(".hundredvh");
        
        if(Math.round(window.pageYOffset) > 0) {
            header.classList.add("sticky");
            
        } else {
            header.classList.remove("sticky");
            
        }

      });

    return (

        <>
            <Outlet />
        
            <div className='navigation'>
              
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        <FaHome />
                    </Link>
                    <Link className='nav-link' to='Circuits'>
                        <RiCompassLine />
                    </Link>
                    <Link className='nav-link' to='circuits-de-groupe'>
                        <HiUserGroup />
                    </Link>
                </div>
            </div>



        </>
    )
}

export default Navigation;