import {Types} from "../const/todo";

export function addTodo(text){
    return {
        type: Types.ADD_TODO,
        text: text,
    } 
};

export function completeTodo(id){
    return {
        type: Types.COMPLETED_TODO,
        id: id
    }
};

export function deleteTodo(id){
    return {
        type: Types.DELETE_TODO,
        id: id
    }
};

export function filterTodo(value){
    return {
        type: Types.FILTER_TODO,
        filter:value,
    }
}
