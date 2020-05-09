import React from 'react';
import { useLocation } from 'react-router-dom';

//rendering external html
function ExternalHtml() {

  const takeExternalPageToRender =  useLocation();

  return (
    <div>
      <iframe
        id="pageFrame"
        name="pageFrame"
        src={takeExternalPageToRender.state.externalPageToRender}
        srcDoc={takeExternalPageToRender.state.externalPageToRender}
        allow="fullscreen"
        importance="high"
        referrerPolicy="unsafe-url"
        sandbox="allow-popups allow-scripts allow-same-origin"
        frameBorder="100"
      />

      {/* <div dangerouslySetInnerHTML={{ __html: takeExternalPageToRender.state.externalPageToRender }} /> */}

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

*/