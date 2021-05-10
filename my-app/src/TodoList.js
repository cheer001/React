import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Input, Button, List } from "antd";
import store from "./store";
import { getAddItemAction, getDelItemAction, getInputChangeValueAction } from "./store/actionCreators";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInpurChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <div style={{ marginTop: 10, marginLeft: 10 }}>
                <div>
                    <Input
                        value={this.state.inputValue}
                        placeholder="todo info"
                        style={{ width: 300, marginRight: 10 }}
                        onChange={this.handleInputChange}
                    />
                    <Button
                        type="primary"
                        onClick={this.handleBtnClick}
                    >
                        提交
                        </Button>
                </div>
                <List
                    style={{ marginTop: 10, width: 300 }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item
                            onClick={this.handleItemDelete.bind(this, index)}
                        >
                            {item}
                        </List.Item>
                    )}
                />
            </div>
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