import React from "react";
import "./Header.css";

const Header = () => {
  setTimeout(() => {
    let menuButtons = document.querySelectorAll(".menu-btn");
    menuButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.classList.contains("selected")) return;
        menuButtons.forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
      });
    });
  }, [1000]);

  return (
    <div id="header" className="header">
      <nav className="navbar">
        <div className="title">
          <a href="#">Star7</a>
        </div>
        <ul className="navigation-menu">
          <li>
            <a className="menu-btn" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="menu-btn selected" href="#">
              Players
            </a>
          </li>
          <li>
            <a className="menu-btn" href="#">
              About
            </a>
          </li>
          <li>
            <a className="menu-btn" href="#">
              Blogs
            </a>
          </li>
          <li>
            <a className="menu-btn" href="#">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
