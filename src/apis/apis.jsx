import axios from "axios";

export const postHabit = async (habit,setData, postToast) => {
    try {
        await axios.post("/api/habits", {habit}, {headers : {authorization: localStorage.getItem("token")}}).then((response) => {
            if(response.status === 200) {
                postToast("success", `${habit.title} created`)
                getHabit(setData)
             }
        });
    } catch (error) {
        console.log(error);
    };
};

export const editHabit = async (habitId,habit,setData, postToast) => {
  try {
	  await axios.post(`/api/habits/${habitId}`, {habit},{headers : {authorization: localStorage.getItem("token")}}).then((response) => {
	       if(response.status === 200) {
            postToast("success", `${habit.title} edited successfully`)
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

export  const getSingleHabit = async (habitId,setData) => {
    try {
            await axios.get(`/api/habits/${habitId}`, {headers : {authorization: localStorage.getItem("token")}} ).then((response) => {
                setData({type:"SINGLE_HABIT", singleHabit:response.data.habit});
            })
    } catch (error) {
            console.log(error)
    };
};

export  const deleteHabit = async (habitId,setData, postToast) => {
    try {
            await axios.delete(`/api/habits/${habitId}`, {headers : {authorization: localStorage.getItem("token")}} ).then((response) => {
                if(response.status === 200) {
                    getHabit(setData);
                    postToast("success", "habit deleted successfully");
                }
            })
    } catch (error) {
            console.log(error);
    };
};

const getArchive = async (setData) => {
    try {
            await axios.get("/api/archives",{headers : {authorization: localStorage.getItem("token")}}).then((response) => {
               setData({type:"ARCHIVES", archive: response.data.archives});
            })
    } catch (error) {
            console.log(error);
    };
};

export  const postArchive = async (habitId,setData, postToast) => {
    try {
            await axios.post(`/api/archives/${habitId}`, {},{headers : {authorization: localStorage.getItem("token")}}).then((response) => {
                if(response.status === 201) {
                    getArchive(setData);
                    getHabit(setData);
                    postToast("success", "habit added to archive");
                }
            
            })
    } catch (error) {
            console.log(error);
    };
};

export  const deleteArchive = async (habitId,setData, postToast) => {
    try {
            await axios.delete(`/api/archives/${habitId}`,{headers : {authorization: localStorage.getItem("token")}}).then((response) => {
                if(response.status === 200) {
                    getArchive(setData)
                    postToast("success", "habit deleted from archive")
                }
            })
    } catch (error) {
            console.log(error);
    };
};

export const restoreArchive = async (habitId, setData, postToast) => {
 try {
	   await axios.post(`/api/archives/restore/${habitId}`,{},{headers : {authorization: localStorage.getItem("token")}}).then((response) => {
        if(response.status === 200) {
            getHabit(setData);
            getArchive(setData);
            postToast("success", "Habit restored successfully");
        }
	      
	    });
} catch (error) {
	console.log(error);
}
};

export const postLabel = async (labelName, setData, postToast) => {
    await axios.post(`/api/labels/${labelName}`, {}, {headers : {authorization: localStorage.getItem("token")}}).then((response) => {
        if(response.status === 200) {
            getLabel(setData);
             postToast("success", `new Label ${labelName} added`);
        }
        
    })
}

const getLabel = async (setData) => {
  try {
	  await axios.get("/api/labels",{headers : {authorization: localStorage.getItem("token")}}).then((response) => {
	        setData({type:"LABEL" ,label:response.data.labels})
	    })
} catch (error) {
	console.log(error)
}
}

export  const deleteLabel = async (labelName,setData, postLabel) => {
    try {
            await axios.delete(`/api/labels/${labelName}`,{headers : {authorization: localStorage.getItem("token")}}).then((response) => {
                if(response.status === 200) {
                    getLabel(setData);
                    postLabel("success", `${labelName} deleted successfully`);
                }
            })
    } catch (error) {
            console.log(error)
    };
};