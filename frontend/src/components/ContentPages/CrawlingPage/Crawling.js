import React from 'react';
import ExternalHtml from './ExternalHtml';
import '../../../css/Crawling.css';
import RenderBanner from './RenderBanner';



class Crawling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      borderState: 0
    };
  }

  callbackFunction = (borderSwitchState) => {
    this.setState({ borderState: borderSwitchState });
    console.log(this.state.borderState)
    document.getElementById("pageFrame").contentWindow.TurnOffBordering = this.state.borderState;
    document.getElementById("pageFrame").contentWindow.UpdateBorders();
  };

  TakeXpath (){
    let takeXpath = document.getElementById("pageFrame").contentWindow.xpathIframe;
    return takeXpath
  }

  render() {
    return (
      <div>
        <RenderBanner Callback={this.callbackFunction} borderState={this.state.borderState} xpathFromParent={this.TakeXpath} />
        <div id='Content'>
          <ExternalHtml />          
        </div>
      </div>
    
    );
  }
}


export default Crawling;