import React from 'react';
import './Footer.css'; // Import the CSS for styling
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons
import logo from "../../../src/assets/church logo.jpg"; // Import the logo
import { useTranslation } from 'react-i18next'; // Import the translation hook

const Footer: React.FC = () => {
    const { t } = useTranslation(); // Destructure the translation hook

    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Logo */}
                <div className="footer__logo">
                    <Link to="/">
                        <img src={logo} alt={t('footer.logoAlt')} />
                    </Link>
                </div>

                {/* Contact Information */}
                <div className="footer__contact">
                    <h3>{t('footer.contactTitle')}</h3>
                    <p>{t('footer.email')}: info@church.com</p>
                    <p>{t('footer.phone')}: +1 234 567 890</p>
                    <p>{t('footer.address')}: 123 Church Street, City, Country</p>
                </div>

                {/* Quick Links */}
                <div className="footer__links">
                    <h3>{t('footer.quickLinksTitle')}</h3>
                    <ul>
                        <li><Link to="/">{t('footer.home')}</Link></li>
                        <li><Link to="/about">{t('footer.aboutUs')}</Link></li>
                        <li><Link to="/services">{t('footer.services')}</Link></li>
                        <li><Link to="/new-here">{t('footer.newHere')}</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="footer__social">
                    <h3>{t('footer.followUs')}</h3>
                    <ul className="social__links">
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="social-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="social-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="social-icon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <p>&copy; {new Date().getFullYear()} {t('footer.churchName')}. {t('footer.rightsReserved')}</p>
            </div>
        </footer>
    );
};

export default Footer;