import React from "react";

import photo from "../resources/faceShot.jpeg"

export default function Photo() {
    return (
        <div className="headShot">
            <img src={photo} alt="Photo of Hunter Swanson" />
        </div>

    )
}