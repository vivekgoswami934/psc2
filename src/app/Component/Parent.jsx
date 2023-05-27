



import React, { useCallback, useState } from 'react'
import useTimer from '../hook/useTimer'
import Child from './Child'

const Parent = () => {

    const [count, setCount] = useState(0)


    const time = useTimer()


    // useCallback(()=>{} , [dependency])

    const increment = useCallback(() => {
        setCount(p => p + 1)
    }, [])


    // memoized --> store --> 


    return (
        <div style={{ border: "4px solid black" }}>

            <h1>React Optimisation</h1>

            <button>Parent :-  {time}</button>

            <Child count={count} increment={increment} />



        </div>
    )
}

export default Parent
