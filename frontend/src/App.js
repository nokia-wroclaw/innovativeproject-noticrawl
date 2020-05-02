import React from 'react';
import './App.css';

import LoginMainContent from "./components/LoginPage/LoginMainContent"
import LinkMainContent from './components/ContentPages/LinkPage/LinkMainContent';
import MyAccountMainContent from './components/ContentPages/MyAccountPage/MyAccountMainContent';
import MyCrawlsMainContent from './components/ContentPages/MyCrawlsPage/MyCrawlsMainContent';
import Crawling from './components/ContentPages/CrawlingPage/Crawling';
import NotFoundPage from './components/ContentPages/NotFoundPage';

import Provider from './components/ContentPages/Provider';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";




function App() {
  return (
      <body>
          {/* 
          A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. 
          */}
          <Provider>
            <Router>
              <Switch>
                <Route exact strict path="/" component={LoginMainContent} />  
                <Route exact strict path="/new-crawl" component={LinkMainContent} />
                <Route exact strict path="/new-crawl/start-crawling" component={Crawling} />
                <Route exact strict path="/my-account" component={MyAccountMainContent} />
                <Route exact strict path="/my-crawls" component={MyCrawlsMainContent} />
                <Route exact strict path="/404" component={NotFoundPage} />
                <Redirect to="/404" />
              </Switch>
            </Router> 
          </Provider>
      </body>
  );
}

export default App;
