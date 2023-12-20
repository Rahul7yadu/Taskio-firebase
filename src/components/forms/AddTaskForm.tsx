import { useState } from "react"
import { addTodoForUsers } from "../../utils/firebaseFunctions"
import { User } from "firebase/auth"
{/* AddTaskForm.tsx */}
const style = {
    input: `w-full p-2 rounded-md outline-none border-b-2 border-gray-400 mb-2 active:border-blue-500 focus:border-blue-500 focus:shadow-lg`,
    button: `p-2 bg-green-500 text-white rounded-md w-full`,
}

const AddTaskForm = ({user}:{user:User|null}) => {

    const [loading,setLoading] = useState(false)
    const [text, setText] = useState<string>('')
    const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if(!user) return ;
      setLoading(true)
         await addTodoForUsers(user.uid,text)
        setText('')
        setLoading(false)
      }
  return (
    <form onSubmit={(e)=>formSubmitHandler(e)}>
    <input type='text' className={style.input} placeholder='Add a new task' onChange={(e)=>{{setText(e.target.value)}}} value={text}/>
    <button type='submit' className={style.button} disabled={loading} >{loading?'loading':'Add'}</button>
  </form>
  )
}
export default AddTaskForm