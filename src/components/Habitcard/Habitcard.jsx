import { Link } from "react-router-dom";
import "./Habitcard.css";

const Habitcard = ({habits, editHabit, getEditHabit, setData, completed, getSingleHabit, removeHabit, postToast, postArchive, restoreHabit}) => {
    return (
        <>
        {habits.map((habit) => {
            return (
            <div  className="habit-card" style={{backgroundColor :  `rgba(${habit.colorcode}, 0.2)` }} key={habit._id} >
                <div className="habit-title">{habit.title}</div>
                <Link to={"/Habit"} className="habit-link" onClick={(e) =>{
                    completed && e.preventDefault();
                    getSingleHabit(habit._id, setData);
                } }>
                <div className="habit-labels"> 
                    <div>  <p className="habit-label" style={{backgroundColor: `rgb(${habit.colorcode})`}}>{habit.label}</p> </div>
                </div>
                </Link>
               
                <div className="habit-buttons">
                <div className="habit-times">{habit.goal}day</div>
                <button className="btn-icon" style={{color: `rgb(${habit.colorcode})`}} onClick={() => {
                            removeHabit(habit._id,setData,postToast)
                        }}><i className="fa fa-trash" aria-hidden="true"></i>
                </button>
                {
                    postArchive  && 
                    <button className="btn-icon" style={{color: `rgb(${habit.colorcode})`}} onClick={() => {
                        postArchive(habit._id,  setData, postToast)
                     habits.length >=3  &&  setData({type:"STATE", state:-1})
                    }}><i className="fa fa-archive" aria-hidden="true"></i>
                    </button>
                }
                   {
                            restoreHabit &&    
                            <button className="btn-icon" style={{color: `rgb(${habit.colorcode})`}}
                              onClick={() => {restoreHabit(habit._id, setData, postToast)}}>
                              <i className="fa fa-window-restore" aria-hidden="true"></i>
                            </button>
                        }
               
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