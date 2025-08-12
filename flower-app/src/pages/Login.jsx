import { useEffect, useState } from "react";
import axios from "axios";



function Login() {
    const api = axios.create({ baseURL: "http://localhost:8080" });


    const [register, setRegister] = useState({ "username": "", "email": "", "password": "" });
    const [loading, setLoading] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [ok, setOk] = useState("");

    const [users, setUsers] = useState([]);
    const [inputPassword, setInputPassword] = useState("");
    const [inputUsername, setInputUsername] = useState("");



    const onChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value });
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setOk("");

        if (register.password !== confirmPassword) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }

        try {
            const created = await api.post("/users", register);
            console.log(created.data);

            // append new user to the list
            setUsers((prev) => [...prev, created.data]);
            setOk("Regestration is successfull!");
            setRegister({ "username": "", "email": "", "password": "" });
            setConfirmPassword("");
        } catch (err) {
            console.error(err);
            setError("Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:8080/users")
        console.log(response.data);
        setUsers(response.data);
    }


    const [login, setLogin] = useState(true);

    const handleLogin = async (e) => {
        e.preventDefault?.();
        setError("");
        setOk("");

        try {
            const { data } = await api.post(
                "/users/login",
                { username: inputUsername, password: inputPassword },
                { headers: { "Content-Type": "application/json" } }
            );


            setOk(`Welcome, ${data.username}!`);
            setInputUsername("");
            setInputPassword("");

        } catch (err) {
            setError("kusok govna");
        }
    };




    return (
        <>
            <div>
                <h3>{login ? "Login Page" : "Register Page"}</h3>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {ok && <p style={{ color: "green" }}>{ok}</p>}
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
                        <input type="text" placeholder="Username" onChange={(e) => setInputUsername(e.target.value)} required />
                        <br />
                        <input type="password" placeholder="Password" onChange={(e) => setInputPassword(e.target.value)} required />
                        <br />
                        <button className="login-button" onClick={handleLogin}>Login</button>
                        <button className="register-button" onClick={() => setLogin(false)}>Register</button>
                    </>) : (
                    <>
                        <input type="text" name="username" placeholder="Username" value={register.username} onChange={onChange} />
                        <br />
                        <input type="email" name="email" placeholder="Email" value={register.email} onChange={onChange} />
                        <br />
                        <input type="password" name="password" placeholder="Password" value={register.password} onChange={onChange} />
                        <br />
                        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <br />
                        <button className="login-button" onClick={() => setLogin(true)} >
                            Login
                        </button>
                        <button className="register-button" onClick={handleRegister} disabled={loading}>Register</button>

                    </>
                )}

            </div>
        </>
    )
}
export default Login;