import {AuthProvider} from "./AuthContext/AuthContext";
import { DataProvider } from "./DataContext/DataContext";

const ContextProvider = ({children}) => {
  return (
    <div>
     <AuthProvider>
      <DataProvider>
      {children}
      </DataProvider>
     </AuthProvider>
    </div>
  );
};

export default ContextProvider;