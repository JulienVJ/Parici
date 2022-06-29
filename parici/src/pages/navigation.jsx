import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FiMap } from "react-icons/fi";
import { RiCompassLine } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import "../styles/navigation.css";


// Il s'agit du header : sa partie navigation
export function Navigation() {

    return (

        <>
            <Outlet />
            <div className='navigation'>
                <div className='logo-container'>
                    {/* Ici se trouvera le logo */}
                </div>

                {/* Juste pour le test, voici deux liens */}
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        <FaHome />
                    </Link>
                    <Link className='nav-link' to='carte'>
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