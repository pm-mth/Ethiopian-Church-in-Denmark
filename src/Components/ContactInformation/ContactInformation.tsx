import React from 'react';
import './ContactInformation.css';
import { useTranslation } from 'react-i18next';

const ContactInformation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-section">
      <h2 className="contact-section__title">{t('contact.title')}</h2>
      <div className="contact-section__content">
        <div className="contact-section__form">
          <form>
            <div className="form-group">
              <label htmlFor="name">{t('contact.form.nameLabel')}</label>
              <input type="text" id="name" name="name" placeholder={t('contact.form.namePlaceholder')} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contact.form.emailLabel')}</label>
              <input type="email" id="email" name="email" placeholder={t('contact.form.emailPlaceholder')} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t('contact.form.phoneLabel')}</label>
              <input type="tel" id="phone" name="phone" placeholder={t('contact.form.phonePlaceholder')} />
            </div>
            <div className="form-group">
              <label htmlFor="preferred-contact">{t('contact.form.preferredContactLabel')}</label>
              <select id="preferred-contact" name="preferredContact">
                <option value="email">{t('contact.form.preferredContactEmail')}</option>
                <option value="phone">{t('contact.form.preferredContactPhone')}</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.form.messageLabel')}</label>
              <textarea id="message" name="message" placeholder={t('contact.form.messagePlaceholder')} required></textarea>
            </div>
            <button type="submit" className="contact-section__submit-button">{t('contact.form.submitButton')}</button>
          </form>
        </div>
        <div className="contact-section__details">
          <h3>{t('contact.details.title')}</h3>
          <p>{t('contact.details.phone')} : +1 234 567 890</p>
          <p>{t('contact.details.email')} : info@church.org</p>
          <div className="contact-section__map">
            <iframe
              title="Church Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354340558526!2d144.9560541156839!3d-37.817209979751154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c3da9f5f736!2sChurch!5e0!3m2!1sen!2sus!4v1607581255137!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
