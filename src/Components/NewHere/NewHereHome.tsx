import React from 'react';
import './NewHere.css';
import { FaHandSparkles, FaSmile } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const NewHereHome: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="new-here">
      <div className="new-here__title-wrapper">
        <h2 className="new-here__title">{t('newHere.title')}</h2>
        <p className="new-here__subtitle">{t('newHere.subtitle')}</p>
      </div>
      <div className="new-here__content">
        <div className="new-here__welcome">
          <FaHandSparkles className="new-here__icon" />
          <p className="new-here__message">{t('newHere.welcomeMessage')}</p>
        </div>
        <div className="new-here__expect">
          <FaSmile className="new-here__icon" />
          <p className="new-here__expect-text">{t('newHere.whatToExpect')}</p>
        </div>
      </div>
      <div className="new-here__cta-wrapper">
        <a href="/new-here" className="new-here__link">
          {t('newHere.learnMoreButton')}
        </a>
      </div>
    </section>
  );
};

export default NewHereHome;