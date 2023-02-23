import React, {Component} from 'react';
class TodoForm extends Component {
    state = {
        title: "",
    }
    
    handleOnChange = (evt) =>{
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }
    handleSubmit = evt =>{
        evt.preventDefault();
        this.props.addTodo(this.state);
        this.setState({ title: "" });
    }
    render(){
        return (
            <div className="TodoForm">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title: </label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        onChange={this.handleOnChange}
                        value={this.state.title}/>
                    <button><i class="fa-solid fa-floppy-disk"></i></button>
                </form>
            </div>
          );
    }
}

export default TodoForm;
