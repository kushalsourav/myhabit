
import "./Habitcard.css";

const Habitcard = ({habits, editHabit, getEditHabit, setData}) => {
    return (
        <>
        {habits.map((habit) => {
            return (
            <div  className="habit-card" style={{backgroundColor :  `rgba(${habit.colorcode}, 0.2)` }} key={habit._id} >
                <div className="habit-title">{habit.title}</div>
              
                <div className="habit-labels"> 
                    <div>  <p className="habit-label" style={{backgroundColor: `rgb(${habit.colorcode})`}}>{habit.label}</p> </div>
                </div>
               
                <div className="habit-buttons">
                <div className="habit-times">{habit.goal}day</div>
            
              
               
                </div>
                {
                 getEditHabit && 
                    <button className="btn-icon btn-edit" style={{color: `rgb(${habit.colorcode})`}}
                    onClick={() => {getEditHabit(editHabit,habit, setData)}}><i className="fa fa-pen"></i></button>
                }
            </div>
         
            )
        })}
        
        </>
 
    );
};

export default Habitcard;