import React, { memo } from 'react'

const Child = ({ count, increment }) => {

  const colors = ["teal", "orange", "red", "blue", "green", "yellow"]


  function randomColor() {
  
     const random = Math.floor((Math.random() * 10) / 2)

    return colors[random]
  }


  return (
    <div>

      <button onClick={() => increment()} style={{ backgroundColor: `${randomColor()}` }}>
        Child :- {count}</button>
    </div>
  )
}

export default memo(Child)  // HOC(component)



