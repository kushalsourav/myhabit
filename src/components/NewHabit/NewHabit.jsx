import React from 'react'
import Input from '../Form/Input/Input';
import "./NewHabit.css";
const NewHabit = ({setData, setInput, error, goals, repeat, labels, handleSubmit, colors, habit, isEdit, editId,editHabit, postHabit, postError, postToast}) => {
  return (
        <form className="form-box form-habit" onSubmit={(e) => handleSubmit(e,habit, isEdit, setData, editId, editHabit, postHabit, postError, postToast)}>
        <h3>New Habit</h3>
            <Input name="title" placeholder="Enter title of your habit" postInput={setData} value={setInput.title} error={error}/>
            <label className="input-label"> Start Date:
            <input type="date" value={setInput.startdate}  className="input" name="startdate"  onChange={(e) => setData({type:"INPUT", name:e.target.name, input:e.target.value})} />
            {
            error && error.type ===  "startdate" &&  <small className="error">{error.message}</small>
            }
            </label>
            <label className="input-label"> End Date:
            <input type="date" value={setInput.enddate}   className="input" name="enddate"  onChange={(e) => setData({type:"INPUT", name:e.target.name, input:e.target.value})} />
            {
            error && error.type ===  "enddate" &&  <small className="error">{error.message}</small>
            }
            </label>
            <label className="input-label"> 
            Goal
                <select name="goal" value={setInput.goal} className="input" 
                onChange={(e) => setData({type:"INPUT", name:e.target.name, input:e.target.value})}> 
                    <option value={""} hidden>select</option>
                    {goals.map((goal) => {
                        return <option key={goal} value={goal}>{goal}</option>
                    })}
                </select>
                {
                 error && error.type ===  "goal" &&  <small className="error">{error.message}</small>
                }
            </label>
            <label className="input-label"> 
            Repeat
                <select name="repeat" value={setInput.repeat} className="input" 
                onChange={(e) => setData({type:"INPUT", name:e.target.name, input:e.target.value})}> 
                    <option value={""} hidden>select</option>
                    {repeat.map((repeat) => {
                        return <option  key={repeat} value={repeat}>{repeat}</option>
                    })}
                </select>
                {
                    error && error.type ===  "repeat" &&  <small className="error">{error.message}</small>
                }
            </label>
            <label className="input-label"> 
            Labels
                <select name="label" value={setInput.label} className="input" 
                onChange={(e) => setData({type:"INPUT", name:e.target.name, input:e.target.value})}> 
                    <option value={""} hidden>{labels.length > 0 ? "select" : "create a Label first"}</option>
                    {labels.map((label) => {
                        return <option key={label} value={label}>{label}</option>
                    })}
                </select>
                {
                error && error.type ===  "label" &&  <small className="error">{error.message}</small>
                }
            </label>
            <label className="input-label"> 
            color
                <select name="colorcode" value={setInput.colorcode} className="input" 
                onChange={(e) => setData({type:"INPUT", name:e.target.name, input:e.target.value})}> 
                    <option value={""} hidden>select</option>
                    {colors.map(({color}) => {
                        return <option key={color.colorname} value={color.colorcode}>{color.colorname}</option>
                    })}
                </select>
            </label>
            <div className="form-btn">
                 <button  className="btn cta-btn btn-large">submit</button>
               </div>
        </form>
  );
};

export default NewHabit;