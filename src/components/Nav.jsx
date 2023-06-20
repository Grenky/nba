import {Link} from 'react-router-dom';
import '../styles/Nav.css';

export default function Nav() {
    return(
        <nav className="header-nav-menu">
                <Link className='nav-link' to='Teams'>Teams</Link>
                <Link className='nav-link' to='Players'>Players</Link>
                <Link className='nav-link' to='About'>about</Link>
            </nav>
    )
}