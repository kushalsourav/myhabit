import {AuthProvider} from "./AuthContext/AuthContext";

const ContextProvider = ({children}) => {
  return (
    <div>
     <AuthProvider>
        {children}
     </AuthProvider>
    </div>
  );
};

export default ContextProvider;