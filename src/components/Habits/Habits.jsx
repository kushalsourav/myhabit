import "./Habits.css";

const Habits = ({ moveToHabit, data, setData, deleteHabit}) => {
  return (
    <div>
      <div className="habits">
          <div><h4 className="habits-title">{data.singleHabit.title}</h4></div>
          <div><p className="habits-repeat">repeat on {data.singleHabit.repeat}</p></div>
          <div><p className="habist-label">{data.singleHabit.label}</p></div>
          <div><p className="habits-goal">{data.singleHabit.goal} a day</p></div>
      </div>
      <div>
        <button className="btn cta-btn"  onClick={() => moveToHabit(data.singleHabit._id, data, setData, deleteHabit)}> Mark as completed </button>
      </div>
    </div>
  )
};

export default Habits;