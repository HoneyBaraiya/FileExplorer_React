import { useState } from "react";
import explorer from "./data/folder_data";
import Folder from "./component/Folder";
import './style.css'
import useTraverse from "./Hooks/useTraverseHook";
function App() {

  const [exploreData,setExploreData]=useState(explorer);
  
  const {insertNode}=useTraverse();

  const handleInsertNode=(folderId, item,isFolder)=>{
    const finalTree=insertNode(exploreData,folderId, item,isFolder);
    setExploreData(finalTree);
  }
  return (
    <>
      <Folder handleInsertNode={handleInsertNode} explore={exploreData}/>
    </>
  );
}

export default App;
