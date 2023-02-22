import React, {Component} from 'react';
class Multiform extends Component {
    state = {
        username: "",
        password: "",
        email: "",
    }
    handleOnChange = (evt) =>{
        this.setState({[evt.target.name] : evt.target.value});
    }
    render(){
        return (
            <div className="Multiform">
                <h1>Multiform</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="username" 
                        onChange={this.handleOnChange}
                        value={this.state.username}/>
                    <input 
                        type="password" 
                        name="password" 
                        onChange={this.handleOnChange}
                        value={this.state.password}/>
                    <input 
                        type="email" 
                        name="email" 
                        onChange={this.handleOnChange}
                        value={this.state.email}/>
                </form>
            </div>
          );
    }
}

export default Multiform;
