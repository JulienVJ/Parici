import { Outlet, Link } from 'react-router-dom';
import "../styles/navigation.css";


// Il s'agit du header : sa partie navigation
export function Navigation() {

    return (
        <>
            <div className='navigation'>
                <div className='logo-container'>
                    {/* Ici se trouvera le logo */}
                </div>

                {/* Juste pour le test, voici deux liens */}
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        ACCUEIL
                    </Link>
                    <Link className='nav-link' to='/circuits-de-groupe'>
                        GROUPES
                    </Link>
                </div>
            </div>

            <Outlet />

        </>
    )
}

export default Navigation;