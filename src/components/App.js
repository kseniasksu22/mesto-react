import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
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
  const [cards, setCards] = React.useState([]);
  //disabled button/////////////////////////////////////////////////////////////////////////////////////////

  const escCode = 27;

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getAllCards()])
      .then((values) => {
        const [userData, initialCards] = values;
        setCards(initialCards);
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    let isLiked = card.likes.some((i) => i._id === currentUser._id);

    function requestLike(newCard) {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    }
    if (!isLiked) {
      api
        .putLike(card._id)
        .then(requestLike)
        .catch((err) => {
          console.error(err);
        });
    } else {
      api
        .deleteLike(card._id)
        .then(requestLike)
        .catch((err) => {
          console.error(err);
        });
    }
  }
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const newCard = cards.filter((item) => item !== card);
        setCards(newCard);
      })
      .catch((err) => {
        console.error(err);
      });
  }

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

  function handleUpdateUser(data) {
    api
      .setUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleUpdateAvatar(data) {
    api
      .getAvatarInfo(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleSubmitCard(data) {
    api
      .postNewCard(data)
      .then((data) => {
        setCards([data, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function escHandle(e) {
    if (e.keyCode === escCode) {
      closeAllPopups();
    }
  }
  function closeByOverlay(e) {
    if (e.target.classList.contains("popup")) {
      closeAllPopups();
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", escHandle);
    document.addEventListener("mousedown", closeByOverlay);
    return () => {
      document.removeEventListener("keydown", escHandle);
      document.removeEventListener("mousedown", closeByOverlay);
    };
  });

  return (
    <div>
      <Header />
      <CurrentUserContext.Provider value={currentUser}>
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <AddPlacePopup
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
          onAddPlacePopup={handleSubmitCard}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <PopupWithForm
          name="deleted-card"
          title="Вы уверены?"
          submitButtonText=" Да"
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <Footer />
    </div>
  );
}

export default App;
