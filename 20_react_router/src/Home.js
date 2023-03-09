import { Component } from "react"

export class Home extends Component{
    componentDidMount() {
        console.log('Mount')
    }
    render(){
        return (
            <div className="Home">
                <h1>Home</h1>
            </div>
        )
    }
}