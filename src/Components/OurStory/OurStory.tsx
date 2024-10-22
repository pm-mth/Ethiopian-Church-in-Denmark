import React from 'react';
import './OurStory.css';
import { useTranslation } from 'react-i18next';

const OurStory: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="our-story">
      <div className="our-story__content">
        <h2 className="our-story__title">{t('ourStory.title')}</h2>
        <p className="our-story__text">{t('ourStory.text')}</p>
      </div>
    </section>
  );
};

export default OurStory;
