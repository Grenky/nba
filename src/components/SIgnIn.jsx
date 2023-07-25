import { useEffect, useState } from 'react';
import '../styles/SignIn.css';
import {Link} from 'react-router-dom';

export default function SignIn() {

        const[login, setLogin] = useState('');
        const[password, setPassword] = useState('');
        const[message, setMessage] = useState(false);
        const[messageError, setMessageError] = useState(false);
        
        const handleLoginChange = (event) => {
            setLogin(event.target.value);
        };

        const handlePasswordChange = (event) => {
            setPassword(event.target.value);
        };

        const handleSubmit = (event) => {
            event.preventDefault();
        };

        // const visibleBlock = () => {
        //     return setMessage(!message);
        // }
        // const visibleError = () => {
        //     return setMessageError(!messageError);
        // }

        function showMessage() {
            if(login === 'test' && password ==='test') {
                setMessage(true);
                setMessageError(false);
            } else {
                setMessageError(true);
                setMessage(false);
            }
        }

  

    useEffect(() => {
        if(message) {
            const timer = setTimeout(() => {
                setMessage(false);
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return(
        <div className="signin-wrapper">
            <div className='signin-wrapper__container'>
                <h1 className='signin-title'>Sign In</h1>
                <form className='signin-wrapper__container__form' onSubmit={handleSubmit}>
                    <input className='signin-wrapper__container__form__login' placeholder='Email' value={login} onChange={handleLoginChange}></input>
                    <input className='signin-wrapper__container__form__password' placeholder='Password' value={password} onChange={handlePasswordChange}></input>
                    <button className='signin-wrapper__container__form__btn'  onClick={showMessage}>Sign In</button>
                </form>
                <div className='signin-wrapper__container__footer'>
                    <p className='signin-wrapper__container__footer-forgot-link'>Forgot password?</p>
                    <Link className='signin-wrapper__container__footer-btn' to='/UserAccount'>Next</Link>
                </div>
                {message && ( 
                     <h2 className='successful-text' style={{ visibility: 'visible' }}>Successful Login</h2>
                     )
                }
                {messageError && (
                    <h2 className='error-text' style={{ visibility: 'visible' }}>Login or password not correct</h2>
                )}           
            </div>
        </div>
    )
}