import React from 'react';
import logo from './logo.png'

import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class TopBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
        notificationFrequency: "",
        xpath: ""
      },
    }
  }

  sendState = () => {
    if (this.props.borderState === "red")
    this.props.Callback("blue");
    else 
    this.props.Callback("red");
  }

  handleInputChange = e =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });


  render() {
    return(
      <div id='CrawlingBanner' >
          
      <div className='Logo'>
        <div className ='elements'>
          <img src={logo} alt="logo" height="40" width="167" />
        </div>
      </div>
      
      
      <div className='Status'>
        <div className ='elements'>
          <text className="textLeft">Recording is</text><text className="textRight"> ON</text>
        </div>
      </div>


      <div className='Bordering'>
        <div className='elements'>
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

      <div className='EmailInput'>
        <div className ='elements'>
        <FormControl style={{ width:'30ch', paddingTop:'8px'}} >
          <TextField 
            size="small"
            id="filled-email" 
            label="E-mail" 
            type="text" 
            variant="filled" 
            onChange={this.handleInputChange}
            value={this.state.email}
            required
          />
        </FormControl>  
        </div>
      </div>

      <div className='NotificationFreq'>
        <div className ='elements'>
        <FormControl variant="filled" id="simple-select-outlined-label" style={{ width: '25ch', paddingTop:'8px', zIndex: '999999 !important'}} size="small">
          <InputLabel id="simple-select-outlined-label" style={{  paddingTop:'8px' }}>Notification frequency</InputLabel>
            <Select
              labelId="simple-select-outlined-label"
              id="simple-select-outlined"
              value={this.state.notificationFrequency}
              onChange={this.handleInputChange}
              label="notificationFrequency"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1/360}>10sec</MenuItem>
              <MenuItem value={1/60}>1min</MenuItem>
              <MenuItem value={1/6}>10min</MenuItem>
              <MenuItem value={0.5}>0.5h</MenuItem>
              <MenuItem value={1}>1h</MenuItem>
              <MenuItem value={6}>6h</MenuItem>
              <MenuItem value={12}>12h</MenuItem>
              <MenuItem value={24}>24h</MenuItem>
            </Select>
        </FormControl>
        </div>
      </div>

      <div className='SubmitButton'>
        <div className ='elements'>
          <Button
            variant="contained"
            color="primary"
            startIcon={<CloudUploadIcon />}
          >
            Submit
          </Button>
        </div>
      </div>
      
      {/*
      <div className='xPaths'>
        <div className ='elements'>
          <text id="status">Wait for it... or enable JavaScript.</text>
          <br /><text id="status2">Wait for it... or enable JavaScript.</text>
        </div>
      </div>
      */}

    </div>
    )
  }
}

export default TopBanner