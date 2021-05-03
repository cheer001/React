import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount() {
        console.log("child componentWillMount");
    }

    shouldComponentUpdate() {
        console.log("child shouldComponentUpdate");
        // 返回true执行后面的生命周期函数，false则不执行
        return true;
    }
    componentWillUpdate() {
        console.log("child componentWillUpdate");
    }
    componentDidUpdate() {
        console.log("child componentDidUpdate");
    }

    componentWillReceiveProps() {
        console.log("child componentWillReceiveProps");
    }

    componentWillUnmount() {
        console.log("child componentWillUnmount");
    }


    render() {
        console.log("child render");
        const { content, test } = this.props;
        return <div onClick={this.handleClick}>{test}-{content}</div>
    }

    componentDidMount() {
        console.log("child componentDidMount");
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