export const Task=(props)=>{
  const {deleteTask,id,taskName}=props;
    return (
        <div className="task">
          <h1>{taskName}</h1>
          <button onClick={()=>deleteTask(id)}>Delete</button> 
        </div>
      );
};