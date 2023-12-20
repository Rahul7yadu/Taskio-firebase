
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-blue-500 text-white h-16'>
      <div className='container mx-auto flex justify-between items-center align-middle'>
        <Link to='/' className='font-bold text-2xl'>Notio</Link>
        <nav className='flex gap-4'>
          <Link to='/about' className='text-white'>Login</Link>
          <Link to='/contact' className='text-white'>register</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
