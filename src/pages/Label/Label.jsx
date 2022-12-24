import { useRef  } from "react";
import { deleteLabel, postLabel } from "../../apis/apis";
import { useData } from "../../contexts/DataContext/DataContext";
import useToast from "../../hooks/useToast";
import "./Label.css";

const Label = () => {
  const {data, setData} = useData()
  const postToast = useToast();
  const inputRef = useRef(null);
  const handleClick = (e, postLabel, input, postToast) => {
    e.preventDefault()
    postLabel(input.current.value, setData, postToast)
    input.current.value = ""
  }
  return (
    <div className="label-box">
    <form className="form-box" onSubmit={(e) => handleClick(e,postLabel,inputRef, postToast)}>
    <label className="input-label">
    <input ref={inputRef}  type={"text"} name="label" className="input" placeholder="Enter your label name" />
      <button className="btn btn-large cta-btn">submit</button>
    </label>
    </form>

      {data.label.map((label) => {
        return(
          <div className="label-list" key={label}>
          <li >{label}</li>
          <button className="btn-icon" onClick={() => {deleteLabel(label,  setData, postToast)}}>
              <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
          </div>
        )
      })}
    

  </div>
  );
};

export default Label;