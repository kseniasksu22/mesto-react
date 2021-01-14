import "../index.css";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import PopupCard from "./PopupCard";
import PopupEdit from "./PopupEdit";
import PopupAvatar from "./PopupAvatar";
function App() {
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setisEditAvatarPopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditProfilePopupOpen(false);
  }
  return (
    <div>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <PopupWithForm
        name="form-new"
        title="Новое место"
        submitButtonText=" Создать"
        children={PopupCard()}
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen}
      />
      <PopupWithForm
        name="form-edit"
        title="Редактировать профиль"
        submitButtonText=" Сохранить"
        children={PopupEdit()}
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}
      />

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
        children={PopupAvatar()}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup />
      <Footer />
    </div>
  );
}

export default App;
