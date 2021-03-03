import React from 'react';

export default (props) => {
  return (
    <div>
      {props.snakePoints.map((points, i) => {
        const style = {
          left: `${points[0]}%`,
          top: `${points[1]}%`
        }
        return (
          <div className="snake-point" key={i} style={style}></div>
        )
      })}
    </div>
  )
}