import React, {Component} from 'react';
import './FormContainer.css';
class FormContainer extends Component {
    render(){
        return (
            <div className="FormContainer">
                {this.props.children}
            </div>
          );
    }
}

export default FormContainer;
