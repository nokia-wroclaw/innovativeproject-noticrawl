import React from 'react';
import './css/App.css';
import LoginRegister from "./components/LoginRegisterPage/LoginRegister"
import NewCrawl from './components/ContentPages/NewCrawlPage/NewCrawl';
import MyAccount from './components/ContentPages/MyAccountPage/MyAccount';
import MyCrawls from './components/ContentPages/MyCrawlsPage/MyCrawls';
import Crawling from './components/ContentPages/CrawlingPage/Crawling';
import NotFoundPage from './components/ContentPages/NotFoundPage';
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
          <Router>
            <Switch>
              <Route exact strict path="/" component={LoginRegister} />  
              <Route exact strict path="/my-account" component={MyAccount} />
              <Route exact strict path="/my-crawls" component={MyCrawls} />
              <Route exact strict path="/new-crawl" component={NewCrawl} />
              <Route path="/new-crawl/start-crawling" component={Crawling} />
              <Route exact strict path="/404" component={NotFoundPage} />
              <Redirect to="/404" />
            </Switch>
          </Router> 
      </body>
  );
}

export default App;
