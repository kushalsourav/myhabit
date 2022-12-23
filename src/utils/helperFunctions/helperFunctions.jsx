export const handleSubmitHabit = (e,habit,isEdit,setData,editId, editHabit, postHabit,  postError, postToast) => {
    e.preventDefault();

    const filterByDate = (list) => {
        return list.startdate.split("/").join("")  <= list.enddate.split("/").join("")
    };

    isEdit && editHabit(editId, habit, setData,postToast );
    setData({type:"IS_EDIT", isEdit:false});

    if(habit.title !== "" && habit.startdate !== "" && habit.enddate !== "" && filterByDate(habit) && habit.goal !== "" && habit.repeat !== "" && habit.label !== ""  ) {
        setData({type:"MODAL", modal:false})
        !isEdit && postHabit(habit, setData, postToast);
        setData({type:"CLEAR_INPUT"})
    } else {
        !habit.label && postError("label", "please select label");
        !habit.repeat && postError("repeat", "please select times to repeat");
        !habit.goal && postError("goal", "please select goal");
        !filterByDate(habit)  && postError("enddate", " end date should be lesser than start date");
        !habit.enddate && postError("enddate", "Please enter end date");
        !habit.startdate &&   postError("startdate", "Please enter start date");
        !habit.title && postError("title","Please enter the title");

    };

 };

export const getEditHabit = (editHabit, habit,  setData) => {
    setData({type:"EDIT_ID", editId:habit._id});
    editHabit.title = habit.title;
    editHabit.label =  habit.label;
    editHabit.startdate = habit.startdate;
    editHabit.enddate = habit.enddate;
    editHabit.colorcode = habit.colorcode;
    editHabit.goal = habit.goal;
    editHabit.repeat = habit.repeat;
    setData({type:"IS_EDIT", isEdit:true});
    setData({type:"MODAL", modal:true});
};

export const moveToCompleted = (movehabit, data, setData, deleteHabit) => {
    const completedHabit  = data.habits.filter((habit) => habit._id === movehabit);
    setData({type:"COMPLETED", completedHabit:data.completedHabit.concat(completedHabit)})
    deleteHabit(movehabit,setData)
};

export const returnDates = (startdate, enddate) => {
    let startDate , endDate;
    if(startdate !== undefined && enddate !== undefined) {
            startDate  = new Date(startdate.replace("-", "/"));
            endDate =  new Date(enddate.replace("-", "/"));
    }
      return [startDate, endDate]
}