import React from "react"
import deleteIcon from "../../../media/delete-icon.png"
import editIcon from "../../../media/edit-icon-new.png"


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class Crawl extends React.Component {
    constructor() {
        super()
        this.state = {
            editOpen: false,
            values: {
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
    
    handleCloseEdit = () => {
        this.setState({ editOpen: false })
    };

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
                <DialogContent>
                <DialogContentText>
                    If you want to change some information about your crawl, you can do it below by filling appropriate fields and clicking "Edit".
                </DialogContentText>
                <br />
                Actual name: {this.props.name}
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="New name"
                    value={this.state.values.name}
                    onChange={this.handleInputChange}
                    fullWidth
                />
                <br /><br />
                <br />
                Actual e-mail: {this.props.email}
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="New e-mail"
                    value={this.state.values.email}
                    onChange={this.handleInputChange}
                    type="email"
                    fullWidth
                />
                <br /><br />
                <br />
                Actual checking period: {this.props.period}s
                <br /><br />
                <InputLabel id="simple-select-outlined-label" style={{  paddingTop:'8px' }}>Checking period</InputLabel>
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
                <Button onClick={this.handleCloseEdit} color="primary">
                    Edit
                </Button>
                </DialogActions>
            </Dialog>

        </div>
        )
    }
}

export default Crawl