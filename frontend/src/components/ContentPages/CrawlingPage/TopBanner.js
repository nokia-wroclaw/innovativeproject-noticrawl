import React from 'react';
import logo from '../../../media/logo.png'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Slide from '@material-ui/core/Slide';
import submitOk from "../../../media/oksubmit.jpg"

class TopBanner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      values: {
        name: "",
        email: "",
        period: "",
        xpath: "",
        url: this.props.url
      },
      isSubmitting: false,
      showConfirm: false
    };
  }


  useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

  classes = this.useStyles;

  TransitionSlide = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

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

    this.setState({ isSubmitting: true });
    
    //setting xpath
    var x = this.props.xpathFromParent();
    this.setState({
      values: { ...this.state.values, xpath: x }
    })

    await this.sleep(1000);

    console.log("Sent: " + JSON.stringify(this.state.values))

    const res = await fetch("/api/v1/crawling-data", {
      method: "POST",
      body: JSON.stringify(this.state.values),
      headers: {
        "Content-Type": "application/json"
      },
    });


    this.setState({ isSubmitting: false });

    if (res.ok) {
      setTimeout(
        () => {
          this.setState({
            showConfirm: true,
          })
        },
        1600
      );
    }
    else if (res.status == 401) {
      alert("User not logged in!")
      document.getElementById("redirectToHome").click()
    } 
    else if (res.status == 422){
      alert("422: Validation Error!")
    } 
    else {
      alert("Oops, something went wrong! Try again!")
    }
  }

  handleCloseConfirm = () => {
    this.setState({ showConfirm: false })
  };


  render() {
    return(

    <div id='CrawlingBanner' >
        
      <div className='Logo'>
        <div className ='elements'>
          <a href="/">
          <img src={logo} alt="logo" height="40" width="167" />
          </a>
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

        <div className='TextInput'>
          <div className ='elements'>
            <FormControl id="crawlingForm" style={{ width:'20ch', paddingTop:'8px'}} >
              <TextField 
                  size="small"
                  id="filled-name" 
                  label="Crawl's name" 
                  type="text" 
                  name="name"
                  variant="filled" 
                  onChange={this.handleInputChange}
                  value={this.state.values.name}
                  required
                />
            </FormControl>  
          </div>
        </div>

        <div className='TextInput'>
          <div className ='elements'>
            <FormControl id="crawlingForm" style={{ width:'30ch', paddingTop:'8px'}} >
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
                    <MenuItem value={10}>10sec</MenuItem>
                    <MenuItem value={60}>1min</MenuItem>
                    <MenuItem value={600}>10min</MenuItem>
                    <MenuItem value={1800}>0.5h</MenuItem>
                    <MenuItem value={3600}>1h</MenuItem>
                    <MenuItem value={21600}>6h</MenuItem>
                    <MenuItem value={43200}>12h</MenuItem>
                    <MenuItem value={86400}>24h</MenuItem>
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

      <Link to={"/"}>
            <button id="redirectToHome" hidden="true"/>
      </Link>


      {/* loading */}
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="sm"
        fullWidth={true}
        aria-labelledby="confirmation-dialog-title"
        open={this.state.isSubmitting}
        TransitionComponent={this.TransitionSlide}
        keepMounted
        >
          <br /><br />
              <DialogContent dividers>
                  <DialogTitle>
                    <center>
                      <div>
                        Please wait...
                      </div>
                      <div>
                        We're sending your Crawl.
                      </div>
                      <br />
                      <div className={this.classes.root}>
                        <CircularProgress />
                      </div>
                    </center>
                  </DialogTitle>
              </DialogContent>
      </Dialog>

      {/* confirmation */}
      <Dialog
                maxWidth="sm"
                fullWidth={true}
                aria-labelledby="confirmation-dialog-title"
                open={this.state.showConfirm}
                onClose={this.handleCloseConfirm} 
            >
            <br />
                <DialogContent dividers>
                    <DialogTitle>
                        <center>Crawl added</center>
                        <br /> <br />
                        <center><img src={submitOk} alt="OK" height="340" width="370"  /></center>
                    </DialogTitle>
                </DialogContent>
            <DialogActions>
                <Button onClick={this.handleCloseConfirm} color="primary">
                    OK
                </Button>
        </DialogActions>
    </Dialog>



    </div>
    )
  }
}



export default TopBanner