import React from 'react';
import './AboutHero.css';
import { useTranslation } from 'react-i18next';

const AboutHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="about-hero">
      <div className="about-hero__content">
        <h1 className="about-hero__title">{t('about.title')}</h1>
        <p className="about-hero__tagline">{t('about.tagline')}</p>
      </div>
    </section>
  );
};

export default AboutHero;
