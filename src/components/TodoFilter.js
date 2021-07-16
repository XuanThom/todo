import React, {Component} from 'react';
import {store} from '../App';
import { filterTodo } from '../redux/actions';
import {FilterType} from '../redux/const/todo'

class TodoFilter extends Component {
  constructor(props){
    super(props);
    this.state = {
      option: FilterType.FILTER_ALL
    };
  }
  componentWillMount(){
    store.subscribe(()=>{
      this.setState({
        option: store.getState().filter
      })
    });
  }
  filterSelected(e){
    var selected = e.target.value;
    this.setState({
      option: selected
    });
    store.dispatch(filterTodo(selected));
  }
  render(){
    return(
      <div className="filter">
        <label><input type="radio" name="filterTodo" value={FilterType.FILTER_ALL} 
            checked={this.state.option === FilterType.FILTER_ALL} 
            onChange={(e)=>this.filterSelected(e)}/>All</label>
        <label><input type="radio" name="filterTodo" value={FilterType.FILTER_COMPLETED} 
            checked={this.state.option === FilterType.FILTER_COMPLETED} 
            onChange={(e)=>this.filterSelected(e)}/>Completed</label>
        <label><input type="radio" name="filterTodo" value={FilterType.FILTER_UN_COMPLETED} 
            checked={this.state.option === FilterType.FILTER_UN_COMPLETED} 
            onChange={(e)=>this.filterSelected(e)}/>Un Completed</label>
      </div>
    );
  }
}

export default TodoFilter;