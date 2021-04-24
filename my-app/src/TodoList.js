import React, { Component, Fragment } from "react";

class TodoList extends Component {

    // 最优先执行的函数
    constructor(props) {
        super(props);
        /** 管理组件的状态 */
        this.state = {
            /** input输入框中的值 */
            inputValue: '',
            /** 列表中的每一项 */
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input
                        // 使用ES6语法中的bind函数改变this的指向
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.inputValue} />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={this.handleItemDelete.bind(this, index)}>
                                    {item}
                                </li>)
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        // 没用bind绑定this指向前，this指向当前函数，绑定后this指向当前组件
        // console.log(this);
        // console.log(e.target.value);
        // this.state.inputValue = e.target.value;  // 不能直接使用get数据
        this.setState({
            inputValue: e.target.value
        });
    }
    handleBtnClick() {
        this.setState({
            // 展开list之前的数据，并添加现有inputValue到list中
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleItemDelete(index) {
        // immutable 概念： state不允许我们做任何改变
        // 解决方案： 将数组进项拷贝，然后修改副本
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list
        });

        // 错误写法
        // this.state.list.splice(index, 1);
        // this.setState({
        //     list: this.state.list
        // });
    }
}
export default TodoList;