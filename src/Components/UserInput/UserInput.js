import { useState } from "react"
import generateUrl from "../../utils/generateUrl";
import "./UserInput.css";

const UserInput = () => {
    const [keyword, setKeyword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [meetup, setMeetup] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setMeetup(generateUrl(keyword));

        setSubmitted(true);

        setKeyword("");
    }

    const handleMeetup = () => {
        window.location.replace(meetup);
    }

    if (!submitted) {
            return (
            <div className="main outer-div w-75">
                <div className="inner-div">
                    <h1 className="text">Hi, what are you interested in?</h1>
                    <form id="inputForm" onSubmit={handleSubmit}>
                    <input className="inputField secondary" type="text" value={keyword} placeholder="Enter here, then click Submit." onChange={(e) => {setKeyword(e.target.value)}}></input>
                    <br />
                    <input className="submit" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    } else {
        return (
            <div className="main outer-div w-75">
                <div className="inner-div">
                    <h1 className="text">Card Title</h1>
                    <p className="text">Card body text</p>
                    <button className="submit" onClick={handleMeetup}>Meetup</button>
                </div>
            </div>
        )
    }
}

export default UserInput;
