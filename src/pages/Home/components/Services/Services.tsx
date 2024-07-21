/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./Services.scss";
import { Link } from '../Link/Link';

import diagnostics from "../../../../images/photos/Diagnostics_of_injectors.png";
import dismantling from "../../../../images/photos/Dismantling.png";
import computerDiagnostics from "../../../../images/photos/Computer_diagnostics.png";
import restoration from "../../../../images/photos/Restoration_of_diesel_equipment.png";

const array = [
  {
    id: 1,
    title: "Діагностика форсунок",
    descrtiprion: "перевірка форсунок проходить на сучасному обладнанні. Перевірка за різними параметрами, в залежності від виробника.",
    picture: diagnostics,
  },
  {
    id: 2,
    title: "Демонтаж",
    descrtiprion: "форсунки легко знімаються, але якщо на них утворюється окис - потрібні спеціальні інструменти. Складність впливає на ціну.",
    picture: dismantling,
  },
  {
    id: 3,
    title: "Комп’ютерна діагностика",
    descrtiprion: "для усіх клієнтів проводимо безкоштовну комп’ютерну діаностику для покращення роботи та подальшої співпраці.",
    picture: computerDiagnostics,
  },
  {
    id: 4,
    title: "Відновлення дизельної апаратури",
    descrtiprion: "виконуємо ремонт та заміняємо форсунки для легкових та комерційних автомобілів за вигідними цінами.",
    picture: restoration,
  },
]

export const Services = () => {
  return (
    <section className="services">
      <h1 className="services__title">Послуги</h1>
      <ul className="services__list">
        {array.map(card =>
          <li className="services__card" key={card.id}>
            <h3 className="services__card--title">
              {card.title}
            </h3>
            <p className="services__card--description">
              {card.descrtiprion}
            </p>
            <Link title="Замовити" />
            <img
              src={card.picture}
              alt="picture"
              className="services__card--image"
            />
          </li>
        )}
      </ul>
    </section>
  )
}
