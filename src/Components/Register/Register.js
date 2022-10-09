import "./Register.css";

const Register = () => { 
    return (
        <div className="Register">
            <h1>Register</h1>
            <div className="register-wrapper">
                <form>
                <label>
                    <p>First Name</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Last Name</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Location</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                    <p>Role</p>
                    <input type="radio" value="Elder" name="elder"/> Elder
                    <br></br>
                    <input type="radio" value="Family/Guardian" name="family/guardian"/> Family/Guardian
                    <br></br>
                    <input type="radio" value="Caretaker" name="caretaker"/> Caretaker
                    <br></br>
                    <input type="radio" value="Volunteer" name="volunteer"/> Volunteer
                    <br></br>
                    <input type="radio" value="Host" name="host"/> Host
                <div>
                    <br></br>
                    <button type="submit">Submit</button>
                </div>
                </form>
                </div>
        </div>
    );
}

export default Register;