import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup(props) {
  const inputRef = React.useRef();

  function handleAvatarSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
    inputRef.current.value = "";
  }

  return (
    <PopupWithForm
      name="form-avatar"
      title="Обновить аватар"
      submitButtonText=" Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleAvatarSubmit}
    >
      <>
        <input
          ref={inputRef}
          type="url"
          name="avatar"
          className="popup-form__input popup-form-avatar__input"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="error" id="linkAvatar-error"></span>
      </>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
