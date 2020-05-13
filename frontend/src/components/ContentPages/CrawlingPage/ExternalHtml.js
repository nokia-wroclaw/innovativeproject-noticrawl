import React from 'react';
import { useLocation } from 'react-router-dom';

//rendering external html
function ExternalHtml() {

  const takeExternalPageToRender =  useLocation();

  return (
    <div>
      <iframe
        title="pageFrame"
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

      {/* old way
      <div dangerouslySetInnerHTML={{ __html: takeExternalPageToRender.state.externalPageToRender }} /> 
      */}

    </div>
  );

}
export default ExternalHtml;