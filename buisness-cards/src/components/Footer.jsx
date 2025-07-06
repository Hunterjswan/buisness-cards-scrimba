import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitterSquare,
    faFacebookSquare,
    faInstagramSquare,
    faGithubSquare
} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <div className="footer-container">
            <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
            <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
            <FontAwesomeIcon icon={faGithubSquare} size="2x" />
        </div>
    )
}