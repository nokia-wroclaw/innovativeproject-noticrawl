import React from 'react';
import logo from './logo.png'


class TopBanner extends React.Component {


      sendState = () => {
      if (this.props.borderState == "red")
      this.props.Callback("blue");
      else 
      this.props.Callback("red");
    }
  render() {
          
          return (
            <div id='CrawlingBanner' >
          
            <div className='Logo'>
              <div className ='elements'>
                <img src={logo} alt="logo" height="40" width="167" />
              </div>
            </div>
            
            
            <div className='StatusBox'>
              <div className ='elements'>
                <h4>Recording is ON</h4>
              </div>
            </div>
            
            <div className='Setting1'>
              <div className ='elements'>
              Bordering
              <br></br>
              <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
          onChange={this.sendState}
          defaultChecked
        />
        <label className="toggle-switch-label" htmlFor="toggleSwitch">
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>

              </div>
            </div>
  
            <div className='Setting2'>
              <div className ='elements'>
                <h4>something</h4>
              </div>
            </div>
  
            <div className='SubmitButton'>
              <div className ='elements'>
                <button className='submit'>Submit</button>
              </div>
            </div>
  
            <div className='xPaths'>
              <div className ='elements'>
                <text id="status">Wait for it... or enable JavaScript.</text>
                <br /><text id="status2">Wait for it... or enable JavaScript.</text>
              </div>
            </div>
    
          </div>
          );
      }
      
  }

export default TopBanner