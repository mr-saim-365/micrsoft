import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Icons = () => {
    return (
        <>
            <div className="icon">
                <p>Follow Microsoft</p>
                <h3>{<FaFacebookF/>}</h3>
                <h3>{<FaXTwitter />}</h3>
                <h3>{<FaLinkedin />}</h3>
            </div>
        </>
    )

}

export default Icons;