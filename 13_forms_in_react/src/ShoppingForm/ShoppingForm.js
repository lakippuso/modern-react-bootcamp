import React, {Component} from 'react';
class ShoppingForm extends Component {
    state = {
        name: "",
        qty: "",
    }
    handleOnChange = (evt) =>{
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }
    handleSubmit = evt =>{
        evt.preventDefault();
        this.props.addItem(this.state);
    }
    render(){
        return (
            <div className="ShoppingForm">
                <h1>ShoppingForm</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        onChange={this.handleOnChange}
                        value={this.state.name}/>
                    <label htmlFor="qty">Quantity</label>
                    <input 
                        type="text" 
                        name="qty" 
                        id="qty" 
                        onChange={this.handleOnChange}
                        value={this.state.qty}/>
                    <button>Submit</button>
                </form>
            </div>
          );
    }
}

export default ShoppingForm;
