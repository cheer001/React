import { createStore } from "redux";
import reducer from "../reducer";

const store = createStore(
    reducer,
    // 如果开发者工具中安装了redux工具，就调用redux扩展函数
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;