import { useState } from 'react'
import './index.css';
import Header from './components/Header';
import CardSection from './components/Section1';
import ClassesSection from './components/Section2';
import  BmiCalculator from './components/Section3';
import Trainers from './components/Section4';
import Purchases from './components/Section5';
import Review from './components/Section6';
import Contact from './components/Section7';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <CardSection />
      <ClassesSection />
      <BmiCalculator />
      <Trainers />
      <Purchases />
      <Review />
      <Contact />
      <Footer />
    </>
      
  )
}

export default App