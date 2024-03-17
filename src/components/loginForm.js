import React, { useState } from 'react';
import { useAuth } from '../api/services/auth.js';
import { useInput } from '../hooks/useInput';
import { HalfCircleSpinner } from 'react-epic-spinners';
import { toast } from 'react-toastify';

const LoginForm = ({ showForgotPasswordForm, setShowForgotPasswordForm }) => {
    const [username, bindUsername, resetUsername] = useInput("");
    const [password, bindPassword, resetPassword] = useInput("");
    const [errors, setErrors] = useState({});
    const { LoginError, showLoader } = useAuth();
    const [showPass, setShowPass] = useState(false);

    // Check_Validation_Function
    const validateLogin = () => {
        let errors = {};
        let isValid = true;
        if (!username) {
            isValid = false;
            errors['username'] = 'Please enter your Username.';
            toast.error('Please enter your Username.');
        }
        if (!password) {
            isValid = false;
            errors['password'] = 'Please enter your Password.';
            toast.error('Please enter your Password.');
        }
        setErrors(errors);
        return isValid;
    };

    // Handle_Show_Password
    const handleShowPass = () => {
        setShowPass(!showPass);
    }

    // Handle_Form_Submission
    const loginHandler = (event) => {
        event.preventDefault();
        if (validateLogin()) {

        }
    };

    return (
        <>
            {!showForgotPasswordForm && (
                <form className={`loginForm ${showLoader && 'formDisable'}`} onSubmit={(event) => loginHandler(event)}>
                    <div className="formRow">
                        <div className="inputWrap">
                            <input
                                type="text"
                                className={`formControl ${errors.username && 'error'}`}
                                placeholder="Username"
                                {...bindUsername}
                            />
                        </div>
                    </div>
                    <div className="formRow">
                        <div
                            className={`inputWrap posRelative passWrap ${showPass && 'view'}`}
                        >
                            <input
                                type={showPass ? 'text' : 'password'}
                                className={`formControl ${errors.password && 'error'}`}
                                placeholder="Password"
                                id="passwordInput"
                                {...bindPassword}
                            />
                            <button
                                type='button'
                                className={`icnView fa-solid posAbsolute ${showPass ? 'fa-eye-slash' : 'fa-eye'}`}
                                onClick={() => {
                                    handleShowPass()
                                }}
                            ></button>
                        </div>
                    </div>
                    <div className="formBtnRow textCenter fontSmall">
                        <button
                            type="submit"
                            className="btn btnPrimary dBlock w100"
                            disabled={showLoader}
                        >Login
                            {showLoader && (
                                <HalfCircleSpinner
                                    size={18}
                                    style={{
                                        display: "inline-block",
                                        marginLeft: "7px",
                                        position: 'relative',
                                        top: '2px',
                                    }}
                                />
                            )}
                        </button>
                        <button
                            type='button'
                            className='btnLink'
                            onClick={() => {
                                setErrors('')
                                resetUsername()
                                resetPassword()
                                setShowForgotPasswordForm(true)
                            }}
                        >Forgot Password?</button>
                    </div>
                    {LoginError && (
                        <div className="formContainerError">{LoginError}</div>
                    )}
                </form>
            )}
        </>
    );
}
export default LoginForm;
