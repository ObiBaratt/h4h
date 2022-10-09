import "./Volunteer.css";

const Volunteer = () => { 
    return (
        <div className="Volunteer" class="p-4">
            <div className="row d-flex border">
            <h1>Volunteer for an Event? </h1>
                <div className="volunteer-container-left row col-md mb-0 p-4">

                    <form >
                        <label>
                            <p class="fw-bold">Number of Available Volunteers: 6</p>

                        </label>
                        <br></br>
                          <select name = "dropdown">
                          <option value = "Event1" selected>Event 1</option>
                           <option value = "Event2">Event2</option>
                          </select>
                          <br></br> <br></br>
                        <button type="submit">Add Volunteer</button>
                        <button type="submit">Remove Volunteer</button>
                    </form>
                </div>
                
             <h1> Host an Event?</h1>

                <div className="register-container-right row col-md mb-0 p-4">
                    <form>
                    <label>
                        <p class="fw-bold">Event Name</p>
                        <input type="text" placeholder="Enter Event Name Here" />
                    </label>
                    <br></br><br></br>
                    <label>
                        <p class="fw-bold">Event Url</p>
                        <input type="text" placeholder="Enter the URL here "/>
                    </label>
                    <div>
                        <br></br>
                        <button type="submit">Add Event</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Volunteer;
