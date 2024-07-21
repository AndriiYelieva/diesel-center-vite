/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./Makers.scss";
import bosch from "../../../../images/icons/bosch.svg"
import denso from "../../../../images/icons/denso.svg"
import delphi from "../../../../images/icons/delphi.svg"
import siemens from "../../../../images/icons/siemens.svg"

const array = [
  {
    id: 1,
    title: "Bosch",
    picture: bosch,
  },
  {
    id: 2,
    title: "Denso",
    picture: denso,
  },
  {
    id: 3,
    title: "Delphi",
    picture: delphi,
  },
  {
    id: 4,
    title: "Siemens",
    picture: siemens,
  },
]

export const Makers = () => {
  return (
    <section className="makers">
      <h1 className="makers__title">Ремонт форсунок усіх виробників</h1>

      <ul className="makers__list">
        {array.map(card =>
          <li className="makers__card" key={card.id}>
            <img src={card.picture} alt={card.title} />
          </li>
        )}
      </ul>
    </section >
  )
}
