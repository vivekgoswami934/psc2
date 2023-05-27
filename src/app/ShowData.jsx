import React from 'react'
import { useGlobalContext } from '../context/DataProvider'

const ShowData = () => {

    // const { state } = useContext(DataContext)

    const { state } = useGlobalContext()



    console.log(state)


    return (
        <div>
            {
                state.isLoading && <h1>Loading....</h1>
            }

            {
                state.data?.map((el) => {
                    return <h5 key={el.id}>{el.title}</h5>
                })

            }

            {
                state.isError && <h1>Error....</h1>
            }
        </div>
    )
}

export default ShowData
