import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }
            return () => {
                window.removeEventListener("scroll");
            }
        })
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" alt="Netflix Logo" className="nav_logo" />

            <img src="https://karrotlive.com/assets/favi.jpeg" alt="kafkndnf" className="nav_avatar" />
        </div>

    )
}

export default Navbar
