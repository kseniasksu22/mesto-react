import React from "react";
function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <div className="element">
      <img
        className="element__image"
        src={props.card.link}
        alt=""
        onClick={handleClick}
      />
      <div className="element__wrapper">
        <h2 className="element__caption">{props.card.name}</h2>
        <button type="button" className="element__delete"></button>
        <button type="button" className="element__like"></button>
        <div className="element__like-counter">{props.card.likes.length}</div>
      </div>
    </div>
  );
}

export default Card;
