import React from 'react';
import './OurBeliefs.css';
import { useTranslation } from 'react-i18next';

const OurBeliefs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="our-beliefs">
      <div className="our-beliefs__content">
        <h2 className="our-beliefs__title">{t('ourBeliefs.title')}</h2>
        <ul className="our-beliefs__list">
          {(t('ourBeliefs.items', { returnObjects: true }) as string[]).map((belief: string, index: number) => (
            <li key={index} className="our-beliefs__item">
              {belief}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurBeliefs;
