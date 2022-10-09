import Navbar from "../../Components/Navbar/Navbar";
import UserInput from "../../Components/UserInput/UserInput";

import './UserInputPage.css';

const UserInputPage = () => {

    return (
        <div className="userInputPage">
            <Navbar />
            <div className="centered bg">
                <UserInput />
            </div>
        </div>
    );
}

export default UserInputPage;
