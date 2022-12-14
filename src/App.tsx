import { useQuery } from "react-query";
import { getAllPost } from "./api/services/getAllPost";
function App() {
  const {data: allPost } = useQuery(['allPost'],() => getAllPost())
  console.log(allPost)

  return (
    <div className="App">
      <h1>hola</h1>
    </div>
  );
}

export default App;
