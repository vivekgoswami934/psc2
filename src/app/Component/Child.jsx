import React, { memo } from 'react'

const Child = ({ count, increment , randomColor}) => {

  const colors = ["teal", "orange", "red", "blue", "green", "yellow"]



  return (
    <div>

      <button onClick={() => increment()} style={{ backgroundColor: `${randomColor()}` ,  border: `5px solid ${randomColor()}`}}>
        Child :- {count}</button>
    </div>
  )
}

export default memo(Child)  // HOC(component)



