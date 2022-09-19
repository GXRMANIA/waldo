import Waldo from "./components/Waldo";
import Header from "./components/Header/Header";
import start from "./firebase";
import './App.css'

function App() {

  let waldosArea = start();

  return (
    <div className="app">
      <Header/>
      <Waldo waldosArea={waldosArea}/>
    </div>
  );
}

export default App;
