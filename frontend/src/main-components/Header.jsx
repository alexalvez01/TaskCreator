import { useContext, useEffect, useState } from "react";
import "../main-styles/headerstyle.css";
import { Link } from "react-router-dom";
import { MainContext } from "../contexts/MainContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { isDark, setIsDark, isModalWindow, setModalWindow, user, logoutUser, setAuthMessage } =
    useContext(MainContext);
    
  const [isScrolled, setIsScrolled] = useState(false);

  const handleChange = () => {
    setIsDark(!isDark);
  };

  const handleLoginClick = () => {
    setModalWindow(!isModalWindow);
  };

  const handleMenuClick = () => {
    const nav = document.querySelector(".nav_white");
    const nav_list = document.querySelector(".nav_list");
    const nav_container_list = document.querySelector(".nav_container_list");
    const nav_container_button = document.querySelector(
      ".nav_container_button"
    );

    nav.classList.toggle("nav_responsive");
    nav_container_list.classList.toggle("responsive_container_list");
    nav_container_button.classList.toggle("responsive_container_button");
    nav_list.classList.toggle("responsive_list");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.matchMedia("(min-width: 720px)").matches) {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAboutClick = (e) => {
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
      e.preventDefault();
      const element = document.getElementById('about');
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const handleHomeClick = (e) => {
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <header>
      <div className="nav_responsive_button_container">
        <button
          className={
            isDark
              ? "nav_responsive_button responsive_button_dark"
              : "nav_responsive_button"
          }
          onClick={handleMenuClick}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <nav className={`${isDark ? "nav_white nav_dark" : "nav_white"} ${isScrolled ? (isDark ? "nav_scrolled_dark" : "nav_scrolled_white") : ""}`}>
        <div className="nav_container_list">
          <div className="nav_list">
            <Link to="/" className="nav_item" onClick={handleHomeClick}>
              Home
            </Link>
            <Link to="/#about" className="nav_item" onClick={handleAboutClick}>
              About
            </Link>
            <Link 
              to="/tasks" 
              className="nav_item"
              onClick={(e) => {
                if (!user) {
                  e.preventDefault();
                  setAuthMessage("You need to login to manage your tasks");
                  setModalWindow(true);
                }
              }}
            >
              Start
            </Link>
          </div>

          <div className="nav_container_button">
            <label className="switch">
              <input
                type="checkbox"
                id="input"
                checked={isDark}
                onChange={handleChange}
              />
              <span className="slider">
                <FontAwesomeIcon
                  className={isDark ? "icon icon_dark" : "icon"}
                  icon={isDark ? faSun : faMoon}
                />
              </span>
            </label>

            {user ? (
              <div className="user_section">
                <span className={isDark ? "username_dark" : "username"}>
                  {user.username}
                </span>

                <button
                  className={
                    isDark
                      ? "logout_button logout_button_dark"
                      : "logout_button"
                  }
                  onClick={logoutUser}
                >
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </button>
              </div>
            ) : (
              <button
                className={
                  isDark ? "login_button login_button_dark" : "login_button"
                }
                onClick={(e) => {
                  e.preventDefault();
                  handleLoginClick();
                }}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
