import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Input, Button, List, Typography } from "antd";

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class TodoList extends Component {

    render() {
        return (
            <div style={{ marginTop: 10, marginLeft: 10 }}>
                <div>
                    <Input placeholder="todo info" style={{ width: 300, marginRight: 10 }} />
                    <Button type="primary">提交</Button>
                </div>
                <List
                    style={{ marginTop: 10 }}
                    bordered
                    dataSource={data}
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