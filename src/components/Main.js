import React from "react";
import api from "../utils/api.js";
import Card from "./Card";
function Main(props) {
  const [userAvatar, setuserAvatar] = React.useState();
  const [userDescription, setuserDescription] = React.useState();
  const [userName, setuserName] = React.useState();
  const [cards, setcards] = React.useState([]);
  React.useEffect(() => {
    api.getAllCards().then((res) => {
      setcards(res);
    });
  }, []);
  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      setuserName(res.name);
      setuserAvatar(res.avatar);
      setuserDescription(res.about);
    });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <button
          className="profile__button"
          onClick={props.onEditAvatar}
        ></button>
        <img className="profile__avatar" src={userAvatar} alt=" Аватарка" />
        <div className="profile-info">
          <div className="profile-info__wrapper">
            <h1 className="profile-info__name">{userName}</h1>
            <p className="profile-info__description">{userDescription}</p>
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
