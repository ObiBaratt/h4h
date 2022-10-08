import { useState } from "react"
import generateUrl from "../../utils/generateUrl";
import "./UserInput.css";

const UserInput = () => {
    const [keyword, setKeyword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        generateUrl(keyword);

        setKeyword("");
    }

    return (
        <form id="inputForm" onSubmit={handleSubmit}>
            <input type="text" value={keyword} placeholder="What are you interested in?" onChange={(e) => {setKeyword(e.target.value)}}></input>
            <input type="submit" value="Submit" />
    </form>
    )
}

export default UserInput;
