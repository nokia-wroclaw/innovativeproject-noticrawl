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


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
export default IndexCrawling
