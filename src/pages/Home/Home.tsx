import React, { useState } from 'react'
import "./Home.scss";
import { Contacts, Diagnostics, FAQ, Head, Makers, OurWork, Services, WhyUs } from './components';
import { Footer, Header, Menu } from '../../components';
import classNames from 'classnames';

export const Home = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  if (menuVisible === true) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      <Header
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
      />
      <main
        className={classNames("main", {
          "main__size": menuVisible,
        })}>
        <Head />
        <Services />
        <WhyUs />
        <Makers />
        <Diagnostics />
        <OurWork />
        <FAQ />
        <Contacts />
      </main>

      {menuVisible && (
        <Menu setMenuVisible={setMenuVisible} />
      )}
      <Footer />
    </>
  )
}
