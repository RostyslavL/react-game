import React from 'react'

const Bait = (props) => {
    const style = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`,
    
      }
    
      return (
        <div className="bait" style={style}></div>
      )
}

export default Bait
