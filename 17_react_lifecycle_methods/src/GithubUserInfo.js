import React, {Component} from 'react';
import axios from 'axios';

class GihubUserInfo extends Component {
    state = {
        avatar : '',
        bio: '',
        blog: '',
        name: '',
    }
    async componentDidMount() {
        const url = `https:api.github.com/users/${this.props.username}`;
        let response = await axios.get(url);
        let data = response.data;
        this.setState({avatar: data.avatar_url, bio: data.bio, blog: data.blog, name: data.name});
    }
    render(){
        return (
            <div className="GihubUserInfo">
                <h1>{this.state.name}</h1>
                <img src={this.state.avatar} alt="profile"></img>
                <p>{this.state.bio}</p>
                <p>{this.state.blog}</p>

            </div>
          );
    }
}

export default GihubUserInfo;
