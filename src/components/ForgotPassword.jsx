import React from "react";
import '../styles/ForgotPassword.css';
import {useForm} from "react-hook-form";

export default  function ForgotPassword() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return(

        <div className="forgotPass-wrapper">
            <div className="forgotPass-container">
                <h1 className="forgotpass-title">Reset Password</h1>
                <form className="forgotPass-form" onSubmit={handleSubmit(onSubmit)}>
                    <input className="Login" {...register("Login", {required : true, maxLength: 10})} placeholder="Old Password"></input>
                    {errors.Login && <p className="kek">This field is required</p>}
                    <input className="Password" {...register("Password", { rattern: /^[A-Za-z]+$/i, required : true  })} placeholder="New Password"/>
                    {errors.Password && <p className="kek">This field is required</p>}
                    <input className="Password" {...register("Password", { rattern: /^[A-Za-z]+$/i, required : true  })} placeholder="New Password"/>
                    {errors.Password && <p className="kek">This field is required</p>}
                    <button type="submit" className="forgotPussBtn">Submit</button>
                </form>
            </div>
        </div>
    )
};