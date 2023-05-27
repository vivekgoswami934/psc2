import { useContext } from "react";
import { createContext } from "react";
import useFetch from "../CustomHook/useFetch";

export const DataContext = createContext(null);


const DataProvider = ({ children }) => {


    const { state } = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <DataContext.Provider value={{ state }}>
            {children}
        </DataContext.Provider>
    );
};


export const useGlobalContext = () => {
    return useContext(DataContext)

}




export default DataProvider;
