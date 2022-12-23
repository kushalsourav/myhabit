import Calendar from "react-calendar";
import "./Calender.css";

const Calender = ({startDate, endDate}) => {
  return (
    <div className="calender">
    <div className="calender-start">
    <p className="calender-name">start date</p>
      <Calendar  onChange={null} value={new Date(startDate !== undefined && startDate)} />
    </div>
    <div className="calender-end">
    <p className="calender-name">end date</p>
   <Calendar  onChange={null} value={new Date(endDate !== undefined && endDate)} />
    </div>
   </div>
  );
};

export default Calender;