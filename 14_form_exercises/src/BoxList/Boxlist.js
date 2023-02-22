import React, {Component} from 'react';
import Box from '../Box/Box';
import NewBoxForm from '../NewBoxForm/NewBoxForm';
import { v4 } from 'uuid';
class BoxList extends Component {
    state = {
        boxs: []
    }
    addBox = box =>{
        var newBox = { ...box, id: v4()};
        this.setState(state =>({
            boxs: [...state.boxs, newBox]
        }));
    }
    removeBox = box =>{
        var boxes = this.state.boxs;
        boxes.forEach( (b, index) => {
            if(b.id === box){
                boxes.splice(index, 1);
            }
        });
        this.setState({
            boxs: boxes
        });
    }
    render(){
        console.log(this.state.boxs)
        return (
            <div className="BoxList">
                <NewBoxForm addBox={this.addBox}/>
                {this.state.boxs.map( b => {
                    return <Box 
                                backgroundColor={b.backgroundColor}
                                height={b.height}
                                width={b.width}
                                key={b.id} removeBox={() => this.removeBox(b.id)}/>
                })}
            </div>
        );
    }
}

export default BoxList;
