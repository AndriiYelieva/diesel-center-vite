import React from 'react'
import "./Menu.scss";
import { Link } from 'react-router-dom';

type Props = {
  setMenuVisible: (v: boolean) => void;
}

const array = [
  {
    id: 1,
    title: "Послуги",
    link: "/diesel-center-vite/#services",
  },
  {
    id: 2,
    title: "Чому ми?!",
    link: "/diesel-center-vite/#why-us",
  },
  {
    id: 3,
    title: "Виробники",
    link: "/diesel-center-vite/#makers",
  },
  {
    id: 4,
    title: "Як ми працюємо",
    link: "/diesel-center-vite/#our-work",
  },
  {
    id: 5,
    title: "Контакти",
    link: "/diesel-center-vite/#contacts",
  },
]

export const Menu: React.FC<Props> = ({ setMenuVisible }) => {
  const handleToLink = () => {
    setMenuVisible(false);
  }

  return (
    <menu className="menu">
      <ul className="menu__links">
        {array.map(link =>
          <a
            key={link.id}
            href={link.link}
            className="menu__link"
            onClick={() => handleToLink()}
          >
            {link.title}
          </a>
        )}
      </ul>

      <Link
        to="tel:+380978404161"
        className="menu__phone">
        +38 (097) 840-41-61
      </Link>
    </menu>
  )
}
