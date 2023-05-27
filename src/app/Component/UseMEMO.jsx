import React, { useMemo, useState } from 'react'

const UseMEMO = () => {

    const [count, setCount] = useState(0)
    const [value, setValue] = useState(0)


    // useMemo(()=>{},[])

    // const counter = useMemo(() => {

    //     const currentTime = Date.now()

    //     while (Date.now() - currentTime < 2000) {
    //         continue;
    //     }

    //     return count % 2 === 0 ? "Even" : "Odd"


    // }, [count]) 


    const handleEvenOdd = () => {

        const currentTime = Date.now()

        while (Date.now() - currentTime < 2000) {
            continue;
        }

        return count % 2 === 0 ? "Even" : "Odd"


    }


    // useMemo ==> memoized value

    // we 2 second

    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}> count- {count}</button>
            <button > {handleEvenOdd()}  </button>
            <button onClick={() => setValue(value + 1)}> value :- {value}</button>
        </div>
    )
}

export default UseMEMO




// useMemo  --> memoized a value

//   [  f(0) =0  , f(1) = 10  f(2) = 20 ]  --> we comprimise with space but time will decrease