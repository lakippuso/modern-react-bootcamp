import React, {Component} from 'react';
class NewBoxForm extends Component {
    state = {
        height: "",
        width: "",
        backgroundColor: "",
    }
    
    handleOnChange = (evt) =>{
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }
    handleSubmit = evt =>{
        evt.preventDefault();
        this.props.addBox(this.state);
    }
    render(){
        return (
            <div className="NewBoxForm">
                <h1>NewBoxForm</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="height">Height: </label>
                    <input 
                        type="text" 
                        name="height" 
                        id="height" 
                        onChange={this.handleOnChange}
                        value={this.state.height}/>
                    <label htmlFor="width">Width: </label>
                    <input 
                        type="text" 
                        name="width" 
                        id="width" 
                        onChange={this.handleOnChange}
                        value={this.state.width}/>
                    <label htmlFor="background-color">Background-color: </label>
                    <input 
                        type="text" 
                        name="backgroundColor" 
                        id="background-color" 
                        onChange={this.handleOnChange}
                        value={this.state.backgroundColor}/>
                    <button>Add New Box</button>
                </form>
            </div>
          );
    }
}

export default NewBoxForm;
