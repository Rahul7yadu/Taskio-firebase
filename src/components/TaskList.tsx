import { DocumentData } from "firebase/firestore"
import { task } from "../App"
import { Task } from "./Task"
type props = {
    taskArray:DocumentData[],
    setTaskComplete?:(id:string)=>void,
    notLoggedInTasks?:task[],
    userId:string|undefined
}
export const TaskList = ({taskArray,userId}:props) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h1 className="text-2xl">Todos</h1>
      <ul className="flex flex-col gap-3 overflow-scroll h-[300px]">
        {taskArray&&taskArray.map((task) => (
          
            <Task task={task.data}  key={task.id} id={task.id} userId={userId}/>
          
        ))}
        
      </ul>
    </div>
  )
}

export default TaskList