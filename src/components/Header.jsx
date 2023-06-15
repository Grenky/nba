import '../styles/Header.css';
import {Link} from 'react-router-dom';

 export default function Header() {
    return(
        <div className="header-wrapper">
            <div className="header_logo-wrapper">
                <img src="../images/NBA_logo.png" alt="" className="logo"/>
                <p className='header_log-text'>NBA</p>
            </div>
            <nav className="header-nav-menu">
                <Link className='nav-link' to='Teams'>Teams</Link>
                <Link className='nav-link' to='Players'>Players</Link>
                <Link className='nav-link' to='About'>about</Link>
            </nav>
        </div>
    )
}