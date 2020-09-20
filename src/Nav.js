import React, { useEffect, useState } from "react";
import Logo from "./logo.png";
import Avatar from "./avatar.png";
import "./Nav.css";

export default function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={Logo} alt="ReactFlix" />
      <img className="nav_avatar" src={Avatar} alt="User" />
    </div>
  );
}
