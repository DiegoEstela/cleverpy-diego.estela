import { Provider } from "react-redux";
import {store} from "./store";
import Router from './Router/index'
import { AuthProvider } from "./app/global/authContext";


function App() {
  return (
    <Provider store={store}>
      <AuthProvider> 
        <Router/>
      </AuthProvider>
    </Provider>
  );
}

export default App;
