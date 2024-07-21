/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import "./Contacts.scss";
import { Link } from 'react-router-dom';
import map from "../../../../images/photos/map.png"

export const Contacts = () => {
  return (
    <section className="contacts">
      <h1 className="contacts__title">Контакти</h1>

      <div className="contacts__card">
        <h3 className="contacts__card--title">
          +38 (097) 840-41-61
        </h3>
        <h3 className="contacts__card--mail">
          yelieva96@gmail.com
        </h3>

        <p className="contacts__card--location">
          Вінниця, Привокзальна 5А
        </p>
      </div>

      <Link
        to="https://maps.app.goo.gl/rH6EEn2CCgLtQSzh6"
        className="contacts__map"
      >
        <img src={map} alt="map" />
      </Link>
    </section>
  )
}
