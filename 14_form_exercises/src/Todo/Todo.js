import React, {Component} from 'react';
import './Todo.css';
class Todo extends Component {
    state = {
        isEdit: false,
        title: this.props.title,
        isDone: false,
    }
    handleRemove = evt => {
        this.props.removeTodo();
    }
    handleEdit = evt => {
        this.setState(state => ({isEdit: !state.isEdit}));
    }
    handleSave = evt => {
        this.props.editTodo(this.state.title);
        this.setState(state => ({isEdit: !state.isEdit}));
    }
    handleOnChange = evt =>{
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }
    handleIsDone = evt => {
        this.setState(state => ({isDone: !state.isDone}));
    }
    render(){

        return (
            <li className='Todo'>
                <div className="text">
                {this.state.isEdit
                    ?<input 
                        type="text" 
                        name="title" 
                        id="title" 
                        onChange={this.handleOnChange}
                        value={this.state.title}/>
                    : <span 
                        className={this.state.isDone ? 'done' : ''} 
                        onClick={this.handleIsDone}>{this.state.title}</span> }
                </div>
                <div className="buttons">
                    {this.state.isEdit
                        ?<button onClick={this.handleSave}><i class="fa-sharp fa-solid fa-floppy-disk"></i></button>
                        :<button onClick={this.handleEdit}><i class="fa-solid fa-pen-to-square"></i></button>
                    }
                    <button onClick={this.handleRemove}><i class="fa-solid fa-trash"></i></button>
                </div>
            </li>
          );
    }
}

export default Todo;