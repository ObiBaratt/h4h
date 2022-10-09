import "./Login.css";

const Login = () => { 
    return (
        <div className="Login">
            <h1>Login</h1>
            <div className="login-wrapper">
                <form>
                <label>
                    <p>Email</p>
                    <input type="text" placeholder="john.doe123@gmail.com"/>
                </label>
                <br></br>
                <br></br>
                <label>
                    <p>Password</p>
                    <input type="password" placeholder="Password"/>
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
