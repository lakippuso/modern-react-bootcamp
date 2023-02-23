import React, {Component} from 'react';
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm';
import { v4 } from 'uuid'; 
import './TodoList.css';
class TodoList extends Component {
    state = {
        todos: []
    }
    addTodo = todo => {
        var newTodo = {...todo, id: v4()};
        this.setState(state =>({
            todos: [...state.todos, newTodo]
        }))
    }
    removeTodo = todo =>{
        var newTodos = this.state.todos;
        newTodos.forEach( (t, index) => {
            if(t.id === todo){
                newTodos.splice(index, 1);
            }
        });
        this.setState({
            todos: newTodos
        });
    }
    editTodo = ( title, id ) =>{
        var newTodos = this.state.todos;
        newTodos.forEach( t => {
            if(t.id === id){
                t.title = title;
            }
        });
        this.setState({
            todos: newTodos
        });
        console.log(this.state);
    }
    render(){
        return (
            <div className="TodoList">
                <div className="TodoList-header">
                    <h1>TodoList</h1>
                </div>
                <ul>
                    {this.state.todos.map( t => 
                        <Todo key={t.id} 
                            title={t.title} 
                            removeTodo={() => this.removeTodo(t.id)}
                            editTodo={title => this.editTodo(title, t.id)} />
                    )}
                </ul>
                <TodoForm addTodo={this.addTodo}/>
            </div>
          );
    }
}

export default TodoList;
