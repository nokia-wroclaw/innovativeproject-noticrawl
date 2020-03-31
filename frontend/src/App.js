import React from 'react';
import './App.css';

import Header from "./components/Header"
import MainContent from "./components/LoginPage/MainContentLogin"
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
