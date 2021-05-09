import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Input, Button, List, Typography } from "antd";
import store from "./store";

class TodoList extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState());
        this.state = store.getState()
    }

    render() {
        return (
            <div style={{ marginTop: 10, marginLeft: 10 }}>
                <div>
                    <Input value={this.state.inputValue} placeholder="todo info" style={{ width: 300, marginRight: 10 }} />
                    <Button type="primary">提交</Button>
                </div>
                <List
                    style={{ marginTop: 10 }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item>
                            <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
export default TodoList;