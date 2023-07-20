import '../styles/SignIn.css';

export default function SignIn() {
    return(
        <div className="signin-wrapper">
            <div className='signin-wrapper__container'>
                <h1>Sign In</h1>
                <form className='signin-wrapper__container__form'>
                    <input className='signin-wrapper__container__form__login' placeholder='Email'></input>
                    <input className='signin-wrapper__container__form__password' placeholder='Password'></input>
                    <button className='signin-wrapper__container__form__btn'>Sign In</button>
                </form>
                <div className='signin-wrapper__container__footer'>
                    <p className='signin-wrapper__container__footer-forgot-link'>Forgot password?</p>
                    <button className='signin-wrapper__container__footer-btn'>Next</button>
                </div>
            </div>
        </div>
    )
}