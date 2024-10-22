import React from 'react';
import './Hero.css'; // Import the CSS for styling
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
    const { t } = useTranslation();
  
    return (
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">{t('hero.welcomeTitle')}</h1>
          <p className="hero__subtitle">{t('hero.subtitle')}</p>
          <button className="hero__cta">{t('hero.ctaButton')}</button>
          <p className="hero__quote">{t('hero.quote')}</p>
        </div>
      </section>
    );
  };
  
  export default Hero;