import "./Login.css";

const Login = () => { 
    return (
        <div className="Login">
            <h1>Login</h1>
            <div className="login-wrapper">
                <form>
                <label>
                    <p>Email</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <br></br>
                    <button type="submit">Submit</button>
                </div>
                </form>
                </div>
        </div>
    );
}

export default Login;
