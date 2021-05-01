import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import Test from "./Test";
import "./style.css";

class TodoList extends Component {

    // 最优先执行的函数
    constructor(props) {
        super(props);
        // 1. 创建Refs
        this.myDiv = React.createRef();
        // 当组件的state或者props发生改变的时候，render函数就会重新执行
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
        console.log("todolist render");
        const { inputValue } = this.state;
        return (
            <Fragment>
                {/* 2. 绑定Refs */}
                <div ref={this.myDiv}>
                    <label htmlFor="insertArea">输入内容：</label>
                    <input
                        id="insertArea"
                        className="input"
                        onChange={this.handleInputChange}
                        value={inputValue}
                        ref={(input) => {
                            this.input = input;
                        }}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul ref={(ul) => {
                    this.ul = ul;
                }}>
                    {this.getTodoItem()}
                </ul>
                <Test content={inputValue} />
            </Fragment>
        )
    }
    handleInputChange() {
        // 3.访问Refs
        console.log(this.myDiv.current);

        // 已经通过ref绑定到了this.input 中
        this.setState(() => {
            const inputValue = this.input.value;
            return { inputValue }
        })
    }
    handleBtnClick() {
        // precState: 修改前的数据
        this.setState((prevState) => {
            return {
                list: [...prevState.list, prevState.inputValue],
                inputValue: ""
            }
        },
            // 回调函数：第一个参数执行完后执行 
            () => {
                console.log(this.ul.querySelectorAll('div').length);
            });
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
                    // test="haha"
                    />
                )
            })
        )
    }
}
export default TodoList;