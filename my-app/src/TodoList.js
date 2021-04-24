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
                    <button>提交</button>
                </div>
                <ul>
                    <li>学英语</li>
                    <li>learn React</li>
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
            inputValue:e.target.value
        });
    }
}
export default TodoList;