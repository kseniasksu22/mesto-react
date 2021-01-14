import React from "react";
function PopupAvatar() {
  return (
    <>
      <input
        type="url"
        name="linkAvatar"
        className="popup-form__input popup-form-avatar__input"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="error" id="linkAvatar-error"></span>
    </>
  );
}

export default PopupAvatar;
