import React from 'react';
import './MissionAbout.css';
import { useTranslation } from 'react-i18next';

const MissionAbout: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="mission-about">
      <div className="mission-about__content">
        <div className="mission-about__mission">
          <h2 className="mission-about__title">{t('missionAbout.missionTitle')}</h2>
          <div className="mission-about__text-container">
            <p className="mission-about__text">{t('missionAbout.missionText')}</p>
          </div>
          <button className="mission-about__cta">{t('missionAbout.learnMoreButton')}</button>
        </div>
        <div className="mission-about__about">
          <h2 className="mission-about__about-title">{t('missionAbout.aboutTitle')}</h2>
          <div className="mission-about__about-text-container">
            <p className="mission-about__about-text">{t('missionAbout.aboutText')}</p>
          </div>
          <button className="mission-about__cta">{t('missionAbout.learnMoreButton')}</button>
        </div>
      </div>
    </section>
  );
};

export default MissionAbout;
