import React, { Component } from "react";

class TodoItem extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return <div onClick={this.handleClick}>{this.props.content}</div>
    }
    handleClick() {
        // 调用父组件的 handleItemDelete 方法
        this.props.deleteItem(this.props.index);
    }

}

export default TodoItem;