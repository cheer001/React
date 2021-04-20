import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

// ReactDOM的render方法吧第一个参数中的组件挂载到第二个参数的DOM节点上
ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);

