import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

/** 构建扩增展器 */
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

// 通过构建扩展器调用 申请中间间函数，传入中间件(在actionCreator中可以返回函数)
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

// 创建store时加入扩展器
const store = createStore(reducer, enhancer);

export default store;