import React, { Component } from 'react';
import Snake from './Snake';
import Bait from './Bait';

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min + 1) + min)/2)*2;
  let y =  Math.floor((Math.random()*(max-min + 1) + min)/2)*2;
  return [x,y]
}

const initialState = {
  bait: getRandomCoordinates(),
  speed: 200,
  direction: 'RIGHT',
  snakePoints: [
    [0,0],
    [2,0]
  ],
  
}

class App extends Component {

  state = initialState;

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
  }

  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({direction: 'UP'});
        break;
      case 40:
        this.setState({direction: 'DOWN'});
        break;
      case 37:
        this.setState({direction: 'LEFT'});
        break;
      case 39:
        this.setState({direction: 'RIGHT'});
        break;
    }
  }

  moveSnake = () => {
    let dots = [...this.state.snakePoints];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakePoints: dots
    })
  }

  checkIfOutOfBorders() {
    let head = this.state.snakePoints[this.state.snakePoints.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  checkIfCollapsed() {
    let snake = [...this.state.snakePoints];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        this.onGameOver();
      }
    })
  }

  checkIfEat() {
    let head = this.state.snakePoints[this.state.snakePoints.length - 1];
    let bait = this.state.bait;
    if (head[0] == bait[0] && head[1] == bait[1]) {
      this.setState({
        bait: getRandomCoordinates()
      })
      this.enlargeSnake();
      this.increaseSpeed();
    }
  }

  enlargeSnake() {
    let newSnake = [...this.state.snakePoints];
    newSnake.unshift([])
    this.setState({
      snakePoints: newSnake
    })
  }

  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10
      })
    }
  }

  onGameOver() {
    alert(`Game Over. Snake length is ${this.state.snakePoints.length}`);
    this.setState(initialState)
  }

  render() {
    return (
      <> 

      <div className="game-area">
        <Snake snakePoints={this.state.snakePoints}/>
        <Bait dot={this.state.bait}/>
        
        
      </div>
      <React.Fragment>
          <div className="game-score">
            <h1> Score : {this.state.snakePoints.length }</h1>
          </div>
        </React.Fragment>
      </>
      
    );
  }
}

export default App;
