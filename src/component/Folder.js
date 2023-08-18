import { useState } from "react"

function Folder({handleInsertNode=()=>{},explore}){
    const [expand,setExpand]=useState(false);
    const [showInput,setShowInput]=useState({
        visible:false,
        isFolder:false
    });
    const handleNewFoder=(e,isFolder)=>{
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible:true,
            isFolder
        })
    }
    const onAddFolder=(e)=>{
        if(e.keyCode===13 && e.target.value){
            //add logic
            handleInsertNode(explore.id, e.target.value,showInput.isFolder);
            setShowInput({...showInput,visible:false});
        }
        
    }
    if(explore.isFolder){
        return(
            <div style={{margin:5}}>
                <div className="folder" onClick={()=>setExpand(!expand)}>
                    <span>📂{explore.name}</span>
                    <div>
                        <button onClick={(e)=>handleNewFoder(e,true)}>folder ➕</button>
                        <button onClick={(e)=>handleNewFoder(e,false)}>file ➕</button>
                    </div>
                </div>

                <div style={{display:expand?"block":"none", paddingLeft:25 }}>      


                    {
                        showInput.visible && (
                            <div className="inputContainer">
                                <span>{showInput.isFolder?"📂":"🗃️"}</span>
                                <input type="text" className="inputNew" 
                                onBlur={()=>setShowInput({...showInput,visible:false})}
                                onKeyDown={onAddFolder}
                                autoFocus />
                            </div>
                        )
                    }
                    
                    {explore.item.map((exp)=>{
                        return <Folder handleInsertNode={handleInsertNode} explore={exp} key={exp.id}/>
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