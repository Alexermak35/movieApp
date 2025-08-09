import { useEffect, useState } from "react";
import axios from "axios";



function Login() {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:8080/users")
        console.log(response.data);
        setUsers(response.data);
    }


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
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((user) => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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