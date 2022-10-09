import "./Register.css";

const Register = () => { 
    return (
        <div className="Register">
            <h1>Register</h1>
            <div className="register-wrapper">
                <form>
                <label>
                    <p>First Name</p>
                    <input type="text" placeholder="John" />
                </label>
                <label>
                    <p>Last Name</p>
                    <input type="text" placeholder="Doe"/>
                </label>
                <label>
                    <p>Location</p>
                    <input type="text" placeholder="Oregon"/>
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" placeholder="john.doe123@gmail.com"/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" placeholder="" />
                </label>
                <div>
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
                </div>
                <label>
                    <p>How did you hear about us?</p>
                    <input type="text" placeholder="Advertisement"/>
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

export default Register;