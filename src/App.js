import React from "react";
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './container';
import { CTA, Brand, Navbar } from './components';
import './container/App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
