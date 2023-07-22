import { useEffect, useState } from 'react';
import '../styles/SignIn.css';

export default function SignIn() {

    const[login, setLogin] = useState('');
    const[password, setPassword] = useState('');
    const[message, setMessage] = useState(false);
    
    const handleLoginChange = (event) => {
        setLogin(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };


    if(login === 'test' && password ==='test') {
        console.log('da')
    } else {
        console.log('net')
    }

    const visibleBlock = () => {
        setMessage(!message);
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
                <h1>Sign In</h1>
                <form className='signin-wrapper__container__form' onSubmit={handleSubmit}>
                    <input className='signin-wrapper__container__form__login' placeholder='Email' value={login} onChange={handleLoginChange}></input>
                    <input className='signin-wrapper__container__form__password' placeholder='Password' value={password} onChange={handlePasswordChange}></input>
                    <button className='signin-wrapper__container__form__btn'  onClick={visibleBlock}>Sign In</button>
                </form>
                <div className='signin-wrapper__container__footer'>
                    <p className='signin-wrapper__container__footer-forgot-link'>Forgot password?</p>
                    <button className='signin-wrapper__container__footer-btn'>Next</button>
                </div>
                {message && ( 
                     <h2 className='successful-text' style={{ visibility: 'visible' }}>Successful Login</h2>
                     )
                }            
            </div>
        </div>
    )
}