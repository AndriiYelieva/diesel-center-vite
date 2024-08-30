import React from 'react'
import "./Diagnostics.scss";
import { Link } from '../../../../components/Link/Link';

import diagnosticsPicture from "../../../../images/photos/diagnostics__picture.png"

export const Diagnostics = () => {
  return (
    <section className="diagnostics">
      <h3 className="diagnostics__title">Телефонуйте і записуйтесь на діагностику форсунок</h3>

      <p className="diagnostics__description">
        Ми використовуємо лише оригінальні деталі та сучасне обладнання
      </p>
      <Link title="+38 (097) 840-41-61" />
      <img
        src={diagnosticsPicture}
        alt="picture"
        className="diagnostics__image"
      />
    </section >
  )
}
