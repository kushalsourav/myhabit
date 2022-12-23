import "./Pomodore.css";

const Pomodore = ({minutes , seconds, setData, data, timer}) => {
  return (
         <div className="pomodore">
         <p className="pomodore-timer">{minutes}:{" "}{seconds}</p>
         <div className="pomodore-buttons">
         <button className="btn cta-btn pomodore-button" onClick={()=> {
         setData({type:"SET_TIMER", setTimer: !data.setTimer})
      
      }}>{data.setTimer? "stop" : "start"}</button>

      <button className="btn cta-btn pomodore-button" onClick={()=> {
         setData({type:"SET_TIMER", setTimer: false})
         setData({type:"RESET_TIME", resetTime: timer})
      }}>pause</button>
         <button className="btn cta-btn pomodore-button" onClick={()=> {
         setData({type:"SET_TIMER", setTimer: false})
         setData({type:"RESET_TIME", resetTime:  1500000})
      }}>reset</button>
         <button className="btn cta-btn pomodore-button" onClick={()=> {
            setData({type:"SET_TIMER", setTimer: false})
            setData({type:"RESET_TIME", resetTime: 300000})
      }}>break</button>
         </div>
         </div>
      )
}

export default Pomodore;