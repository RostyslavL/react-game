import React from 'react'
// https://stackoverflow.com/questions/10014271/generate-random-color-distinguishable-to-humans
const getRandomColor = () =>{
    var letters = '0123456789ABCDEF'
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
  }
const Bait = (props) => {
    const style = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`,
        backgroundColor : getRandomColor()
      }
    
      return (
        <div className="bait" style={style}></div>
      )
}

export default Bait
