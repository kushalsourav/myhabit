import { createContext, useContext,  useReducer } from "react";
import DataReducer from "../../reducers/DataReducer/DataReducer";
import { handleSubmitHabit, getEditHabit, returnDates , moveToCompleted} from "../../utils/helperFunctions/helperFunctions";

const initalDataState = {
    formType:"",
    modal :false,
    newHabit : {
        title:"",
        startdate:"",
        enddate:"",
        goal:"",
        label:"",
        repeat:"",
        colorcode:""
    },
    goal: ["1 x time", "2 x times", "3 x times"],
    repeat: ["daily", "once", "sunday", "monday","tuesday","wednesday","thursday","friday", "saturday","only weekends", "only weekdays"],
    cardColors: [
        {color:{colorname:"red", colorcode:"255, 0, 0"}},
        {color:{colorname:"orange", colorcode:"255, 88, 51"}},
        {color:{colorname:"magenta", colorcode:"255, 0, 255"}},
        {color:{colorname:"cyan", colorcode:"0, 255, 255"}},
        {color:{colorname:"navy", colorcode:"0,0,128"}},
        {color:{colorname:"green", colorcode:"0,128,0"}}
    ],
    label: [],
    editId: "",
    isEdit: false,
    habits:[],
    state:"",
    singleHabit: {},
    completedHabit: [],
    defaultTimer : {minute: 25, seconds: 60},
    setTimer : false,
    resetTime:1500000,
    toast: {
        toastType: '',
        toastMessage: ''
      },
      archive: [],

};
const DataContext = createContext();

const useData = () => useContext(DataContext);

const DataProvider = ({children}) => {
     const [data , setData] = useReducer(DataReducer, initalDataState);
     const removeCompleted = (removeHabit) => {
        const completedHabit  = data.completedHabit.filter((habit) => habit._id !== removeHabit);
        setData({type:"COMPLETED", completedHabit:completedHabit})
        
        };
    return(
        <DataContext.Provider value={{data, setData ,handleSubmitHabit, getEditHabit, removeCompleted, returnDates, moveToCompleted}}>
            {children}
        </DataContext.Provider>
    );
};

export {DataProvider, useData};