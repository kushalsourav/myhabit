import { useData } from "../../contexts/DataContext/DataContext"
import NewHabit from "../../components/NewHabit/NewHabit"
import Modal from "../../components/Modal/Modal"
import useError from "../../hooks/useError";
import { postHabit, editHabit } from "../../apis/apis";
import HabitsRow from "../../components/HabitsRow/HabitsRow";
import "./Home.css";

const Home = () => {
  const {data, setData, handleSubmitHabit, getEditHabit} = useData();
  const [error, setError] = useError();
  return (
    <div>
       <HabitsRow state={data.state} setData={setData}  getEditHabit={getEditHabit} isActive={"Active"} newHabit={data.newHabit}
        habits={data.habits} />


      <Modal handleClose={() => setData({type:"MODAL", modal:false})} isOpen={data.modal}>
       <NewHabit setData={setData} setInput={data.newHabit} goals={data.goal} repeat={data.repeat} labels={data.label}  handleSubmit={handleSubmitHabit} colors={data.cardColors}  habit={data.newHabit} isEdit={data.isEdit} editId={data.editId} error={error} postError={setError} editHabit={editHabit} postHabit={postHabit} /> 
      </Modal>
    </div>
  );
};

export default Home;