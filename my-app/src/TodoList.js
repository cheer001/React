import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import "./style.css";

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

        // 使用ES6语法中的bind函数改变this的指向
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        const { inputValue } = this.state;
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容：</label>
                    <input
                        id="insertArea"
                        className="input"
                        onChange={this.handleInputChange}
                        value={inputValue} />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        this.setState(() => {
            const inputValue = e.target.value;
            return { inputValue }
        })
    }
    handleBtnClick() {
        // precState: 修改前的数据
        this.setState((prevState) => {
            return { list: [...prevState.list, prevState.inputValue], inputValue: "" }
        })
    }
    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return { list }
        })
    }

    getTodoItem() {
        return (
            this.state.list.map((item, index) => {
                return (
                    <TodoItem
                        key={index}
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />
                )
            })
        )
    }
}
export default TodoList;