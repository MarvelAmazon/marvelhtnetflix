import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState([]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src={
          "http://culturaddict.com/wp-content/uploads/2017/10/Netflix-Logo.png"
        }
        alt="Netflix"
      />
      <img
        className="nav__avatar"
        src={
          " https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png"
        }
        alt="Netflix"
      />
    </div>
  );
}

export default Navbar;
