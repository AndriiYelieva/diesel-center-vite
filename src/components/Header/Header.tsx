import React, { useEffect, useState } from 'react'
import "./Header.scss";

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (menuVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuVisible]);

  const toggleMenu = () => {
    setMenuVisible(prevMenuVisible => !prevMenuVisible);
  };

  return (
    <header className="header">
      <button
        className="header__logo"
      />

      <button
        className="header__menu"
      />
    </header>
  )
}
