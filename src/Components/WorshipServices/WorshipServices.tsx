import React from 'react';
import './WorshipServices.css';
import { FaBible, FaPrayingHands, FaChild, FaMusic } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const WorshipServices: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="worship-services">
      <h2 className="worship-services__title">{t('worshipServices.title')}</h2>
      <div className="worship-services__content">
        <div className="worship-services__card">
          <FaBible className="worship-services__icon" />
          <h3 className="worship-services__card-title">{t('worshipServices.bibleStudy')}</h3>
          <p className="worship-services__card-description">{t('worshipServices.bibleStudyDescription')}</p>
        </div>
        <div className="worship-services__card">
          <FaPrayingHands className="worship-services__icon" />
          <h3 className="worship-services__card-title">{t('worshipServices.prayer')}</h3>
          <p className="worship-services__card-description">{t('worshipServices.prayerDescription')}</p>
        </div>
        <div className="worship-services__card">
          <FaChild className="worship-services__icon" />
          <h3 className="worship-services__card-title">{t('worshipServices.childrenMinistry')}</h3>
          <p className="worship-services__card-description">{t('worshipServices.childrenMinistryDescription')}</p>
        </div>
        <div className="worship-services__card">
          <FaMusic className="worship-services__icon" />
          <h3 className="worship-services__card-title">{t('worshipServices.choir')}</h3>
          <p className="worship-services__card-description">{t('worshipServices.choirDescription')}</p>
        </div>
      </div>
    </section>
  );
};

export default WorshipServices;