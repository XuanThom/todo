import logo from './logo.svg';
import './App.css';
import {createStore} from "redux";
import { todoApp } from './redux/reducers/index';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

var defaultState = {
  items: [],
}

var store = createStore(todoApp, defaultState);

function App() {
  return (
    <div className="App">
        <h1>Todo App</h1>
        <TodoFilter />
        <AddTodoForm />
        <TodoList />
        
    </div>
    
  );
}

export default App;
export {store};
