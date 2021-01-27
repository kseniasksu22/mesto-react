import React from "react";
import PopupWithForm from "../components/PopupWithForm";
import { CurrentUserContext } from "../context/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAboutChange(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      name="form-edit"
      title="Редактировать профиль"
      submitButtonText=" Сохранить"
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <>
        <input
          placeholder={name}
          type="text"
          name="name"
          className="popup-form__input popup-form__input-name"
          required
          minLength="2"
          maxLength="40"
          onChange={handleNameChange}
        />
        <span className="error" id="name-error"></span>
        <input
          placeholder={description}
          type="text"
          name="description"
          className="popup-form__input popup-form__input-description"
          required
          minLength="2"
          maxLength="200"
          onChange={handleAboutChange}
        />
        <span className="error" id="description-error"></span>
      </>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
