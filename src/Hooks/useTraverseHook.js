const useTraverse=()=>{
    const insertNode=function (tree,folderId, item,isFolder)
    {
        if(tree.id===folderId && tree.isFolder){
            tree.item.unshift({
                id:new Date().getTime(),
                name:item,
                isFolder,
                item:[]
            });
        }
        let latestNode=tree.item.map((ob)=>{
            return insertNode(ob,folderId, item,isFolder)
        });
        return{...tree,item:latestNode};
    }

    const updateNode=function (tree,folderId, item,isFolder) {
       
        if(tree.id===folderId){
            tree.name=item;
            return tree;
        }
        let latestNode=tree.item.map((ob)=>{
            return updateNode(ob,folderId, item,isFolder)
        });
        return{...tree,item:latestNode};
      }
    
   
    return{insertNode,updateNode};
}
export default useTraverse;