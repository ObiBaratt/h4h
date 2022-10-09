import "./Register.css";

const Register = () => { 
    return (
        <div className="Register" class="p-4">
            <div class="row d-flex border">
            <h1>Register</h1>
                <div className="register-container-left row col-md mb-0 p-4">
                    <form>
                    <label>
                        <p>First Name</p>
                        <input type="text" placeholder="John" />
                    </label>
                    <br></br><br></br>
                    <label>
                        <p>Last Name</p>
                        <input type="text" placeholder="Doe"/>
                    </label>
                    <br></br><br></br>
                    <label>
                        <p>Location</p>
                        <input type="text" placeholder="Oregon"/>
                    </label>
                    <br></br><br></br>
                    <label>
                        <p>Email</p>
                        <input type="text" placeholder="john.doe123@gmail.com"/>
                    </label>
                    <br></br><br></br>
                    <label>
                        <p>Password</p>
                        <input type="password" placeholder="" />
                    </label>
                    </form>
                </div>

                <div className="register-container-right row col-md mb-0 p-4">
                    <form>
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
                    <br></br><br></br>
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
        </div>
    );
}

export default Register;