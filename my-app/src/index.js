import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList';
// import App from "./ClassApp";
import App from "./HooksApp";

// ReactDOM的render方法吧第一个参数中的组件挂载到第二个参数的DOM节点上
ReactDOM.render(
  <React.StrictMode>
    {/* <TodoList /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

