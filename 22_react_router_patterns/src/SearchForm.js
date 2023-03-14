import React, {Component} from 'react';
import { Link, useNavigate } from 'react-router-dom';
class SearchForm extends Component {
    state = {
        query: ''
    }
    handleChange = evt => {
        this.setState({ query: evt.target.value})
    }
    saveHistory = () =>{
        let navigate = useNavigate();
        alert("saved!")
        navigate(`/images/${this.state.query}`);
    }
    render(){
        return (
            <div className="SearchForm">
                <h1>SearchForm</h1>
                <input type="text" name="query" id="query" onChange={this.handleChange}/>
                <Link to={`/images/${this.state.query}`}>Search</Link>
                <button onClick={this.saveHistory}>Save to history</button>
            </div>
          );
    }
}

export default SearchForm;
