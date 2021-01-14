import React from "react";

function ImagePopup() {
  return (
    <section className="popup-card popup">
      <figure className="popup-card__wrapper">
        <img className="popup-card__image" src="" alt="" />
        <figcaption className="popup-card__caption">Изображение</figcaption>
        <button className="popup-card__button popup-form__close-button"></button>
      </figure>
    </section>
  );
}

export default ImagePopup;
