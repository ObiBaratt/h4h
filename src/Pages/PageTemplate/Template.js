import Navbar from "../../Components/Navbar/Navbar";

import ChatBotComponent from "../../Components/ChatBot/ChatBot";

const Template = () => {
    return (
        <div className="section">
            <Navbar />
            <h1>This is a template.</h1>
            <ChatBotComponent />
        </div>
    );
}

export default Template;
