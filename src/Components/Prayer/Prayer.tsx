import React from 'react';
import './Prayer.css';
import { useTranslation } from 'react-i18next';
import prayer from '../../assets/prayer.jpg';
const Prayer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="prayer-service">
      <div className="service-section">
        <img src= {prayer} alt="Prayer Service" className="service-section__image" />
        <div className="service-section__content">
          <h2 className="service-section__title">{t('prayerService.title')}</h2>
          <p className="service-section__details">{t('prayerService.details')}</p>
          <p className="service-section__description">{t('prayerService.description')}</p>
        </div>
      </div>
    </section>
  );
};

export default Prayer;
