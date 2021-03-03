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
