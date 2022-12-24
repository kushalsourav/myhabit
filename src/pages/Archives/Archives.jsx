import {useData} from "../../contexts/DataContext/DataContext"
import Habitcard from '../../components/Habitcard/Habitcard';
import { deleteArchive, restoreArchive } from '../../apis/apis';
import Grid14 from '../../components/Ui/Grid-1-4/Grid14';
import useToast from '../../hooks/useToast';

const Archives = () => {
  const {data,setData} = useData();
  const postToast = useToast();
  
  return (
    <div>
    <h3 className="habit-head">Archives</h3>
    <Grid14>
      <Habitcard habits={data.archive} setData={setData} removeHabit={deleteArchive} restoreHabit={restoreArchive} postToast={postToast}/>
    </Grid14>
  </div>
  )
};

export default Archives;