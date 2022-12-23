const DataReducer = (state, action) => {
    switch (action.type) {
         case "FORM_TYPE":
              return {...state, formType: action.formType};
         default:
              return state;
    };
};

export default DataReducer;