import React from 'react';
import './App.css';

import Header from "./components/Header"
import Footer from "./components/Footer"
import LoginMainContent from "./components/LoginPage/LoginMainContent"
import LinkMainContent from './components/ContentPages/LinkPage/LinkMainContent';
import MyAccountMainContent from './components/ContentPages/MyAccountPage/MyAccountMainContent';
import MyCrawlsMainContent from './components/ContentPages/MyCrawlsPage/MyCrawlsMainContent';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import IndexCrawling from './components/ContentPages/CrawlingPage/IndexCrawling';


function App() {
  return (
      <body>
        <center>
          <div className='background'>
          <Header />

          {/* 
          A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. 
          */}
          <Router>
            <Switch>
              <Route exact path="/" component={LoginMainContent} />  
              <Route path="/new-crawl" component={LinkMainContent} />
              <Route path="/start-crawling" component={IndexCrawling} />
              <Route path="/my-account" component={MyAccountMainContent} />
              <Route path="/my-crawls" component={MyCrawlsMainContent} />
            </Switch>
          </Router> 

          <Footer />
          </div>
        </center>
      </body>
  );
}

export default App;
