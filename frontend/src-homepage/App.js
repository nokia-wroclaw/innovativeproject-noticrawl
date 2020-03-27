import React from 'react';
import './App.css';

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

function App() {
  return (
      <body>
        <center>
          <Header />
          <MainContent />
          <Footer />
        </center>
      </body>
  );
}

export default App;
