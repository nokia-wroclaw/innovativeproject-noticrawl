import React from "react"
import deleteIcon from "../../../media/delete-icon.png"
import editIcon from "../../../media/edit-icon.png"

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
import Slide from '@material-ui/core/Slide';

import { Link } from "react-router-dom";

class Crawl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editOpen: false,
            deleteOpen: false,
            submit: "",
            values: {
            },
            valuesToDelete: {

            }
        }
    }

    Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });

    handleInputChange = e => {
        this.setState({
          values: { ...this.state.values, [e.target.name]: e.target.value }
        });
      }
    
    //opening edit popup
    handleClickOpenEdit = () => {
        this.setState({ editOpen: true })
    };
    
    //cancel button in edit form action 
    handleCloseEdit = () => {
        this.setState({ editOpen: false })
    };

    //edit button in edit form action
    handleSubmitEdit = async e => {

        e.preventDefault();

        const res = await fetch("/api/v1/crawling-data/" + this.props.id, {
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
                window.location.reload(true); 
            },
            100
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

     //opening delete popup
    handleClickOpenDelete = () => {
        this.setState({ deleteOpen: true })
    };
    
    //cancel button in delete form action 
    handleCloseDelete = () => {
        this.setState({ deleteOpen: false })
    };

    //delete button in delete form action
    handleSubmitDelete = async e => {
        e.preventDefault();

        const res = await fetch("/api/v1/crawling-data/" + this.props.id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        });
  
        if (res.ok) {
        setTimeout(
            () => {
                window.location.reload(true); 
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

        let showPeriod;
        if (this.props.period == 10) showPeriod = <text>10s</text>
        else if (this.props.period == 60 || this.props.period == 600 || this.props.period == 1800) showPeriod = <text>{this.props.period/60}min</text>
        else showPeriod = <text>{this.props.period/3600}h</text>

        return (
        <div>
            <hr className="crawlBorder" />
            <div className="MyCrawlsElements">
                <div className="MyCrawlsText">
                    <text>Name: {this.props.name}</text>
                    <br />
                    <text><a href={this.props.link}>{this.props.link}</a></text>
                    <br />
                    <text>Checking period: {showPeriod} </text>
                </div>
                <div className="MyCrawlsIcons">
                    <img src={editIcon} alt="Edit" height="35" width="35" onClick={this.handleClickOpenEdit} style={{"pointer-events": "all"}} />
                    <span></span><span></span>
                    <img src={deleteIcon} alt="Delete" height="35" width="35" onClick={this.handleClickOpenDelete} style={{"pointer-events": "all"}}/>
                </div>
            </div>


            {/* edit dialog */}
            <Dialog 
                open={this.state.editOpen} 
                onClose={this.handleCloseEdit} 
                aria-labelledby="form-dialog-title" 
                TransitionComponent={this.Transition}
                keepMounted
            >
                <br /><br />    
                <DialogTitle id="form-dialog-title"><center>Crawl Edit</center></DialogTitle>
                <FormControl id="editCrawlForm" onSubmit={this.handleSubmitEdit} >
                    <DialogContent dividers>
                    <DialogContentText>
                        If you want to change some information about your crawl, you can do it below by filling appropriate fields and clicking "Apply".
                    </DialogContentText>    
                    <br />
                    Current name: {this.props.name}
                    <TextField
                        margin="dense"
                        name="name"
                        label="New name"
                        type="text" 
                        value={this.state.values.name}
                        onChange={this.handleInputChange}
                        fullWidth
                    />
                    <br /><br />
                    <br />
                    Current e-mail: {this.props.email} 
                    <TextField
                        margin="dense"
                        name="email"
                        label="New e-mail"
                        type="email"
                        value={this.state.values.email}
                        onChange={this.handleInputChange}
                        fullWidth
                    />
                    <br /><br />
                    <br />
                    Current checking period: {showPeriod} 
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
                    <br /><br />
                    <DialogContentText>
                        Your edited crawl will be shown on the bottom of the list. 
                    </DialogContentText>  
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleCloseEdit} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleSubmitEdit} color="primary" type="submit"> 
                        Apply
                    </Button>
                    </DialogActions>
                </FormControl>
            </Dialog>

            <Link to={"/"}>
                <button id="redirectToHome" hidden="true"/>
            </Link>


            {/* delete confirmation dialog */}
            <Dialog
                maxWidth="sm"
                fullWidth={true}
                aria-labelledby="confirmation-dialog-title"
                open={this.state.deleteOpen}
                TransitionComponent={this.Transition}
                keepMounted
                onClose={this.handleCloseDelete} 
            >
            <br /><br />
                <DialogContent dividers>
                    <DialogTitle>
                        <center>Wait... Are you sure?</center>
                        <br />
                        <center>You really want to delete this crawl? :(</center>
                    </DialogTitle>
                </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={this.handleCloseDelete} color="primary">
                    Cancel
                </Button>
                <Button onClick={this.handleSubmitDelete} color="primary">
                    Yes, delete it
                </Button>
        </DialogActions>
    </Dialog>

        </div>
        )
    }
}

export default Crawl