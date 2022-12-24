import { useData } from "../../contexts/DataContext/DataContext";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import NewHabit from "../../components/NewHabit/NewHabit"
import Modal from "../../components/Modal/Modal"
import useError from "../../hooks/useError";
import { postHabit, editHabit,deleteHabit,getSingleHabit, postArchive } from "../../apis/apis";
import HabitsRow from "../../components/HabitsRow/HabitsRow";
import useToast from "../../hooks/useToast";
import Dashboard from "../../components/Dashboard/Dashboard";
import "./Home.css";

const Home = () => {
  const {data, setData, handleSubmitHabit, getEditHabit, removeCompleted} = useData();
  const {authState} = useAuth();
  const [error, setError] = useError();
  const postToast = useToast();
  return (
    <div className="home">
        <Dashboard inProgress={data.habits.length} completed={data.completedHabit.length} firstName={authState.userData.firstName}/>
       <HabitsRow state={data.state} setData={setData}  getEditHabit={getEditHabit} isActive={"Active"} newHabit={data.newHabit}
        habits={data.habits} removeHabit={deleteHabit}  completed={false} getSingleHabit={getSingleHabit} postToast={postToast} postArchive={postArchive} />

        <HabitsRow state={data.state} setData={setData} deleteHabit={removeCompleted} completed={true} isActive={"completed"}  habits={data.completedHabit} removeHabit={removeCompleted}  />
      <Modal handleClose={() => setData({type:"MODAL", modal:false})} isOpen={data.modal}>
            <NewHabit setData={setData} setInput={data.newHabit} goals={data.goal} repeat={data.repeat} labels={data.label}  handleSubmit={handleSubmitHabit} colors={data.cardColors}  habit={data.newHabit} isEdit={data.isEdit} editId={data.editId} error={error} postError={setError} editHabit={editHabit} postHabit={postHabit} postToast={postToast} /> 
      </Modal>
    </div>
  );
};

export default Home;