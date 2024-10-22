import React from 'react';
import './BibleStudy.css';
import { useTranslation } from 'react-i18next';
import bibleStudyImage from '../../assets/BibleStudy.jpg'

const BibleStudy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bible-study">
      <div className="service-section">
        <div className="service-section__content">
          <h2 className="service-section__title">{t('bibleStudy.title')}</h2>
          <p className="service-section__details">{t('bibleStudy.details')}</p>
          <p className="service-section__description">{t('bibleStudy.description')}</p>
        </div>
        <img src={bibleStudyImage} alt="Bible Study" className="service-section__image" />
      </div>
    </section>
  );
};

export default BibleStudy;
