import React from "react";

function PopupCard() {
  return (
    <>
      <input
        type="text"
        name="nameCard"
        placeholder="Название"
        className="popup-form__input popup-form-new__input-name"
        required
        minLength="1"
        maxLength="30"
      />
      <span className="error" id="nameCard-error"></span>
      <input
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        className="popup-form__input popup-form-new__input-link"
        required
      />
      <span className="error" id="link-error"></span>
    </>
  );
}

export default PopupCard;
