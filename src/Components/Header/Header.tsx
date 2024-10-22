import React, { useState } from "react";
import "./Header.css"; // Import the CSS for styling
import { Link } from "react-router-dom"; // Import Link for navigation
import { useTranslation } from "react-i18next"; // Import the translation hook
import { FaGlobe } from "react-icons/fa"; // Import globe icon from react-icons
import logo from "../../assets/church logo.jpg"; // Import the logo

const Header: React.FC = () => {
  const { t, i18n } = useTranslation(); // Destructure the translation hook
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="Church Logo" />
        </Link>
      </div>
      <nav className={`header__nav ${isMenuOpen ? "active" : ""}`}>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              {t("header.home")}
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/new-here" onClick={() => setIsMenuOpen(false)}>
              {t("header.newHere")}
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              {t("header.about")}
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>
              {t("header.services")}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__language-selector">
        <FaGlobe className="language-icon" />
        <select onChange={handleLanguageChange} value={i18n.language}>
          <option value="en">English</option>
          <option value="am">አማርኛ</option>
        </select>
      </div>
      <div className="header__menu-icon" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
};

export default Header;
