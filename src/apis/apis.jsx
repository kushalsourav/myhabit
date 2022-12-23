import axios from "axios";

export const postHabit = async (habit,setData, ) => {
    try {
        await axios.post("/api/habits", {habit}, {headers : {authorization: localStorage.getItem("token")}}).then((response) => {
            if(response.status === 200) {
                getHabit(setData)
             }
        });
    } catch (error) {
        console.log(error);
    };
};

export const editHabit = async (habitId,habit,setData, ) => {
  try {
	  await axios.post(`/api/habits/${habitId}`, {habit},{headers : {authorization: localStorage.getItem("token")}}).then((response) => {
	       if(response.status === 200) {
            getHabit(setData)
           };
	    })
    } catch (error) {
        console.log(error);
    };
};

const getHabit = async (setData) => {
    try {
        await axios.get("/api/habits",{headers : {authorization: localStorage.getItem("token")}} ).then((response) => {
            setData({type:"NEW_HABIT", habits:response.data.habits});
        })
    } catch (error) {
         console.log(error)
    };
};