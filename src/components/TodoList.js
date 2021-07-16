import React, {Component} from "react";
import { store } from "../App";
import TodoItem from "./TodoItem";
import {FilterType} from "../redux/const/todo"

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
        }
    }
    componentWillMount(){
        store.subscribe(() => {
            this.setState({
                items: store.getState().items ? store.getState().items : [],
                filter: store.getState().filter
            });
        });
    }

    render() {
        var items = [];
        var filter = this.state.filter;
        this.state.items.forEach((item,id)=>{
            if(filter === FilterType.FILTER_ALL || (filter === FilterType.FILTER_COMPLETED && item.completed)
            || (filter === FilterType.FILTER_UN_COMPLETED && !item.completed)){
                items.push(
                    <TodoItem 
                        key={id}
                        id={id}
                        text={item.text}
                        completed={item.completed}
                    />   
                );
            }
        });
        if(!items.length){
            return(
                <div>
                    <p>No result</p>
                </div>
            )
        }else{
            return(
                <ol>{items}</ol>
            )
        }
    }
}

export default TodoList;