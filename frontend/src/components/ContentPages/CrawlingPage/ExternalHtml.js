import React from 'react';
import { useLocation } from 'react-router-dom';

//rendering external html
function ExternalHtml () {

const takeExternalPageToRender =  useLocation();

    return (
      <div>    
        <div dangerouslySetInnerHTML={{ __html: takeExternalPageToRender.state.externalPageToRender }} />
      </div>
    );

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






import React from 'react';
import { useLocation } from 'react-router-dom';

//import{MContext, Consumer} from "../Provider";

//importing received from backend html in LinkInput file
//import {externalPageToRender} from '../LinkPage/LinkInput'

//rendering external html
function ExternalHtml () {

const externalPageToRender =  useLocation();

    return (
      <div>

    <h1>{html(externalPageToRender.state.externalPageToRender)}</h1>

        {/*
      <MContext.Consumer>
        {(context) => (
         <h1>{context.state.message}</h1>)}
      </MContext.Consumer>
        

        </div>

        );
    
      }
    export default ExternalHtml;


*/