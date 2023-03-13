import React, {Component} from 'react';
import { Link, redirect } from 'react-router-dom';
class SearchForm extends Component {
    state = {
        query: ''
    }
    handleChange = evt => {
        this.setState({ query: evt.target.value})
    }
    render(){
        return (
            <div className="SearchForm">
                {/* <Redirect /> */}
                <h1>SearchForm</h1>
                <input type="text" name="query" id="query" onChange={this.handleChange}/>
                <Link to={`/images/${this.state.query}`}>Search</Link>
            </div>
          );
    }
}

export default SearchForm;
