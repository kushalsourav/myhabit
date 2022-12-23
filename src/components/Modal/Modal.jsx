import { useEffect } from "react";
import ReactPortal from "../ReactPortal/ReactPortal";
import "./Modal.css";

const Modal = ({children, isOpen , handleClose}) => {
    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
          document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
      }, [handleClose]);
    
     return(
        <>
        {
            isOpen && 
            <ReactPortal wrraperID={"wrrapedId"}>
            <div className="modal">
              <div className="content">
              <button onClick={handleClose} className="close-btn btn cta-btn">
                Close
              </button>
              {children}
              </div>
             </div>
            </ReactPortal>
        }
        </>
     );
};

export default Modal;