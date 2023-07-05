import {Link} from 'react-router-dom';
import '../styles/Nav.css';

export default function Nav() {
    return(
        <nav className="header-nav-menu">
                <Link className='nav-link' to='Usd'>USD</Link>
                <Link className='nav-link' to='GBP'>GBP</Link>
                <Link className='nav-link' to='EUR'>EUR</Link>
            </nav>
    )
}