import { Link , useLocation} from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({setData, timer, handleLogout, authDispatch, navigate}) => {
    return (
        <>
        <div className="sidebar">
             <div className="sidebar-user">
             <Link to="/Home" onClick={(e) => timer && e.preventDefault() } className="sidebar-items">
                <div className="sidebar-icon"><i className="fa fa-home" aria-hidden="true"></i></div>
                <div className="sidebar-item-name">Home</div>
            </Link>
            {/* <button disabled={timer} onClick={(e) => timer && e.preventDefault() }> */}
            <Link to="/Label" onClick={(e) => timer && e.preventDefault() } className="sidebar-items">
                 <div className="sidebar-icon"><i className="fa fa-tag" aria-hidden="true"></i>
                 </div>
                <div className="sidebar-item-name">Label</div>
            </Link>
            {/* </button> */}
            <Link to="/Archive" onClick={(e) => timer && e.preventDefault() } className="sidebar-items">
            <div className="sidebar-icon"><i className="fa fa-archive" aria-hidden="true"></i></div>
                <div className="sidebar-item-name">Archive</div>
            </Link> 
            <Link to="/Profile" onClick={(e) => timer && e.preventDefault() } className="sidebar-items">
                <div className="sidebar-icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></div>
                <div className="sidebar-item-name">Profile</div>
            </Link>
            {
                useLocation().pathname === "/Home" &&
                <div>
                <button className="cta-btn btn btn-large" onClick={() => {
                     setData({type:"IS_EDIT", isEdit:false})
                     setData({type:"CLEAR_INPUT"})
                    setData({type:"MODAL", modal:true})
            
            }}>Create new note</button>
            </div>
            }
             </div>
             <div>
             <button className="btn cta-btn btn-logout" onClick={() => 
            {handleLogout(authDispatch, navigate)}}>
            {"logout" }
            </button>
             </div>
        </div>
        </>
    );
};

export default Sidebar;