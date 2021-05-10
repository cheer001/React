import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DEL_TODO_ITEM } from "./actionTypes";

/**
 * Input改变事件的action
 * @param {*} value 输入框的值
 * @returns 
 */
export const getInputChangeValueAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

/**
 * 添加Item的action
 * @returns 
 */
export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM,
});

/**
 * 删除Item的action
 * @param {*} index item的索引
 * @returns 
 */
export const getDelItemAction = (index) => ({
    type: DEL_TODO_ITEM,
    index
});