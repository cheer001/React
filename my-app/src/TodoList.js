import React, { Component } from "react";
import 'antd/dist/antd.css';
import store from "./store";
import { getAddItemAction, getDelItemAction, getInputChangeValueAction } from "./store/actionCreators";
import TodoListUI from "./TodoListUI";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleStoreChange={this.handleStoreChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }
    /**
     * 处理Input改变事件
     * @param {*} e e表示element
     */
    handleInputChange(e) {
        const action = getInputChangeValueAction(e.target.value);
        store.dispatch(action);
    }

    /**
     * 处理Store改变事件
     */
    handleStoreChange() {
        this.setState(store.getState());
    }

    /**
     * 处理提交事件
     */
    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }

    /**
     * 删除Item
     * @param {*} index item的索引
     */
    handleItemDelete(index) {
        const action = getDelItemAction(index);
        store.dispatch(action);
    }
}
export default TodoList;