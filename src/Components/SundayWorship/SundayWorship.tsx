import React from 'react';
import './SundayWorship.css';
import { useTranslation } from 'react-i18next';
import sundayWorshipImage from '../../assets/SundayWorship.jpg';

const SundayWorship: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="sunday-worship">
      <div className="service-section service-section--reverse">
        <img src= {sundayWorshipImage} alt="Sunday Worship" className="service-section__image" />
        <div className="service-section__content">
          <h2 className="service-section__title">{t('sundayWorship.title')}</h2>
          <p className="service-section__details">{t('sundayWorship.details')}</p>
          <p className="service-section__description">{t('sundayWorship.description')}</p>
        </div>
      </div>
    </section>
  );
};

export default SundayWorship;
