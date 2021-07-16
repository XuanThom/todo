import React,{Component} from "react";
import { store } from "../App"
import AddTodoForm from "./AddTodoForm";
import { deleteTodo, editTodo, completeTodo , editSubmitTodo} from "../redux/actions/index";

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
        }
    }
    onDeleteItem(e){
        e.preventDefault();
        store.dispatch(deleteTodo(this.props.id));
    }

    onItemClick(e) {
        e.preventDefault();
        store.dispatch(completeTodo(this.props.id));
    }

    render(){
        return (
            <li className="li-css">
                <table> 
                    <a className="todo-a" href="" onClick={(e) => this.onItemClick(e)} 
                    style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}>
                        {this.props.text}</a>
                    <button className="btn-delete" onClick={(e) =>{if(window.confirm('are you sure to delete this task?')){this.onDeleteItem(e)};}}>DELETE</button>
                </table>    
            </li>
        )
    }
}

export default TodoItem;