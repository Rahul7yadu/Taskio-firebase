import './App.css'
import { TaskList } from './components/TaskList'
import { useEffect, useState } from 'react'
import AddTaskForm from './components/forms/AddTaskForm'
import { User } from 'firebase/auth'
import {collection, onSnapshot,doc, DocumentData} from 'firebase/firestore'
import {auth, firestore} from '../firebase'
import HeaderNew from './components/HeaderNew'
import NotLoggedInTaskForm from './components/forms/NotLoggedInTaskForm'
import NotLoggedInTasksList from './components/NotLoggedIn/NotLoggedInTaskList'


export type task  = {
  text: string,
  id: string,
  completed: boolean
} 
  const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
    container: `bg-slate-100 max-w-[800px] w-full m-auto rounded-md shadow-xl p-4 h-full`,
    heading: `text-3xl font-bold text-center text-gray-800 p-2`,
    input: `w-full p-2 rounded-md outline-none border-b-2 border-gray-400 mb-2 active:border-blue-500 focus:border-blue-500 focus:shadow-lg`,
    button: `p-2 bg-green-500 text-white rounded-md w-full`,
  }





function App() {
const [user,setUser]= useState<User|null>(null) 
const [firebaseTodos,setFirebaseTodos] = useState<Array<task|DocumentData>>([])

const [taskArray, setTaskArray] = useState<task[]>([{ id: '1,', text: 'please sign-in to save your tasks', completed: false }])
const [loading,setLoading] = useState(false)

useEffect(()=>{
  setLoading(true)
 const unsubscribe = auth.onAuthStateChanged((user)=>{
  if(user){
    setUser(user)
  }
  else{
    setUser(null)
    setFirebaseTodos([])
  }
})
setLoading(false)
return unsubscribe;
},[auth])

useEffect(()=>{
if(!user) return;
const unsubscribe = onSnapshot(collection(doc(firestore, 'users', user.uid), 'userTodos'),(snapshot)=>{
 const newArray =  snapshot.docs.map((doc)=> {return {id:doc.id,data:doc.data()}})
 setFirebaseTodos(newArray)
 })
return unsubscribe
},[user])


 



  function addTask(task: string) {
    if (task === '') return;
    const newTask: task = {
      id: Math.random().toString(),
      text: task,
      completed: false
    }
    setTaskArray(prev => [...prev, newTask])
  }

  function setTaskComplete(id: string) {
    const newTaskArray: task[] = taskArray.map((task) => {
      if (task.id === id) {
        return { text: task.text, id: task.id, completed: true } as task
      }
      return task;
    })
    setTaskArray(newTaskArray)
  }
  function setTaskUncomplete(id: string) {
    const newTaskArray: task[] = taskArray.map((task) => {
      if (task.id === id) {
        return { text: task.text, id: task.id, completed: false } as task
      }
      return task;
    })
    setTaskArray(newTaskArray)
  }

  function deleteTask(id:string){
      setTaskArray((prev)=>{
        return prev.filter((task)=>task.id!==id)
      })
  }
  const formSubmitHandler = (text:string) => {
    
    addTask(text)
  }
  return (
        
      <div className={style.bg}>
        {loading&&'loading...'}
        <div className={style.container}>
          <HeaderNew user={user}/>
          <h3 className={style.heading}>Taskio</h3>
          {user?
          <>
          <AddTaskForm user={user} />
         <TaskList taskArray={firebaseTodos}  userId={user?.uid}/>
          </>
          :
          <>
          <NotLoggedInTaskForm formSubmitHandler={formSubmitHandler}/>
          <NotLoggedInTasksList notLoggedInTasks={taskArray} setTaskComplete={setTaskComplete} setTaskUncomplete={setTaskUncomplete} deleteTask={deleteTask}/>
          </>
          }
          
          </div>
   

      </div>
    )
}

export default App
