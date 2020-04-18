
import React from 'react';

//importing received from backend html in LinkInput file
import {externalPageToRender} from '../LinkPage/LinkInput'

//rendering external html
class ExternalHtml extends React.Component {

  /*
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
    };
  }
  */
  
  render() {
    
    //const { hits } = this.state;
    return (
      externalPageToRender

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
*/