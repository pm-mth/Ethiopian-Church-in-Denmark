import React from "react";
import "./WelcomeMessage.css";
import { useTranslation } from "react-i18next";
import pastorImage from "../../assets/pastor.jpeg";

const WelcomeMessage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-section__content hero-section__content--reverse">
        <div className="hero-section__text">
          <h1 className="hero-section__title">{t("newhere-hero.welcomeTitle")}</h1>
          <p className="hero-section__message">{t("newhere-hero.welcomeMessage")}</p>
          <button className="hero-section__cta-button">
            {t("newhere-hero.ctaButton")}
          </button>
        </div>
        <div className="hero-section__image">
          <img src={pastorImage} alt={t("newhere-hero.pastorImageAlt")} />
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
