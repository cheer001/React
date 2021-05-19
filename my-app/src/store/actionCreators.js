import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DEL_TODO_ITEM, INIT_LIST } from "./actionTypes";
import axios from "axios";

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

/**
 * 初始化列表
 * @param {*} data 接口接收的数据
 * @returns 
 */
export const initListAction = (data) => ({
    type: INIT_LIST,
    data
});

/**
 * 获取todoList数据
 * @returns 
 */
export const getTodoList = () => {
    return (dispatch) => {
        axios.get("http://mengxuegu.com:7300/mock/60964e83c7b7385be0a82e32/reactstudy/getTodoList")
            .then((resp) => {
                const data = resp.data;
                const action = initListAction(data);
                dispatch(action);
            });
    }
}