
import { useEffect } from "react";
import Pomodore from "../../components/Pomodore/Pomodore";
import {useData} from "../../contexts/DataContext/DataContext";
import useTimer from "../../hooks/useTimer";
import "react-calendar/dist/Calendar.css";
import Calender from "../../components/Calender/Calender";
import Habits from "../../components/Habits/Habits";
import "./Habit.css";
import { deleteHabit } from "../../apis/apis";


const Habit = () => {
  const {data, setData, returnDates, moveToCompleted} = useData();
  const [minutes, seconds, timer] = useTimer(data.setTimer,  data.resetTime);
  const [startDate, endDate] = returnDates(data.singleHabit.startdate, data.singleHabit.enddate)
  useEffect(() => {
    if(minutes === 0 && seconds === 0 ) {
     setData({type:"SET_TIMER", setTimer: false})
     setData({type:"RESET_TIME", resetTime: data.resetTime})
    }

   },[data.resetTime, setData, minutes, seconds])
  return (
    <div className="single-page">
    <div>
    <Habits data={data} moveToHabit={moveToCompleted} setData={setData} deleteHabit={deleteHabit}/>
  <Pomodore minutes={minutes} seconds={seconds} timer={timer} data={data} setData={setData} />
    </div>
  <Calender startDate={startDate} endDate={endDate} />
  </div>
  );
};

export default Habit;