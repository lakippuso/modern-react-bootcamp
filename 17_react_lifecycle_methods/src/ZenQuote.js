import React, {Component} from 'react';
import axios from 'axios';
import './ZenQuote.css';

class ZenQuote extends Component {
    state = {
        quote: "",
        isLoading: true,
    }
    componentDidMount(){
        axios.get("https://api.github.com/zen").then(res => {
            // console.log(res["data"])
            setTimeout(() => {
                this.setState({ quote: res.data , isLoading: false });
            },3000);
        })
    }
    render(){
        return (
            <div className="ZenQuote">
                {
                    this.state.isLoading 
                        ? (
                            <div className="loader">
                            <svg className="circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
                            </svg>
                        </div>
                        ) : (
                            <div>
                                <h1>Always Remember</h1>
                                <p>{this.state.quote}</p>
                            </div>
                        )
                }
            </div>
          );
    }
}

export default ZenQuote;
