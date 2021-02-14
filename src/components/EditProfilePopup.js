import React from "react";
import PopupWithForm from "../components/PopupWithForm";
import { CurrentUserContext } from "../context/CurrentUserContext";

function EditProfilePopup(props) {
  const nameRef = React.useRef();
  const aboutRef = React.useRef();

  const [inputError, setInputError] = React.useState(false);

  const [disable, setDisable] = React.useState(false);

  const [name, setName] = React.useState("");

  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value);
    validateInputs();
  }

  function handleAboutChange(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
    setInputError(true);
  }, [currentUser]);

  function handleInfoSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  function validateInputs() {
    !nameRef.current.validity.valid
      ? setInputError(false)
      : setInputError(true);
  }

  return (
    <PopupWithForm
      isDisable={disable}
      name="form-edit"
      title="Редактировать профиль"
      submitButtonText=" Сохранить"
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleInfoSubmit}
    >
      <>
        <input
          value={name}
          ref={nameRef}
          placeholder={name}
          type="text"
          name="name"
          className="popup-form__input popup-form__input-name"
          required
          minLength="2"
          maxLength="40"
          onChange={handleNameChange}
        />
        <span
          className={`error ${inputError ? "" : "error_active"}`}
          id="name-error"
        >
          Имя не может иметь меньше чем 2 и больше чем 40 букв
        </span>
        <input
          ref={aboutRef}
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
