
import { task } from "../../App"
import NotLoggedInTask from "./NotLoggedInTask"
type props = {
   
   deleteTask:(id:string)=>void,
   setTaskComplete:(id:string)=>void,
   setTaskUncomplete:(id:string)=>void
    notLoggedInTasks?:task[],
    
}
export const NotLoggedInTasksList = ({notLoggedInTasks,setTaskComplete,setTaskUncomplete,deleteTask}:props) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h1 className="text-2xl">Todos</h1>
      <ul className="flex flex-col gap-3 overflow-scroll h-[300px]">
        {notLoggedInTasks&&notLoggedInTasks.map((task) => (
          
            <NotLoggedInTask task={task}  key={task.id}  deleteTask={deleteTask} setTaskComplete={setTaskComplete} setTaskUncomplete={setTaskUncomplete}/>
          
        ))}
        
      </ul>
    </div>
  )
}

export default NotLoggedInTasksList