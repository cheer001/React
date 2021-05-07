import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
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

TodoItem.propTypes = {
    // 指定content可以是数组中的任意一种类型
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteItem: PropTypes.func,
    index: PropTypes.number,
}

export default TodoItem;