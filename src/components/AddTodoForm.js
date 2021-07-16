import React, { Component } from "react";
import { store } from "../App";
import {addTodo} from "../redux/actions/index";

class AddTodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }
    
    onSubmit(e){
        e.preventDefault();
        var text = this.state.text;
        if(text){
            store.dispatch(addTodo(text));
        }
        this.setState({
            text: ''
        });
    }

    onTextChanged(e){
        this.setState({
            text: e.target.value
        })
    }

    render(){
        return (
            <div>
            <form onSubmit={(e) => this.onSubmit(e)}>
                <input className="input " type="text" placeholder="New task" onChange={(e)=>this.onTextChanged(e)} value={this.state.text}></input>
                <input className="btn" type="submit" value="Add"></input>
            </form>
            </div>
        )
    }

}

export default AddTodoForm;
