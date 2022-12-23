const DataReducer = (state, action) => {
    switch (action.type) {
          case "FORM_TYPE":
              return {...state, formType: action.formType};
          case "MODAL" :
               return {...state, modal:action.modal};
          case "INPUT": 
               return {...state , newHabit: {...state.newHabit , [action.name] : action.input}};
          case "CLEAR_INPUT": 
               return {...state, newHabit: {...state.newHabit, title:"", startdate:"", enddate:"", goal:"", label:"", repeat:"", colorcode:""}};
          case "EDIT_ID" :
               return {...state, editId: action.editId};
          case "IS_EDIT" : 
               return {...state , isEdit: action.isEdit};
          case "NEW_HABIT" :
               return {...state, habits: action.habits};
          case "STATE" :
               return {...state, state: Number(state.state) +  Number(action.state)};
          default:
              return state;
    };
};

export default DataReducer;