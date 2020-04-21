import React, { Component } from 'react'

export const MContext = React.createContext();  //exporting context object]

class Provider extends Component {
state = {message: ""}
render() {
        return (
            <MContext.Provider value={
            {   state: this.state,
                setMessage: (value) => this.setState({
                            message: value })}}>
            {this.props.children}   {/* this indicates that the global store is accessible to all the child tags with MyProvider as Parent */}
            </MContext.Provider>)

        
    }
}

export default Provider