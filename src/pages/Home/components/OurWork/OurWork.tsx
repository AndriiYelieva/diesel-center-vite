/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./OurWork.scss";

const array = [
  {
    id: 1,
    title: "Зв’язатись з нами",
    description: "Ви отримаєте розгорнуту консультацію щодо ремонту форсунки.",
  },
  {
    id: 2,
    title: "Узгодження",
    description: "Ми отримуємо матеріали, друкуємо результат і узгоджуємо ремонт.",
  },
  {
    id: 3,
    title: "Ремонт",
    description: "Виконання необхідних ремонтних робіт.",
  },
  {
    id: 4,
    title: "Готовий результат",
    description: "Показуємо повністю зроблену роботу на надаємо гарантію.",
  },
]

export const OurWork = () => {
  return (
    <section className="ourWork">
      <h1 className="ourWork__title">Як ми працюємо</h1>

      <ul className="ourWork__list">
        {array.map(card =>
          <li className="ourWork__card" key={card.id}>
            <h3 className="ourWork__card--number">
              {`0${card.id}`}
            </h3>
            <h3 className="ourWork__card--title">{card.title}</h3>
            <p className="ourWork__card--description">{card.description}</p>
          </li>
        )}
      </ul>
    </section >
  )
}
