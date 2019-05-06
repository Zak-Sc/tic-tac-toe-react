import React, { Component } from 'react'
import Board from '.././Board/Board'
//import './Game.css'
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          XisNext: true
        };
      }
      handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.XisNext ? 'X': 'O';
        if(this.CalculateWinner(this.state.squares) || this.state.squares[i]) {
          return;
        }
        this.setState({squares: squares});
        this.setState({XisNext:!this.state.XisNext})
      }
      restart(){
        this.setState({squares: Array(9).fill(null)});
      }
    render() {
        const winner = this.CalculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
          
        } else if(this.state.squares.filter(number => number != null).length==this.state.squares.length) {
            return (
            <button className="square" onClick={this.restart()} >
           </button>
            );
        }
         else {
          status = 'Next player: ' + (this.state.XisNext ? 'X' : 'O');
        }
      return (
        <div className="game">
          <div className="game-board">
            <Board squares={this.state.squares} onClick={(i) => this.handleClick(i)}/>
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
    CalculateWinner(squares){
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
  
        
      }
      
  }
  
export default Game;