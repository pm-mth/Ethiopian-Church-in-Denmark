import React from 'react';
import './WhatToExpect.css';
import { useTranslation } from 'react-i18next';
import { FaClock, FaParking, FaWheelchair, FaChild } from 'react-icons/fa';

const WhatToExpect: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="what-to-expect">
      <h2 className="what-to-expect__title">{t('newhere-whattoexpect.title')}</h2>
      <div className="what-to-expect__content">
        <div className="what-to-expect__item">
          <FaClock className="what-to-expect__icon" />
          <h3>{t('newhere-whattoexpect.serviceTimesTitle')}</h3>
          <p>{t('newhere-whattoexpect.serviceTimes')}</p>
        </div>
        <div className="what-to-expect__item">
          <FaParking className="what-to-expect__icon" />
          <h3>{t('newhere-whattoexpect.parkingTitle')}</h3>
          <p>{t('newhere-whattoexpect.parking')}</p>
        </div>
        <div className="what-to-expect__item">
          <FaWheelchair className="what-to-expect__icon" />
          <h3>{t('newhere-whattoexpect.accessibilityTitle')}</h3>
          <p>{t('newhere-whattoexpect.accessibility')}</p>
        </div>
        <div className="what-to-expect__item">
          <FaChild className="what-to-expect__icon" />
          <h3>{t('newhere-whattoexpect.familyFriendlyTitle')}</h3>
          <p>{t('newhere-whattoexpect.familyFriendly')}</p>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
