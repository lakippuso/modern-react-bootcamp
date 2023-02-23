import React, {Component} from 'react';
class Todo extends Component {
    state = {
        isEdit: false,
        title: this.props.title,
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
    render(){

        return (
            <li>
                {this.state.isEdit
                    ?<input 
                        type="text" 
                        name="title" 
                        id="title" 
                        onChange={this.handleOnChange}
                        value={this.state.title}/>
                    : this.state.title}
                {this.state.isEdit
                    ?<button onClick={this.handleSave}><i class="fa-solid fa-floppy-disk-circle-arrow-right"></i></button>
                    :<button onClick={this.handleEdit}><i class="fa-solid fa-pen-to-square"></i></button>
                }
                <button onClick={this.handleRemove}><i class="fa-solid fa-trash"></i></button>
            </li>
          );
    }
}

export default Todo;