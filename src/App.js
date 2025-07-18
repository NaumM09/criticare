import React from 'react';
import Navbar from './components/Nav';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Products from './components/Products';
import AboutUs from './components/About';
import Process from './components/Process';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Partners />
      <Products />
      <AboutUs />
      <Process />
      <Footer />
    </div>
  );
}

export default App;