import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import store from "./store";
import Home from './presentations/views/Home'
const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Home/>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
