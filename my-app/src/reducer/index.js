const defaultState = {
    inputValue: "",
    list: ["one", "two", "three"]
}

/** reducer必须返回一个函数
 * 在每次组件发起状态的改变时都会收到一个previousState与action
 */
const reducers = (state = defaultState, action) => {
    if (action.type === "change_input_value") {
        // 对previousState数据进行深拷贝
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === "add_todo_item") {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
    }
    return state;
}

export default reducers;