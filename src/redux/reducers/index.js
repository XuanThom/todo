import { combineReducers } from "redux";
import {Types, FilterType} from "../const/todo";

function todos(state = [], action){
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case Types.ADD_TODO:
            newState.push({
                text: action.text,
                completed: false,
            });
            break;
        case Types.COMPLETED_TODO:
            newState[action.id].completed = !newState[action.id].completed;
            break;

        case Types.DELETE_TODO:
            newState.splice(action.id, 1);
            break;

        default:
            break;
    }  
    return newState;
}

function filter(state = FilterType.FILTER_ALL, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
      case Types.FILTER_TODO:
        newState = action.filter;
        break;
      default:
        break;
    }
    return newState;
  }
  

export const todoApp = combineReducers({
    items: todos,
    filter: filter,
});