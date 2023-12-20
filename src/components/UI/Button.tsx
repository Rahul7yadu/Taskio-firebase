
type props = {
    children?:React.ReactNode,
    onClick:()=> void|Promise<void>,
    checked?:boolean,
    loading?:boolean
}
export const CheckButton = ({onClick,checked}:props) => {
  return (
    <input 
    type='checkbox' 
    className='rounded-full w-4 h-4 m-4' 
    onChange={onClick} 
    checked={checked}></input>
  )
}

export const PlusButton = ({children,onClick}:props)=>{
    return (
        <button 
            className=' text-3xl rounded-full bg-slate-200 p-2 '
            onClick={onClick}>
            {children}➕
            </button>
    )
}


export const Button =({children,onClick,loading}:props)=>{
    return(
      <button onClick={onClick}
       className='p-2 bg-slate-500 text-white hover:bg-slate-400 max-h-max max-w-max rounded-lg transition-all' >
        {loading?<p className='animate-spin'>0</p>:children}
        </button>
    )
}