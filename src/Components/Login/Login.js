import "./Login.css";

const Login = () => { 
    return (
        <div className="Login p-5">
            <div class="login-container p-4 w-50 bg-secondaryy">
            <h1 className="quaternary">Login</h1>
                <form>
                <label>
                    <p className="fw-bold">Email</p>
                    <input className="form-rounded border-primaryy bg-tertiary primary" type="text" placeholder="john.doe123@gmail.com"/>
                </label>
                <br></br>
                <br></br>
                <label>
                    <p className="fw-bold">Password</p>
                    <input className="form-rounded border-primaryy bg-tertiary" type="password" placeholder="Password"/>
                </label>
                <div>
                    <br></br>
                    <button className="btn bg-quaternary tertiary" type="submit">Submit</button>
                </div>
                <div>
                    <br></br>
                    <a className="register-link quaternary" href="https://team18isthebest.netlify.app/register">Don't have a account? Register Here</a>
                </div>
                </form>
                </div>
        </div>
    );
}

export default Login;
