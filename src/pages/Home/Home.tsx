import React from 'react'
import "./Home.scss";
import { Contacts, Diagnostics, FAQ, Head, Makers, OurWork, Services, WhyUs } from './components';
import { Footer, Header } from '../../components';

export const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Head />
        <Services />
        <WhyUs />
        <Makers />
        <Diagnostics />
        <OurWork />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
