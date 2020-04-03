import React from 'react';
import ReactDOM from 'react-dom';
//import serviceWorker from ''
import Crawling from './Crawling'
import './Crawling.css';


function IndexCrawling() {
    return(
        ReactDOM.render(<Crawling />, document.getElementById('root'))
        )
}

export default IndexCrawling
