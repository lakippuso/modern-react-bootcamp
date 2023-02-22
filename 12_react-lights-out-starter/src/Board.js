import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: .20,
  }
  state = {
    hasWon: false,
    board: this.createBoard(),
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard()  {
    let board = Array.from(
      { length: this.props.nrows }, 
      (n) => n = Array.from({length: this.props.ncols}, (v)=> v = this.generateRandomNumber(this.props.chanceLightStartsOn) ));
    return board;
  }
  createDummyBoard()  {
    let board = [
      [false,false,false,false,false],
      [false,false,false,false,false],
      [false,false,false,false,false],
      [false,false,false,false,true],
      [false,false,false,true,true],
    ];
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround = (coord) =>{
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    function flipTopCell(y, x) {
      y -= 1;
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    function flipRightCell(y, x) {
      x += 1;
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    function flipBottomCell(y, x) {
      y += 1;
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    function flipLeftCell(y, x) {
      x -= 1
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    // TODO: flip this cell and the cells around it
    flipCell(y, x);
    flipTopCell(y, x);
    flipRightCell(y, x);
    flipBottomCell(y, x);
    flipLeftCell(y, x);

    // win when every cell is turned off
    // TODO: determine is the game has been won
    var rowHasOn = 0;
    board.map( n => {if(n.includes(true))  rowHasOn++});
    this.setState({board: board, hasWon: rowHasOn===0});
  }

  generateRandomNumber (chance) {
    let rand = Math.floor(Math.random() * 100);
    chance = ( chance * 100 );
    return chance > rand ? true : false;
  }

  /** Render game board or winning message. */

  render() {

    // if the game is won, just show a winning msg & render nothing else
    var winningMessage = <tr><td>"You Win"</td></tr>;
    // TODO

    // make table board
    let tableBoard = this.state.board.map((row, yIndex) => 
      <tr key={yIndex}>
        {row.map( (col, xIndex) => {
          var coord = `${yIndex}-${xIndex}`;
          return <Cell 
            isLit={col} 
            flipCellsAroundMe={() => this.flipCellsAround(coord)} 
            key={coord}/>
          }
        )}
      </tr>
    )

    // TODO
    return (
      <table className="Board">
        <tbody>
            {this.state.hasWon ? winningMessage : tableBoard}
        </tbody>
      </table>
    );
  }
}


export default Board;
