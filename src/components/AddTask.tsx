import { useState } from 'react'
import { PlusButton } from './UI/Button'
type props = {
  addTask: (task: string) => void,
}

export const AddTask = ({ addTask }: props) => {
  const [task, setTask] = useState('')
  return (
    <div className='flex items-center justify-between w-full fixed bottom-0'>

      <input onChange={(e) => setTask(e.target.value)} value={task} className='p-2  text-xl border-2 border-gray-200 rounded-lg w-3/4'
        type='text'
        placeholder='Add a new Task...'
      />
      <PlusButton onClick={() => { addTask(task); setTask('') }} />
    </div>
  )
}
