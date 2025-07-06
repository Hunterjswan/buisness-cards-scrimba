import React from "react";
import About from "./About"
import Interest from "./Interest"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Body() {
    return (
        <div className="main-body">
            <h1>Hunter Swanson</h1>
            <h2>Frontend Developer</h2>
            <p>Hunterjswanson@gmail.com</p>    
            <div className="button-container">
                <button className="email"><FontAwesomeIcon icon={faEnvelope} />Email</button>
                <button className="linkedin"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</button>
            </div>
            <About />
            <Interest />
        </div>
    )
}