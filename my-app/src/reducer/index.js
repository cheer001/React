const defaultState = {
    inputValue: "qqq",
    list: ["one", "two", "three"]
}

/** reducer必须返回一个函数 */
export default (state = defaultState, action) => {
    return state;
}