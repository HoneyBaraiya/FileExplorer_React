import { useState } from "react";
import explorer from "./data/folder_data";
import Folder from "./component/Folder";
import './style.css'
function App() {

  const [exploreData,setExploreData]=useState(explorer);
  
  return (
    <>
      <Folder explore={exploreData}/>
    </>
  );
}

export default App;
