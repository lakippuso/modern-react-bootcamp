import React, {Component} from 'react';
class Box extends Component {
    static defaultProps = {
        width: 0,
        height: 0,
        backgroundColor: "pink"
    }
    handleRemove = () =>{
        this.props.removeBox();
    }
    render(){
        var style = {
            backgroundColor: this.props.backgroundColor,
            height: this.props.height+"px",
            width: this.props.width+"px",
        };
        return (
            <div className="Box" 
                style={style} 
                onClick={this.handleRemove}>
            </div>
          );
    }
}

export default Box;
