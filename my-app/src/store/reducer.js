import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_LIST } from "./actionTypes";

const defaultState = {
    inputValue: "",
    list: ["one", "two", "three"]
}

/** reducer必须返回一个函数
 * 在每次组件发起状态的改变时都会收到一个previousState与action
 */
const reducers = (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        // 对previousState数据进行深拷贝
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
    }
    if (action.type === DEL_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    if (action.type === INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    return state;
}

export default reducers;