import Navbar from "../../Components/Navbar/Navbar";

import "./Template.css";

const Template = () => {
    return (
        <div className="section">
            <Navbar />
            <h1>This is a template.</h1>
            <h1 className="primary">Primary</h1>
            <h1 className="secondary">Secondary</h1>
            <h1 className="tertiary">Tertiary</h1>
            <h1 className="quaternary">Quaternary</h1>
        </div>
    );
}

export default Template;
