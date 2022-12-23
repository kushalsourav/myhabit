import { useLocation, useNavigate } from 'react-router-dom';
import { useData } from '../contexts/DataContext/DataContext';
import { useAuth } from '../contexts/AuthContext/AuthContext';
import Router from "./Router/Router";
import Sidebar from "../components/Sidebar/Sidebar";
import Grid28 from "../components/Ui/Grid-2-8/Grid28";

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {data, setData, } = useData();
  const {handleLogout, authDispatch} = useAuth();
  return (
    <div>
              <Grid28>
          {location.pathname !== '/' && <Sidebar  setData={setData} timer={data.setTimer} navigate={navigate} handleLogout={handleLogout} authDispatch={authDispatch}/>}
          {location.pathname !== '/' &&
          <div className="container">
            <Router />
            </div> }
        </Grid28>
         {location.pathname === '/' && <Router />}
    </div>
  );
};

export default Main;