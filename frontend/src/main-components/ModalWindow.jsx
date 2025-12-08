import { useContext, useState } from 'react'
import '../main-styles/modalstyle.css'
import { MainContext } from '../contexts/MainContext'

function ModalWindow() {
    const {
        isDark,
        isModalWindow,
        setModalWindow,
        loginUser,
        registerUser,
        isRegisterMode,
        setIsRegisterMode
    } = useContext(MainContext)

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });

    const [registerForm, setRegisterForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleCloseButton = () => {
        setModalWindow(false);
    };

    const handleSwitchForm = () => {
        setIsRegisterMode(!isRegisterMode);
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        await loginUser(loginForm);
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        await registerUser(registerForm);
    };

    return (
        <dialog open={isModalWindow} className='modal'>
            <div className={isDark ? "modal_container dark_container" : "modal_container"}>

                {/* LOGIN */}
                {!isRegisterMode && (
                    <div className='login_container login_container_active'>
                        <div className='input_container'>
                            <h2>Login</h2>

                            <form className="login_form" onSubmit={handleLoginSubmit}>
                                <label htmlFor="email_login">Email</label>
                                <input
                                    type="email"
                                    id="email_login"
                                    placeholder='example@gmail.com'
                                    className={isDark ? "form_input dark_input" : "form_input"}
                                    onChange={(e) =>
                                        setLoginForm({ ...loginForm, email: e.target.value })
                                    }
                                />

                                <label htmlFor="password_login">Password</label>
                                <input
                                    type="password"
                                    id="password_login"
                                    placeholder='Write your password'
                                    className={isDark ? "form_input dark_input" : "form_input"}
                                    onChange={(e) =>
                                        setLoginForm({ ...loginForm, password: e.target.value })
                                    }
                                />

                                <button type="submit" className={isDark ? "form_button dark_button" : "form_button"}>
                                    Login
                                </button>
                            </form>
                        </div>

                        <div className='login_register'>
                            <p>Don’t have an account?</p>
                            <a href="#" className='register_link' onClick={handleSwitchForm}>Register</a>
                        </div>

                        <button className='close_button' onClick={handleCloseButton}>x</button>
                    </div>
                )}

                {/* REGISTER */}
                {isRegisterMode && (
                    <div className='register_container register_container_active'>
                        <div className='input_container'>
                            <h2>Registration</h2>

                            <form className="login_form" onSubmit={handleRegisterSubmit}>
                                <label htmlFor="name">Username</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder='Your name'
                                    className={isDark ? "form_input dark_input" : "form_input"}
                                    onChange={(e) =>
                                        setRegisterForm({ ...registerForm, username: e.target.value })
                                    }
                                />

                                <label htmlFor="email_register">Email</label>
                                <input
                                    type="email"
                                    id="email_register"
                                    placeholder='example@gmail.com'
                                    className={isDark ? "form_input dark_input" : "form_input"}
                                    onChange={(e) =>
                                        setRegisterForm({ ...registerForm, email: e.target.value })
                                    }
                                />

                                <label htmlFor="password_register">Password</label>
                                <input
                                    type="password"
                                    id="password_register"
                                    placeholder='Write your password'
                                    className={isDark ? "form_input dark_input" : "form_input"}
                                    onChange={(e) =>
                                        setRegisterForm({ ...registerForm, password: e.target.value })
                                    }
                                />

                                <button type="submit" className={isDark ? "form_button dark_button" : "form_button"}>
                                    Register
                                </button>
                            </form>
                        </div>

                        <div className='login_register'>
                            <p>Already have an account?</p>
                            <a href="#" onClick={handleSwitchForm}>Login</a>
                        </div>

                        <button className='close_button' onClick={handleCloseButton}>x</button>
                    </div>
                )}

            </div>
        </dialog>
    )
}

export default ModalWindow
