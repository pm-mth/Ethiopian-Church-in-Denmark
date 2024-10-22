import React from "react";
import Slider from "react-slick";
import "./ImageGallery.css";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../assets/Gallery/image1.jpg";
import image2 from "../../assets/Gallery/image2.jpg";
import image3 from "../../assets/Gallery/image3.jpg";
import image4 from "../../assets/Gallery/image4.jpg";
import image5 from "../../assets/Gallery/image5.jpg";

const ImageGallery: React.FC = () => {
  const { t } = useTranslation();

  const images = [
    {
      src: image1,
      alt: "Community Event 1",
      caption: t("imageGallery.caption1"),
    },
    {
      src: image2,
      alt: "Worship Service",
      caption: t("imageGallery.caption2"),
    },
    {
      src: image3,
      alt: "Youth Group Gathering",
      caption: t("imageGallery.caption3"),
    },
    {
      src: image4,
      alt: "Outreach Program",
      caption: t("imageGallery.caption4"),
    },
    {
      src: image5,
      alt: "Sunday School Activity",
      caption: t("imageGallery.caption5"),
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <FaChevronLeft className="slick-arrow slick-prev" />,
    nextArrow: <FaChevronRight className="slick-arrow slick-next" />,
  };

  return (
    <section className="image-gallery">
      <h2 className="image-gallery__title">{t("imageGallery.title")}</h2>
      <Slider {...settings} className="image-gallery__slider">
        {images.map((image, index) => (
          <div key={index} className="image-gallery__item">
            <img
              src={image.src}
              alt={image.alt}
              className="image-gallery__image"
            />
            <p className="image-gallery__caption">{image.caption}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ImageGallery;
