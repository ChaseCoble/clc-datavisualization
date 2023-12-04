import {React} from "react";
import {Introduction} from "./components/introduction";
function App() {
  const [menuChoice, setMenuChoice] = "intro";
  function menuGeneration(choice){
    switch(choice){
      case 'intro':
        return <Introduction />
      case 'tutorial':
        return <Tutorial />
      case 'GDP':
        return <GDPTable />
      default:
        console.log("MenuGeneration error");
    }
  }
  return (
    <div className="App">
      <div className = "app-menu">
        <h1>Data Visualization Applications</h1>
        <div className = "app-menu-selection">
          <button onClick={()=>setMenuChoice('intro')}>Home</button>
          <button onClick={()=>setMenuChoice('tutorial')}>Tutorial</button>
          <button onClick={()=>setMenuChoice('GDP')}> GDP Bar Graph </button>
        </div>
        <div className = "app-menu-content">
          {menuGeneration(menuChoice)}
        </div>
      </div>
    </div>
  );
}

export default App;
