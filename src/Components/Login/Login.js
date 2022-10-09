import "./Login.css";

const Login = () => { 
    return (
        <div className="Login" class="p-4">
            <div className="login-container p-4 w-50 border">
            <h1>Login</h1>
                <form>
                <label>
                    <p class="fw-bold">Email</p>
                    <input type="text" placeholder="john.doe123@gmail.com"/>
                </label>
                <br></br>
                <br></br>
                <label>
                    <p class="fw-bold">Password</p>
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
