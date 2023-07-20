import '../styles/Header.css';
import Nav from './Nav';
import {Link} from 'react-router-dom';



 export default function Header() {
    return(
        <div className="header-wrapper">
            <div className="header_logo-wrapper">
                <img src="../images/logo_M.check.jpg" alt="" className="logo"/>
                <Link className='header_log-text' to='/'>M.Check</Link>
                <Link className='SIgnIn' to='SIgnIn'>Sign In</Link>
            </div>
            
            <Nav />
        </div>
    )
}