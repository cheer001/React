import React, { Component } from "react";

class TodoItem extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { content } = this.props;
        return <div onClick={this.handleClick}>{content}</div>
    }
    handleClick() {
        // 调用父组件的 handleItemDelete 方法
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }

}

export default TodoItem;