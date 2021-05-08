import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            list: []
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);

    }
    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) => (
                            <CSSTransition
                                key={index}
                                timeout={1000}
                                classNames="fade"
                                // unmountOnExit
                                onEntered={(el) => { el.style.color = 'blue' }}
                                onExited={(el) => { el.style.color = 'red' }}
                                appear={true}
                            >
                                <div>{item}</div>
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup>

                <button onClick={this.handleAddItem}>addItem</button>
            </Fragment >
        )
    }

    handleToggle() {
        this.setState(
            () => ({
                show: this.state.show ? false : true
            })
        );
    }

    handleAddItem() {
        this.setState(
            (prveState) => ({
                list: [...prveState.list, 'item']
            })
        );
    }
}

export default App;