import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img
          className="header__icon"
          src="<%=require('./images/Vector.svg')%>"
          alt="Место"
        />
      </header>
      <main className="main">
        <section className="profile">
          <button className="profile__button"></button>
          <img className="profile__avatar" src="" alt=" Аватарка" />
          <div className="profile-info">
            <div className="profile-info__wrapper">
              <h1 className="profile-info__name"></h1>
              <p className="profile-info__description"></p>
            </div>
            <button
              type="button"
              className="profile-info__edit-button"
            ></button>
          </div>
          <button type="button" className="profile__add-button"></button>
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
      <footer className="footer">
        <p className="footer__item"> &#169; 2020 Mesto Russia</p>
      </footer>

      <section className="popup-form popup-form-edit popup">
        <form
          name="popup-form"
          className="popup-form__wrapper popup-form-edit__wrapper"
          noValidate
        >
          <h3 className="popup-form__title">Редактировать профиль</h3>
          <input
            type="text"
            name="name"
            className="popup-form__input popup-form__input-name"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="error" id="name-error"></span>
          <input
            type="text"
            name="description"
            className="popup-form__input popup-form__input-description"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="error" id="description-error"></span>
          <button
            type="submit"
            className="popup-form__save-button popup-form__save-button_inactive"
          >
            Сохранить
          </button>
          <button type="button" className="popup-form__close-button"></button>
        </form>
      </section>

      <section className="popup-form-new popup-form popup">
        <form
          name="card-add"
          className="popup-form__wrapper popup-form-new__wrapper"
          noValidate
        >
          <h3 className="popup-form__title">Новое место</h3>
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
          <button type="submit" className="popup-form__save-button">
            Создать
          </button>
          <button
            type="button"
            className="popup-form__close-button popup-form-new__close-button"
          ></button>
        </form>
      </section>

      <section className="popup-card popup">
        <figure className="popup-card__wrapper">
          <img className="popup-card__image" src="" alt="" />
          <figcaption className="popup-card__caption">Изображение</figcaption>
          <button className="popup-card__button popup-form__close-button"></button>
        </figure>
      </section>

      <section className="popup-deleted-card popup-form popup">
        <div className="popup-deleted-card__wrapper">
          <h2 className="popup-deleted-card__title">Вы уверены?</h2>
          <form className="popup-form__wrapper" noValidate>
            <input
              className="popup-form__input popup-form__input-delete"
              name="_id"
              type="hidden"
              value=""
            />
            <button type="submit" className="popup-deleted-card__button">
              Да
            </button>
          </form>
          <button className="popup-form__close-button popup-deleted-card__button-close"></button>
        </div>
      </section>
      <section className="popup-edit popup-form popup">
        <form className="popup-form__wrapper popup-edit__form" noValidate>
          <h3 className="popup-edit__title">Обновить аватар</h3>
          <input
            type="url"
            name="linkAvatar"
            className="popup-form__input popup-edit__input"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="error" id="linkAvatar-error"></span>
          <button
            type="submit"
            className="popup-form__save-button popup-edit__button"
          >
            Сохранить
          </button>
          <button
            type="button"
            className="popup-form__close-button popup-edit__button-close"
          ></button>
        </form>
      </section>
    </div>
  );
}

export default App;
