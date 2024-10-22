import React from 'react';
import './MissionVision.css';
import { useTranslation } from 'react-i18next';

const MissionVision: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="mission-vision">
      <div className="mission-vision__content">
        <h2 className="mission-vision__title">{t('missionVision.title')}</h2>
        <div className="mission-vision__mission">
          <p className="mission-vision__text">{t('missionVision.mission')}</p>
        </div>
        <div className="mission-vision__vision">
          <p className="mission-vision__text">{t('missionVision.vision')}</p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
