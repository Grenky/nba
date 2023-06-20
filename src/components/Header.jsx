import '../styles/Header.css';
import Nav from './Nav';
import {Link} from 'react-router-dom';


 export default function Header() {
    return(
        <div className="header-wrapper">
            <div className="header_logo-wrapper">
                <img src="../images/NBA_logo.png" alt="" className="logo"/>
                <Link className='header_log-text' to='/'>NBA</Link>
            </div>
            <Nav />
        </div>
    )
}