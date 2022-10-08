import Homepage from "./pages/homepage";
import {data} from "./helper/data";
import './styles/style.css';

function App() {


  console.log(data);
  return (
    <div className="App">
    <Homepage data={data}/>
     
    </div>
  );
}

export default App;
