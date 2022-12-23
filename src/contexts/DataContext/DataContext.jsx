import { createContext, useContext,  useReducer } from "react";
import DataReducer from "../../reducers/DataReducer/DataReducer";

const initalDataState = {
    formType:"",
};
const DataContext = createContext();

const useData = () => useContext(DataContext);

const DataProvider = ({children}) => {
     const [data , setData] = useReducer(DataReducer, initalDataState);
    
    return(
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    );
};

export {DataProvider, useData};