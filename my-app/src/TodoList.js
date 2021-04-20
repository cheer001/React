import React, { Component,Fragment } from "react";

class TodoList extends Component {
    render() {

        return (
            <Fragment>
                <div>
                    <input />
                    <input type="submit" />
                </div>
                <ul>
                    <li>学英语</li>
                    <li>learn React</li>
                </ul>
            </Fragment>
        )
    }
}
export default TodoList;