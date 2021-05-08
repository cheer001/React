import React, { Component, Fragment } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    render() {
        return (
            <Fragment>
                <div className={this.state.show ? "show" : "hide"}>hello</div>
                <button onClick={() => {
                    this.setState(() => ({ show: this.state.show ? false : true }))
                }}>toggle</button>
            </Fragment >
        )

    }
}

export default App;