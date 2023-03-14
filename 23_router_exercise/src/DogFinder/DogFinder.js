import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './DogFinder.css';

class DogFinder extends Component {
    render(){
        return (
            <div className="DogFinder">
                <h1>Click a Dog!</h1>
                <div className="DogFinder-content">
                { 
                  this.props.dogs.map(( n, i ) => 
                    <Link to={`/dogs/${i}`} className='dog-link'>
                      <img className="" src={n.src} alt="Card image cap" /> 
                      {n.name}
                    </Link>
                ) }
                </div>
            </div>
          );
    }
}

export default DogFinder;
