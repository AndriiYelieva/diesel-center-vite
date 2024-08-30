import React, { useState } from 'react';
import "./FAQ.scss";
import classNames from 'classnames';

const array = [
  {
    id: 1,
    title: "Як часто потрібно робити обслуговування форсунок",
    description: "Все залежить від регламенту, від заміноущільнених шайб форсунки, але в більшості від палива, на якому ви заправляєтесь.",
    isShow: false,
  },
  {
    id: 2,
    title: "Який термін виконання роботи?",
    description: "1-3 дні виконання роботи, але також в залежності від об’єму роботи",
    isShow: false,
  },
  {
    id: 3,
    title: "Який матеріал ви використовуєте?",
    description: "Ми використовуємо лише оригінальні деталі. Найчастіше це деталі системи common rail Denso.",
    isShow: false,
  },
]

export const FAQ = () => {
  const [isAnswers, setIsAnswers] = useState(array);

  const handleShowAnswer = (index: number) => {
    const newAnswers = [...isAnswers];

    newAnswers[index].isShow = !newAnswers[index].isShow;
    setIsAnswers(newAnswers);
  }

  return (
    <section className="FAQ">
      <h1 className="FAQ__title">Найчастіші запитання</h1>

      <ul className="FAQ__list">
        {isAnswers.map((card, index) => (
          <div className="FAQ__card" key={card.id}>
            <div
              className="FAQ__card--summary"
              onClick={() => handleShowAnswer(index)}
            >
              <p className="FAQ__card--question">{card.title}</p>
              <button
                className={classNames(
                  'FAQ__card--button',
                  card.isShow ? 'FAQ__card--button--close' : 'FAQ__card--button--default'
                )}
              />
              {card.isShow}
            </div>
            {card.isShow && (
              <p className="FAQ__card--answer">{card.description}</p>
            )}
          </div>
        ))}
      </ul>
    </section>
  )
}
