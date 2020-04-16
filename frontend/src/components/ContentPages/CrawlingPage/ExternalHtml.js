
import React, { Component } from 'react';

//tutaj trzeba zaimportować zmienne z tego pliku
import {LinkInput, parsedPage} from '../LinkPage/LinkInput'

//tutaj będzie kiedyś wyświetlanie
class ExternalHtml extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
    };
  }
  
  render() {

    //test:
    alert(parsedPage)
    
    //const { hits } = this.state;
    return (
      parsedPage
      /*
      <ul>
        {hits.map(hit =>
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        )}
      </ul>
      */
    );
  }

}
export default ExternalHtml;


/*
oryginalne:

import React, { Component } from 'react';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class ExternalHtml extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
    };
  }
  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }
  
  render() {
    const { hits } = this.state;
    return (
      <ul>
        {hits.map(hit =>
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        )}
      </ul>
    );
  }

}
export default ExternalHtml;










import React, { Component } from 'react';
class ExternalHtml extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch('https://api.mydomain.com')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render(){
      return(
          <div>haha</div>
      )
  }
}
export default ExternalHtml;
*/