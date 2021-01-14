import React from "react";

function Main(props) {
  return (
    <main className="main">
      <section className="profile">
        <button
          className="profile__button"
          onClick={props.onEditAvatar}
        ></button>
        <img className="profile__avatar" src="" alt=" Аватарка" />
        <div className="profile-info">
          <div className="profile-info__wrapper">
            <h1 className="profile-info__name">Жак-Ив Кусто</h1>
            <p className="profile-info__description">Исследователь океана</p>
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
        <template className="template">
          <div id="" className="element">
            <img className="element__image" src="" alt="" />
            <div className="element__wrapper">
              <h2 className="element__caption"></h2>
              <button type="button" className="element__delete"></button>
              <button type="button" className="element__like"></button>
              <div className="element__like-counter">0</div>
            </div>
          </div>
        </template>
      </section>
    </main>
  );
}

export default Main;
