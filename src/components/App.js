import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../context/CurrentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setselectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setselectedCard(card);
  }
  function closeAllPopups() {
    setisEditAvatarPopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditProfilePopupOpen(false);
    setselectedCard(null);
  }
  return (
    <div>
      <Header />
      <CurrentUserContext.Provider value={currentUser}>
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <PopupWithForm
          name="form-new"
          title="Новое место"
          submitButtonText=" Создать"
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
        >
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
        </PopupWithForm>
        <PopupWithForm
          name="form-edit"
          title="Редактировать профиль"
          submitButtonText=" Сохранить"
          onClose={closeAllPopups}
          isOpen={isEditProfilePopupOpen}
        >
          <>
            <input
              placeholder="Имя"
              type="text"
              name="name"
              className="popup-form__input popup-form__input-name"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="error" id="name-error"></span>
            <input
              placeholder="О себе"
              type="text"
              name="description"
              className="popup-form__input popup-form__input-description"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="error" id="description-error"></span>
          </>
        </PopupWithForm>
        <PopupWithForm
          name="deleted-card"
          title="Вы уверены?"
          submitButtonText=" Да"
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name="form-avatar"
          title="Обновить аватар"
          submitButtonText=" Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
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
        </PopupWithForm>
      </CurrentUserContext.Provider>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <Footer />
    </div>
  );
}

export default App;
