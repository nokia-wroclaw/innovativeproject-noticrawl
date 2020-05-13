import React from 'react';
import './css/App.css';
import LoginRegisterContentBox from "./components/LoginRegisterPage/LoginRegisterContentBox"
import NewCrawlContentBox from './components/ContentPages/NewCrawlPage/NewCrawlContentBox';
import MyAccountContentBox from './components/ContentPages/MyAccountPage/MyAccountContentBox';
import MyCrawlsContentBox from './components/ContentPages/MyCrawlsPage/MyCrawlsContentBox';
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
              <Route exact strict path="/" component={LoginRegisterContentBox} />  
              <Route exact strict path="/my-account" component={MyAccountContentBox} />
              <Route exact strict path="/my-crawls" component={MyCrawlsContentBox} />
              <Route exact strict path="/new-crawl" component={NewCrawlContentBox} />
              <Route path="/new-crawl/start-crawling" component={Crawling} />
              <Route exact strict path="/404" component={NotFoundPage} />
              <Redirect to="/404" />
            </Switch>
          </Router> 
      </body>
  );
}

export default App;
