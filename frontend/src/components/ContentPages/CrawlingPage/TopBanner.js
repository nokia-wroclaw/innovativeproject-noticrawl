import React from 'react';
import logo from '../../../media/logo.png'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class TopBanner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
        period: "",
        xpath: "",
        value: "not supported",
        url: this.props.url
      },
      isSubmitting: false,
      isError: false
    };
  }

  sendState = () => {
    if (this.props.borderState)
    this.props.Callback(0);
    else 
    this.props.Callback(1);
  }

  handleInputChange = e => {
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  submitForm = async e => {
    e.preventDefault();

    //setting xpath
    var x = this.props.xpathFromParent();
    console.log("Wysyłany xpath: "+ x);
    this.setState({
      values: { ...this.state.values, xpath: x }
    })

    this.setState({ isSubmitting: true });

    await this.sleep(2000);

    ///////////// what will be send to backend
    console.log(JSON.stringify(this.state.values))
    /////////////

    //start communication with backend
    const res = await fetch("/api/v1/crawling-data", {
      method: "POST",
      body: JSON.stringify(this.state.values),
      headers: {
        "Content-Type": "application/json"
      },
    });

    ////////////// what has been sent to backend 
    console.log(JSON.stringify(this.state.values))
    //////////////

    this.setState({ isSubmitting: false });

    const data = await res.json();
    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success })
      : this.setState({ message: data.error, isError: true });


    setTimeout(
      () => {
        this.setState({
          isError: false,
        })
      },
      1600
    );
  }

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



<form onSubmit={this.submitForm}>

      <div className='EmailInput'>
        <div className ='elements'>
        <FormControl id="crawlingForm" style={{ width:'30ch', paddingTop:'8px'}} onSubmit={this.submitForm} >

          <TextField 
            size="small"
            id="filled-email" 
            label="E-mail" 
            type="text" 
            name="email"
            variant="filled" 
            onChange={this.handleInputChange}
            value={this.state.values.email}
            required
          />
        </FormControl>  
        </div>
      </div>

      <div className='NotificationFreq'>
        <div className ='elements'>
        <FormControl variant="filled" id="crawlingForm" style={{ width: '25ch', paddingTop:'8px'}} size="small">
          <InputLabel id="simple-select-outlined-label" style={{  paddingTop:'8px' }}>Notification frequency</InputLabel>
   
            <Select
              labelId="simple-select-outlined-label"
              id="simple-select-outlined"
              name="period"
              value={this.state.values.period}
              onChange={this.handleInputChange}
              label="period"
              required="true"
            >
              <MenuItem value="">
                <em>Choose one...</em>
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
          <FormControl id="crawlingForm">
            <Button
              variant="contained"
              color="primary"
              startIcon={<CloudUploadIcon />}
              type="submit"
            >
              Submit
            </Button>
          </FormControl>
        </div>
      </div>
      
</form>  
    </div>
    )
  }
}

export default TopBanner