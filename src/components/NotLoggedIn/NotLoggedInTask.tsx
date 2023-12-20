
import { CheckButton } from "../UI/Button";
import { task } from "../../App";
type props = {
  task: task;
  setTaskComplete: (id: string) => void;
  setTaskUncomplete:(id:string)=>void;
  deleteTask:(id:string)=>void
  };
export const NotLoggedInTask = ({ task, setTaskComplete,setTaskUncomplete,deleteTask }: props) => {
  
  const deleteHandler = async ()=>{
    deleteTask(task.id)
  }

  const setTaskCompleteHandler = async  ()=>{
    if(task.completed){
        return setTaskUncomplete(task.id)
    }
    setTaskComplete(task.id)
  }

  return (
    <div className="flex w-full p-2 bg-blue-200 hover:bg-blue-300 text-lg rounded-sm text-center items-center  justify-between">

    <li
      style={task.completed ? { textDecoration: "line-through" } : {}}
      className=" "
    >
      {task.text}
      <CheckButton  onClick={() => setTaskCompleteHandler()} checked={task.completed} />
    </li>
      <button onClick={deleteHandler} className="bg-red-400 p-2 rounded-lg">
      <i className="fa-solid fa-trash" ></i>
        </button>
    </div>
  );
};

export default NotLoggedInTask;