import { useState } from "react"
const style = {
    input: `w-full p-2 rounded-md outline-none border-b-2 border-gray-400 mb-2 active:border-blue-500 focus:border-blue-500 focus:shadow-lg`,
    button: `p-2 bg-green-500 text-white rounded-md w-full`,
}

const NotLoggedInTaskForm = ({formSubmitHandler}:{formSubmitHandler:(text:string)=>void}) => {
 
    const [text,setText] = useState('')
    
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
    <input type='text' className={style.input} placeholder='Add a new task' onChange={(e)=>{{setText(e.target.value)}}} value={text}/>
    <button onClick={()=>formSubmitHandler(text)} className={style.button} >Add</button>
  </form>
  )
}
export default NotLoggedInTaskForm