import Habitcard from '../Habitcard/Habitcard';
import Grid14 from '../Ui/Grid-1-4/Grid14';
import "./HabitsRow.css";

const HabitsRow = ({state, setData,  getEditHabit,  isActive, habits , newHabit, removeHabit, completed, getSingleHabit, postToast}) => {
    let isPrev , isNext;
    isPrev = state <= 0 ; 
    isNext = state > habits.length - 5 ;
  return (

    <div className="habits-active">
       <div className="habits-header">
        <h3 className="habit-head">{isActive}</h3>
        <div>
        <button    className="btn-arrow"  
        onClick={() => setData({type:"STATE", state:-1})} 
        disabled={isPrev}>
            <span>
                <i className="fas fa-arrow-left"></i>
            </span>
        </button>
        <button  className="btn-arrow" 
            onClick={() => setData({type:"STATE", state:1})} 
             disabled={isNext}>
            <span>
                <i className="fas fa-arrow-right"></i>
            </span>
        </button> 
        </div> 

       </div>
       <Grid14>
       <Habitcard habits={habits.slice(0 + Number(state) ,  4 + Number(state))} editHabit={newHabit}  getEditHabit={getEditHabit} setData={setData} removeHabit={removeHabit} completed={completed} getSingleHabit={getSingleHabit} postToast={postToast}  />
       </Grid14>
    </div>
  );
};

export default HabitsRow;