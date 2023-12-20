import { deleteTodoForUser,UpdateCompleteForUser } from "../utils/firebaseFunctions";
import { CheckButton } from "./UI/Button";


import { DocumentData } from "firebase/firestore";
type props = {
  task: DocumentData;
  
  userId:string|undefined,
  id:string
};
export const Task = ({ task,userId,id }: props) => {
  
  const deleteHandler = async ()=>{
    await deleteTodoForUser(userId,id)
  }

  const setTaskCompleteHandler = async  ()=>{
      await UpdateCompleteForUser(userId,id,!task.completed)
  }

  return (
    <div className="flex w-full p-2 bg-blue-200 hover:bg-blue-300 text-lg rounded-sm text-center items-center  justify-between" style={{backgroundColor:task.completed&&'greenyellow'}}>

    <li
      style={task.completed ? { textDecoration: "line-through" } : {}}
      className=" "
    >
      {task.text}
      <CheckButton onClick={() => setTaskCompleteHandler()} checked={task.completed} />
    </li>
      <button onClick={deleteHandler} className="bg-red-400 p-2 rounded-lg">
      <i className="fa-solid fa-trash" ></i>
        </button>
    </div>
  );
};

export default Task;

