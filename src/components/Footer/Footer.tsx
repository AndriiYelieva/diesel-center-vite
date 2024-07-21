import React from 'react'
import "./Footer.scss";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <button
        className="footer__logo"
      />

      <Link
        to="tel:+380978404161"
        className="footer__phone"
      >
        +380978404161
      </Link>
    </footer>
  )
}
