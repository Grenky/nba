import '../styles/Header.css';

 export default function Header() {
    return(
        <div className="header-wrapper">
            <div className="header_logo-wrapper">
                <img src="../images/NBA_logo.png" alt="" className="logo"/>
                <p className='header_log-text'>NBA</p>
            </div>
        </div>
    )
}