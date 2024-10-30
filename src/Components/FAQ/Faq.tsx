import React, { useState } from "react";
import "./Faq.css";
import { useTranslation } from "react-i18next";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-section__title">{t("newhere-faq.title")}</h2>
      <div className="faq-section__content">
        {[1, 2, 3].map((num) => (
          <div
            className={`faq-item ${openIndex === num ? "open" : ""}`}
            key={num}
          >
            <h3 className="faq-item__question" onClick={() => toggleFAQ(num)}>
              {t(`newhere-faq.question${num}`)}
              {openIndex === num ? <FaChevronDown /> : <FaChevronRight />}
            </h3>
            {openIndex === num && (
              <p className="faq-item__answer">
                {t(`newhere-faq.answer${num}`)}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
