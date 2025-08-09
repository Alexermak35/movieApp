import { use, useState } from "react";


function Login() {

    const [login, setLogin] = useState(true);

    const handleLogin = () => {
        alert("Login is successful!");
    };

    const handleRegister = () => {
        alert("Registration is successful!");
    }

    return (
        <>
            <div>
                <h3>{login ? "Login Page" : "Register Page"}</h3>
            </div>
            <div className="login">
                {login ? (
                    <>
                        <input type="text" placeholder="Username" />
                        <br />
                        <input type="password" placeholder="Password" />
                        <br />
                        <button className="login-button" onClick={handleLogin}>Login</button>
                        <button className="register-button" onClick={() => setLogin(false)}>Register</button>
                    </>) : (
                    <>
                        <input type="text" placeholder="Username" />
                        <br />
                        <input type="email" placeholder="Email" />
                        <br />
                        <input type="password" placeholder="Password" />
                        <br />
                        <input type="password" placeholder="Confirm Password" />
                        <br />
                        <button className="login-button" onClick={() => setLogin(true)}>
                            Login
                        </button>
                        <button className="register-button" onClick={handleRegister}>Register</button>

                    </>
                )}

            </div>
        </>
    )
}
export default Login;