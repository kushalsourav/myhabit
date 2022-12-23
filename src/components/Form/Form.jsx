import Input from "./Input/Input";
import './Form.css';


const Form = ({type, setInput,postInput, onHandleSubmit, passVisible, setPassVisible, error}) => {
    let form;
    switch (type) {
        case 'signin':
            form =   <>
            <Input  name="email" placeholder="Enter your email"  id="Email" value={setInput.email} postInput={postInput}  /> 
            <Input  name="password" placeholder="Enter your password"  id="password" value={setInput.password} postInput={postInput} passVisible={passVisible} 
            setPassVisible={setPassVisible}  /> 
           </>
            break;
        case 'signup':
            form = <>
            <Input  name="email" placeholder="Enter your email" id="Email" value={setInput.email} postInput={postInput} error={error} /> 
            <Input  name="firstName" placeholder="Enter your firstname"  id="firstname" value={setInput.firstName} postInput={postInput} error={error} /> 
            <Input  name="lastName" placeholder="Enter your lastname" id="lastname" value={setInput.lastName} postInput={postInput} error={error} />
            <Input  name="password" placeholder="Enter your password" value={setInput.password} id="password" postInput={postInput} passVisible={passVisible} setPassVisible={setPassVisible} error={error} /> 
            <Input  name="confirmPassword" placeholder="Confirm your password" value={setInput.confirmPassword} id="confirmpassword" postInput={postInput} passVisible={passVisible} setPassVisible={setPassVisible} error={error} />
           </>
            break;
        default:
            break;
    }
    return(
        <>
        <form className="form-box" onSubmit={onHandleSubmit}>
              {form}
            <div className="form-btn">
                 <button className="btn cta-btn btn-large">submit</button> 
            </div>
        </form>
        </>
    )
};

export default Form;