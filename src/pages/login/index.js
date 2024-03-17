import React, { useState } from 'react';
import { useAuth } from '../../api/services/auth.js';
import Logo from "../../assets/images/logo-colored.svg";
import LoginForm from '../../components/loginForm';
import { Navigate } from 'react-router-dom';

const Login = (props) => {
    const { userExist } = useAuth();
    const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

    if (userExist) {
        return <Navigate to="/dashboard" />
    }

    return (
        <section className="loginSection">
            <div className="contentWrap">
                <div className="sectHeader textCenter fontSmall">
                    <div className="logoWrap">
                        <img src={Logo} className="imgFluid" alt="NOHC" />
                    </div>
                    <div className='detailTxt'>
                        {showForgotPasswordForm ?
                            <p>Enter your email to reset your password.</p> :
                            <p>Enter your username and password to access your account.</p>
                        }
                    </div>
                </div>
                <LoginForm
                    showForgotPasswordForm={showForgotPasswordForm}
                    setShowForgotPasswordForm={setShowForgotPasswordForm}
                />
            </div>
        </section>
    );
}

export default Login;
