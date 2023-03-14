import React, {Component} from 'react';
import { Outlet, Link } from 'react-router-dom';
class Navbar extends Component {
    render(){
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <Link to="/dogs" className="nav-link">Dog Finder</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            { this.props.doglinks.map( (d, i) => <Link to={`/dogs/${i}`} className="nav-link">{d.name}</Link> ) }
                        </div>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </>
          );
    }
}

export default Navbar;
