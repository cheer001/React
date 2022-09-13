import React, { useState, useCallback, useReducer, useMemo } from "react";

function Counter({ count }) {
  return <div style={{ fontSize: 18, fontWeight: "bold" }}>{count}</div>;
}

const Button = React.memo(function ({ children, onClick }) {
  console.log(`Button ${children} render`);
  return <button onClick={onClick}>{children}</button>;
});

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    default:
      throw new Error("请输入正确的Action");
  }
};

/**
 * TODO
 * 1.将提款页面使用useReducer 替换 useState 比较渲染时间
 * 2.将充值页面使用React.memo&useCallback 来 解决子组件重复渲染问题
 * 3.使用useMemo 解决页面数据过滤导致开销大的问题（例如：首页，左侧类型切换会过滤数据..）
 *    useMemo(()=>{},[依赖项]) 相当于Vue对象中的comouted 其作用都是 依赖项改变了才会执行函数
 * @returns
 */

/**
 * React渲染机制:
 * 只要改变了useState绑定的状态 就会重新渲染页面
 * @returns
 */

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;
  const [value, setValue] = useState("");

  const onClickIncrement = useCallback(
    () => dispatch({ type: "increment" }),
    [dispatch]
  );

  const onClickDecrement = useCallback(
    () => dispatch({ type: "decrement" }),
    [dispatch]
  );

  const expensive = useMemo(() => {
    console.log("expensive");
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += 1;
    }
    return sum;
  }, [count]);

  console.log("app");
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Counter count={count} />
      <Button onClick={onClickIncrement}>加一</Button>
      <Button onClick={onClickDecrement}>减一</Button>
      <p>expensive:{expensive}</p>
      <input value={value} onInput={(e) => setValue(e.target.value)} />
    </div>
  );
}

export default App;
