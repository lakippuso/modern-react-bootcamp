import React, {Component} from 'react';
import ShoppingForm from '../ShoppingForm/ShoppingForm';
class ShoppingList extends Component {
    state = {
        items: []
    }
    addItem = item =>{
        this.setState(state =>({
            items: [...state.items, item]
        }));
        console.log('Hello')
    }
    render(){
        return (
            <div className="ShoppingList">
                <h1>ShoppingList</h1>
                <ul>
                    {this.state.items.map( 
                        item => 
                            <li>{`${item.name} - ${item.qty}`}</li>
                    )}
                </ul>
                <ShoppingForm addItem={this.addItem}/>

            </div>
          );
    }
}

export default ShoppingList;
