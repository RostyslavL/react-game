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
componentDidMount() {
  setInterval(this.moveSnake, this.state.speed);
  document.onkeydown = this.onKeyDown;
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

class App extends Component {

  state = initialState;


  render() {
    return (
      <> 

      <div className="game-area">
        <Snake snakePoints={this.state.snakePoints}/>
        <Bait dot={this.state.bait}/>
        
        
      </div>
     
      </>
      
    );
  }
}

export default App;
