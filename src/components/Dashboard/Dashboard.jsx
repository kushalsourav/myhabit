import "./Dashboard.css";

const Dashboard = ({inProgress, completed, firstName}) => {
  return (
    <div className="dashboard">
        <h3 className="dashboard-head">Welcome, {firstName}</h3>
        <div className="dashboard-items">
            <div className="dashboard-card">
                <h5 className="dashboard-card-head">completed</h5>
                <p className="dashboard-card-count">{completed}</p>
                <small className="dashboard-text-total">Total count</small>
            </div>
            <div className="dashboard-card">
                <h5 className="dashboard-card-head">In Progress</h5>
                <p className="dashboard-card-count">{inProgress}</p>
                <small className="dashboard-text-total">Total count</small>
            </div>
            <div className="dashboard-card">
                <h5 className="dashboard-card-head">Overdue</h5>
                <p className="dashboard-card-count">{inProgress}</p>
                <small className="dashboard-text-total">Total count</small>
            </div>
            <div className="dashboard-card">
                <h5 className="dashboard-card-head">Total</h5>
                <p className="dashboard-card-count">{completed + inProgress}</p>
                <small className="dashboard-text-total">Total count</small>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;