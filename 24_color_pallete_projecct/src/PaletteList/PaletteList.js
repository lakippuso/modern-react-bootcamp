import { palette } from '@mui/system';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import seedColors from '../seedColors';
class PaletteList extends Component {
    render(){
        let links = seedColors.map( palette => <li><Link to={`/palette/${palette.id}`}>{palette.id}</Link></li>);
        return (
            <div className="PaletteList">
                <h1>PaletteList</h1>
                <div className="Palette-links">
                    <ul>
                        {links}
                    </ul>
                </div>
            </div>
          );
    }
}

export default PaletteList;
