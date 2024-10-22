import React from "react";
import "./ServiceTime.css";
import { FaClock, FaMapMarkerAlt, FaParking } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ServiceTime: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="service-times-locations">
      <h2 className="service-times-locations__title">
        {t("serviceTimesLocations.title")}
      </h2>
      <div className="service-times-locations__content">
        <div className="service-times-locations__schedule">
          <FaClock className="service-times-locations__icon" />
          <div className="service-times-locations__text">
            <h3 className="service-times-locations__subtitle">
              {t("serviceTimesLocations.scheduleTitle")}
            </h3>
            <ul className="service-times-locations__list">
              <li>{t("serviceTimesLocations.sundayService")}</li>
              <li>{t("serviceTimesLocations.weekdayService")}</li>
              <li>{t("serviceTimesLocations.onlineService")}</li>
            </ul>
          </div>
        </div>
        <div className="service-times-locations__location">
          <FaMapMarkerAlt className="service-times-locations__icon" />
          <div className="service-times-locations__text">
            <h3 className="service-times-locations__subtitle">
              {t("serviceTimesLocations.locationTitle")}
            </h3>
            <a
              href="https://www.google.com/maps/place/123+Church+St,+Copenhagen,+Denmark"
              target="_blank"
              rel="noopener noreferrer"
              className="service-times-locations__address-link"
            >
              {t("serviceTimesLocations.address")}
            </a>
            <div className="service-times-locations__info">
              <FaParking className="service-times-locations__icon-small" />
              <span>{t("serviceTimesLocations.parkingInfo")}</span>
            </div>
            <p>{t("serviceTimesLocations.accessibilityInfo")}</p>
          </div>
        </div>
      </div>
      <a href="/services" className="service-times-locations__link">
        {t("serviceTimesLocations.learnMoreButton")}
      </a>
    </section>
  );
};

export default ServiceTime;
