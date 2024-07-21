import React from 'react'
import "./FAQ.scss";

const array = [
  {
    id: 1,
    title: "Як часто потрібно робити обслуговування форсунок",
    descrtiprion: "Все залежить від регламенту, від заміноущільнених шайб форсунки, але в більшості від палива, на якому ви заправляєтесь.",
  },
  {
    id: 2,
    title: "Який термін виконання роботи?",
    descrtiprion: "1-3 дні виконання роботи, але також в залежності від об’єму роботи",
  },
  {
    id: 3,
    title: "Який матеріал ви використовуєте?",
    descrtiprion: "Ми використовуємо лише оригінальні деталі. Найчастіше це деталі системи common rail Denso.",
  },
]

export const FAQ = () => {
  return (
    <section className="FAQ">
      <h1 className="FAQ__title">Найчастіші запитання</h1>

      <ul className="FAQ__list">
        {array.map(card =>
          <li className="FAQ__card" key={card.id}>
            <p className="FAQ__card--question">
              {card.title}
            </p>
            {/* <p className="FAQ__card--answer">
              {card.descrtiprion}
            </p> */}
          </li>
        )}
      </ul>
    </section >
  )
}
