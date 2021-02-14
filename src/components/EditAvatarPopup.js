import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup(props) {
  const inputRef = React.useRef();
  const [inpuAvatarError, setInputAvatarError] = React.useState(false);
  function handleAvatarSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
    inputRef.current.value = "";
  }
  function validateAvatar() {}
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
        <span
          className={`error ${!inpuAvatarError ? "" : "error_active"}`}
          id="linkAvatar-error"
        >
          Вставьте, пожалуйста, ссылку на картинку
        </span>
      </>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
