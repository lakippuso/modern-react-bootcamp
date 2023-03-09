import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './VendingMachine.css';
class VendingMachine extends Component {
    render(){
        return (
            <div className="VendingMachine">
                <h1>VendingMachine</h1>
                <p>What you want to eat?</p>
                <ul className='VendingMachine-nav'>
                    <li><Link to="/soda">Soda</Link></li>
                    <li><Link to="/chips">Chips</Link></li>
                    <li><Link to="/fish">Fish</Link></li>
                </ul>
            </div>
          );
    }
}

export default VendingMachine;
