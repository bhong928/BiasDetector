import React from "react";
import './LoginStyles.css';

const Login = () => {
    return (
        <div className = "login-container">
            {/* LOGO */}    
        <img classname = "logo" src="src/assets/ehtslogo_login.png" alt="Logo" />
            {/* FORM CONTAINER */}
            <div className = "form-container">
                {/* LOGIN FORM */}
                <div className = "login-form">
                    <h2>Welcome</h2>
                    <form>
                    {/* EMAIL */}
                    <div className="input-container">
                         <i className="fas fa-envelope"></i>
                        <label htmlFor = "email">Email Address</label>
                        <input type="email" id="email" name="email" required />

                        
                        <i className="fas fa-lock"></i>
                        <label htmlFor = "password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                     
                    {/* FORGOT PASSWORD & LOGIN BUTTONS */}
                    <button type="submit" className="login-button">Login</button>
                    <button type="button" className="password-button">Forgot Password?</button>
                    <button type="button" className="create-button">Create an Account</button>   
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;