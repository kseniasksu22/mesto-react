import React from "react";

function ImagePopup(props) {
  return (
    <section
      className={`popup-card popup ${!props.card ? "" : "popup-form_showed"}`}
    >
      <figure className="popup-card__wrapper">
        <img className="popup-card__image" src={props.card.link} alt="" />
        <figcaption className="popup-card__caption">
          {props.card.name}
        </figcaption>
        <button
          className="popup-card__button popup-form__close-button"
          onClick={props.onClose}
        ></button>
      </figure>
    </section>
  );
}

export default ImagePopup;
