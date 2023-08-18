import { useState } from "react"

function Folder({handleInsertNode=()=>{},handleUpdateNode=()=>{},explore}){
    const [expand,setExpand]=useState(false);
    const [showInput,setShowInput]=useState({
        visible:false,
        isFolder:false,
        update:false
    });

  
    const handleNewFoder=(e,isFolder)=>{
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible:true,
            isFolder,
            update:false
        })
    }

    const handleUpdateFolder=(e,isFolder)=>{
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible:true,
            isFolder,
            update:true
        })
       
    }

    const onAddFolder=(e)=>{
        if(e.keyCode===13 && e.target.value){
            //add logic
            handleInsertNode(explore.id, e.target.value,showInput.isFolder);
            setShowInput({...showInput,visible:false});
        }
        
    }
    const onUpdateFolder=(e)=>{
        if(e.keyCode===13 && e.target.value){
            //update logic here
            handleUpdateNode(explore.id, e.target.value,showInput.isFolder);
            setShowInput({...showInput,visible:false});
        }
    }
    if(explore.isFolder){
        return(
            <div style={{margin:5}}>
                <div className="folder" onClick={()=>setExpand(!expand)}>
                    <div className="folderTitle">
                    <span >📂{explore.name}</span> 
                    {/* <input type="text" value={explore.name} id={explore.id} style={{visibility:"hidden"}}/> */}
                    </div>
                    <div>
                        <button onClick={(e)=>handleNewFoder(e,true)}>folder ➕</button>
                        <button onClick={(e)=>handleNewFoder(e,false)}>file ➕</button>
                        <button onClick={(e)=>handleUpdateFolder(e,true)}>Update🖋️</button>
                        <button>Delete 🗑️</button>
                    </div>
                </div>

                <div style={{display:expand?"block":"none", paddingLeft:25 }}>      


                    {
                        showInput.visible && (
                            <div className="inputContainer">
                                <span>{showInput.isFolder?"📂":"🗃️"}</span>
                                <input type="text" className="inputNew" 
                                onBlur={()=>setShowInput({...showInput,visible:false})}
                                // onKeyDown={onAddFolder}
                                onKeyDown={showInput.update?onUpdateFolder:onAddFolder}
                                autoFocus />
                            </div>
                        )
                    }
                    
                    {explore.item.map((exp)=>{
                        return showInput.update
                         ?<Folder handleUpdateNode={handleUpdateNode} explore={exp} key={exp.id}/>
                         :<Folder handleInsertNode={handleInsertNode} explore={exp} key={exp.id}/>
                    })}
                </div>
            </div>
        )
    }
    else{
        return <span className="file">🗃️ {explore.name}</span>
    }
    return(
        <>
            hello
        </>
    )
}
export default Folder;