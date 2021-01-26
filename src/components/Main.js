import React from "react";
import api from "../utils/api.js";
import Card from "./Card";
import { CurrentUserContext } from "../context/CurrentUserContext";
function Main(props) {
  // const [userAvatar, setuserAvatar] = React.useState("");
  // const [userDescription, setuserDescription] = React.useState("");
  // const [userName, setuserName] = React.useState("");
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    Promise.all([api.getAllCards()])
      .then((values) => {
        const [initialCards] = values;

        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  React.useEffect(() => {
    api
      .getAllCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <button
          className="profile__button"
          onClick={props.onEditAvatar}
        ></button>
        <img
          className="profile__avatar"
          src={currentUser.avatar}
          alt=" Аватарка"
        />
        <div className="profile-info">
          <div className="profile-info__wrapper">
            <h1 className="profile-info__name">{currentUser.name}</h1>
            <p className="profile-info__description">{currentUser.about}</p>
          </div>
          <button
            type="button"
            className="profile-info__edit-button"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card card={card} onCardClick={props.onCardClick} key={card._id} />
        ))}
      </section>
    </main>
  );
}

export default Main;
