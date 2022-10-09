import "./Register.css";

const Register = () => { 
    return (
        <div className="Register p-4">
            <div className="register-container row d-flex bg-secondaryy">
            <h1 className="quaternary">Register</h1>
                <div className="register-container-left row col-md mb-0 p-4">
                    <form>
                    <label>
                        <p className="fw-bold">First Name</p>
                        <input className="form-rounded bg-tertiary border-primaryy" type="text" placeholder="John" />
                    </label>
                    <br></br><br></br>
                    <label>
                        <p className="fw-bold">Last Name</p>
                        <input className="form-rounded bg-tertiary border-primaryy" type="text" placeholder="Doe"/>
                    </label>
                    <br></br><br></br>
                    <label>
                        <p className="fw-bold">Location</p>
                        <input className="form-rounded bg-tertiary border-primaryy" type="text" placeholder="Oregon"/>
                    </label>
                    <br></br><br></br>
                    <label>
                        <p className="fw-bold">Email</p>
                        <input className="form-rounded bg-tertiary border-primaryy" type="text" placeholder="john.doe123@gmail.com"/>
                    </label>
                    <br></br><br></br>
                    <label>
                        <p className="fw-bold">Password</p>
                        <input className="form-rounded bg-tertiary border-primaryy" type="password" placeholder="" />
                    </label>
                    </form>
                </div>

                <div className="register-container-right row col-md mb-0 p-4">
                    <form>
                    <p className="fw-bold">Role</p>
                    <input className="form-rounded bg-tertiary border-primaryy" type="radio" value="Elder" name="elder"/> Elder
                    <br></br>
                    <input className="form-rounded bg-tertiary border-primaryy" type="radio" value="Family/Guardian" name="family/guardian"/> Family/Guardian
                    <br></br>
                    <input className="form-rounded bg-tertiary border-primaryy" type="radio" value="Caretaker" name="caretaker"/> Caretaker
                    <br></br>
                    <input className="form-rounded bg-tertiary border-primaryy" type="radio" value="Volunteer" name="volunteer"/> Volunteer
                    <br></br>
                    <input className="form-rounded bg-tertiary border-primaryy" type="radio" value="Host" name="host"/> Host
                    <br></br><br></br>
                    <label>
                        <p className="fw-bold">How did you hear about us?</p>
                        <input className="form-rounded bg-tertiary border-primaryy" type="text" placeholder="Advertisement"/>
                    </label>
                    <div>
                        <br></br>
                        <button className="btn bg-quaternary tertiary" type="submit">Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;