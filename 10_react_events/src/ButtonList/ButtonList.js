import React, {Component} from 'react';


class ButtonList extends Component {
    static defaultProps = {
        colors: ["blue", "red", "green", "pink"]
    }
    state = {
        bg: "pink",
    }
    changeBg = e =>{
        this.setState({bg: e})
    }
    render(){
        var style = {
            backgroundColor: this.state.bg,
            padding: "10em"
        }
        return (
            <div className="ButtonList" style={style}>
                {this.props.colors.map( c => {
                    const colorObj = { backgroundColor: c };
                    return <button style={colorObj} onClick={this.changeBg.bind(this, c)}>Change color</button>;
                })}
            </div>
        );
    }
}

export default ButtonList;
