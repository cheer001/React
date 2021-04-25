import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { content, test } = this.props;
        return <div onClick={this.handleClick}>{test}-{content}</div>
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
    test: PropTypes.string
}

TodoItem.defaultProps = {
    // 父组件没有向子组件传递值时使用默认值，传递则会覆盖该值
    test: "hello world"
}

export default TodoItem;