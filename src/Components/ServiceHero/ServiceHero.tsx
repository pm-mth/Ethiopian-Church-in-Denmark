import React from 'react';
import './ServiceHero.css';
import { useTranslation } from 'react-i18next';

const ServiceHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="about-hero">
      <div className="about-hero__content">
        <h1 className="about-hero__title">{t('service.title')}</h1>
        <p className="about-hero__tagline">{t('service.tagline')}</p>
      </div>
    </section>
  );
};

export default ServiceHero;
