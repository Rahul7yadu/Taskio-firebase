import {firestore} from '../../firebase'
import { addDoc, collection,doc, serverTimestamp,query,getDocs,deleteDoc,updateDoc } from 'firebase/firestore'

const addTodoForUsers = async (userId:string|undefined,text:string)=>{
    if(!userId) return ;
try {
    const userTodosRef = collection(doc(firestore, 'users', userId), 'userTodos');
  const res =  await addDoc(userTodosRef,{
    text,
    createdAt:serverTimestamp(),
    completed:false
   })
   return res;

} catch (error) {
    return error
}
}


const getTodoForUser = async (userId:string|undefined)=>{
    if(!userId) return 

    try {
        const userTodosRef = collection(doc(firestore, 'users', userId), 'userTodos');
        const q = query(userTodosRef);

        const querySnapshot = await getDocs(q);
        const todoList:any = [];

        querySnapshot.forEach((doc) => {
            todoList.push({ id: doc.id, ...doc.data() });
          });
          return todoList

    } catch (error) {
     return error;   
    }
}


const UpdateCompleteForUser = async (userId:string|undefined,todoId:string|undefined,setter:boolean) =>{
    if(!userId) return console.log("userId is undefined")

    try {
        if(!todoId) return  console.log("todoId not defined")
    const docRef = doc(firestore,'users',userId,'userTodos',todoId)
        
    await updateDoc(docRef,{
        completed:setter
    })
    console.log('deleted')
    } catch (error) {
        console.log("could not delete todo")
    throw new Error("could not delete the todo")    
    }

}


const deleteTodoForUser =async (userId:string|undefined,todoId:string) => {
    if(!userId) return console.log("userId is undefined")

    try {
        if(!todoId) return  console.log("todoId not defined")
    const docRef = doc(firestore,'users',userId,'userTodos',todoId)
        
    await deleteDoc(docRef)
    console.log('deleted')
    } catch (error) {
        console.log("could not delete todo")
    throw new Error("could not delete the todo")    
    }
}
export  {addTodoForUsers,getTodoForUser,deleteTodoForUser,UpdateCompleteForUser}