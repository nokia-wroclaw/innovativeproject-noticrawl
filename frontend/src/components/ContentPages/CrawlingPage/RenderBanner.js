import React from 'react';
import { useLocation } from 'react-router-dom';
import TopBanner from './TopBanner';


//this functional component has been created to get access to url in TopBanner.js
function RenderBanner(props) {

  const takeUrl =  useLocation();

  return (
      <TopBanner Callback={props.Callback} borderState={props.borderState} xpathFromParent={props.xpathFromParent} url={takeUrl.state.url} />
  );
}
export default RenderBanner;

