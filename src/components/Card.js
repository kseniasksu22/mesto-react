import React from "react";
import api from "../utils/api.js";
function Card(props) {
  const [cards, setcards] = React.useState([]);
  React.useEffect(() => {
    api.getAllCards().then((res) => {
      setcards(res);
    });
  }, []);
  return (
    <section className="elements">
      {cards.map((card) => (
        <div className="element" key={card._id}>
          <img className="element__image" src={card.link} alt="" />
          <div className="element__wrapper">
            <h2 className="element__caption"></h2>
            <button type="button" className="element__delete"></button>
            <button type="button" className="element__like"></button>
            <div className="element__like-counter">0</div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Card;
