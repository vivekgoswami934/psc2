



import React, { useCallback, useState } from 'react'
import Child from './Child'
import useTimer from '../../CustomHook/useTimer'

const Parent = () => {

    const [count, setCount] = useState(0)


    const time = useTimer()


    // useCallback(()=>{} , [dependency])

    const increment = useCallback(() => {
        setCount(p => p + 1)
    }, [])


    // memoized --> store --> 
    const  randomColor = useCallback( () =>  {
  
        const colors = ["teal", "orange", "red", "blue", "green", "yellow"]

        const random = Math.floor((Math.random() * 10) / 2)
   
       return colors[random]
     } , [])
   


    return (
        <div >

            <h1>React Optimisation</h1>

            <button style={{border: `5px solid ${randomColor()}` , color : `${randomColor()}`  }}>Parent :-  {time}</button>

            <Child count={count} increment={increment} randomColor = {randomColor} />



        </div>
    )
}

export default Parent
