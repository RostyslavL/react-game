import React, { Component } from 'react';
import Snake from './Snake';
import Bait from './Bait';

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
