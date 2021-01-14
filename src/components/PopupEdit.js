import React from "react";

function PopupEdit() {
  return (
    <>
      <input
        type="text"
        name="name"
        className="popup-form__input popup-form__input-name"
        required
        minLength="2"
        maxLength="40"
      />
      <span className="error" id="name-error"></span>
      <input
        type="text"
        name="description"
        className="popup-form__input popup-form__input-description"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="error" id="description-error"></span>
    </>
  );
}

export default PopupEdit;
