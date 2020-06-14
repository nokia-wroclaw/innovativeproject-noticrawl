import React from "react"
import deleteIcon from "../../../media/delete-icon.png"
import editIcon from "../../../media/edit-icon-new.png"


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';

import { Link } from "react-router-dom";

class Crawl extends React.Component {
    constructor() {
        super()
        this.state = {
            editOpen: false,
            submit: "",
            values: {
                id: "",
                name: "",
                email: "",
                period: "",
              },
        }
    }


    //not work for now
    showPeriod = () => {
        if (this.props.period == 10) return <text>10 sec</text>
        else if (this.props.period == 60 || this.props.period == 600) return <text>{this.props.period}min</text>
        else return <text>{this.props.period}h</text>
    }


    handleInputChange = e => {
        this.setState({
          values: { ...this.state.values, [e.target.name]: e.target.value }
        });
      }


    handleClickOpenEdit = () => {
        this.setState({ editOpen: true })
    };
    
    //cancel button in edit form action 
    handleCloseEdit = () => {
        this.setState({ editOpen: false })
    };


    //edit button in edit form action
    handleSubmitEdit = async e => {

        if(this.state.values.id === "") {
            this.setState({
                values: { ...this.state.values, id: this.props.id }
              })
        }

        if(this.state.values.name === "") {
            this.setState({
                values: { ...this.state.values, name: this.props.name }
              })
        }

        if(this.state.values.email === "") {
            this.setState({
                values: { ...this.state.values, email: this.props.email }
              })
        }

        if(this.state.values.period === "") {
            this.setState({
                values: { ...this.state.values, period: this.props.period }
              })
        }


        e.preventDefault();


        const res = await fetch("/api/v1/crawling-data/tospecjalnie" + this.props.id, {
        method: "PATCH",
        body: JSON.stringify(this.state.values),
        headers: {
            "Content-Type": "application/json"
        },
        });
    
        ////////////// what has been sent to backend 
        console.log(JSON.stringify(this.state.values))
        //////////////
  
        if (res.ok) {
        setTimeout(
            () => {
            this.forceUpdate();
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

    render() {
        return (
        <div>
            <hr className="crawlBorder" />
            <div className="MyCrawlsElements">
                <div className="MyCrawlsText">
                    <text>Name: {this.props.name}</text>
                    <br />
                    <text><a href={this.props.link}>{this.props.link}</a></text>
                    <br />
                    <text>Checking period: {this.props.period}s (will be changed)</text>
                </div>
                <div className="MyCrawlsIcons">
                    <img src={editIcon} alt="Edit" height="28" width="28" onClick={this.handleClickOpenEdit} style={{"pointer-events": "all"}} />
                    <span></span><span></span>
                    <img src={deleteIcon} alt="Delete" height="28" width="28" />
                </div>
            </div>



            {/* edit dialog */}
            <Dialog open={this.state.editOpen} onClose={this.handleCloseEdit} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"><center>Crawl Edit</center></DialogTitle>
                <FormControl id="editCrawlForm" onSubmit={this.handleSubmitEdit} >
                    <DialogContent>
                    <DialogContentText>
                        If you want to change some information about your crawl, you can do it below by filling appropriate fields and clicking "Edit".
                    </DialogContentText>    
                    <br />
                    Actual name: {this.props.name}
                    <TextField
                        margin="dense"
                        id="name"
                        name="name"
                        label="New name"
                        type="text" 
                        value={this.state.values.name}
                        onChange={this.handleInputChange}
                        fullWidth
                    />
                    <br /><br />
                    <br />
                    Actual e-mail: {this.props.email}
                    <TextField
                        margin="dense"
                        id="email"
                        name="email"
                        label="New e-mail"
                        type="text"
                        value={this.state.values.email}
                        onChange={this.handleInputChange}
                        fullWidth
                    />
                    <br /><br />
                    <br />
                    Actual checking period: {this.props.period}
                    <br /><br />
                    <DialogContentText>New checking period:</DialogContentText>
                    <Select
                        labelId="simple-select-outlined-label"
                        id="simple-select-outlined"
                        name="period"
                        value={this.state.values.period}
                        onChange={this.handleInputChange}
                        label="period"
                        fullWidth
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
                    <br /><br />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleCloseEdit} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleSubmitEdit} color="primary" type="submit"> 
                        Edit
                    </Button>
                    </DialogActions>
                </FormControl>
            </Dialog>

            <Link to={"/"}>
                <button id="redirectToHome" hidden="true"/>
            </Link>

        </div>
        )
    }
}

export default Crawl