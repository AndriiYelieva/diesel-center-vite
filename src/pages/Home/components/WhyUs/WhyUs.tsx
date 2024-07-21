/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./WhyUs.scss";
import classNames from 'classnames';

const array = [
  {
    id: 1,
    title: "Досвід",
    descrtiprion: "5 років досвіду роботи в сфері ремонту дизельних паливних систем",
    background: "experience",
  },
  {
    id: 2,
    title: "Швидкість",
    descrtiprion: "1-3 дні виконання роботи, але також в залежності від об’єму роботи",
    background: "time",
  },
  {
    id: 3,
    title: "Якість",
    descrtiprion: "Якісно надаємо ремонт, використовуємо лише оригінальні деталі",
    background: "quality",
  },
]

export const WhyUs = () => {
  return (
    <section className="whyUs">
      <h1 className="whyUs__title">Чому ми?!</h1>

      <ul className="whyUs__list">
        {array.map(card =>
          <li className={classNames("whyUs__card", `whyUs__card--${card.background}`)} key={card.id}>
            <h3 className="whyUs__card--title">
              {card.title}
            </h3>
            <p className="whyUs__card--description">
              {card.descrtiprion}
            </p>
          </li>
        )}
      </ul>
    </section >
  )
}
