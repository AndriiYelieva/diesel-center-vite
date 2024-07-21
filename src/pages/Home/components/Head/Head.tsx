import React from 'react'
import "./Head.scss";

import picture from "../../../../images/photos/picture.png";

export const Head = () => {
  return (
    <div className="head">
      <h1 className="head__title">Діагностика і ремонт дизельних форсунок</h1>
      <p className="head__subtitle" >Якісний сервіс форсунок для комерційних та легкових авто</p>

      <button className="head__button">
        Безкоштовна консультація
      </button>

      <img
        src={picture}
        alt="injectors"
        className="head__injectors injectors"
      />
    </div>
  )
}
