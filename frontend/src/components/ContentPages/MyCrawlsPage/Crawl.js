import React from "react"
import deleteIcon from "../../../media/delete-icon.png"
import editIcon from "../../../media/edit-icon-new.png"


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
        }
    }

    //not work for now
    showPeriod = () => {
        if (this.props.period == 10) return <text>10 sec</text>
        else if (this.props.period == 60 || this.props.period == 600) return <text>{this.props.period}min</text>
        else return <text>{this.props.period}h</text>
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
                <DialogTitle id="form-dialog-title">Edit your crawl</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Here will be some information that you can change
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Form"
                    type="email"
                    fullWidth
                />
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