
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';
import { User } from 'firebase/auth';
import AvatarTooltip from './UI/Avatar';
// Your logo component
const Logo = () => (
  <div className="flex items-center">
    {/* Your logo */}
    <img src="taskio.jpg" alt="Logo" className="h-8 w-auto" />
  </div>
);

const HeaderNew = ({user}:{user:User|null}) => {
  return (
    <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
      <Logo />
      {user ? (
        // Show user's avatar or name when logged in
        <div>
          <AvatarTooltip userEmail={user.email} photoUrl={user.photoURL} signOut={()=>auth.signOut()}/>
          <h2>{user.displayName}</h2>
          {/* You can show user's avatar
          {user.photoURL&&<img src={user.photoURL?.toString() || ''} alt="User Avatar" className="h-8 w-8 rounded-full" />}
          {/* Or user's display name */}
          {/* {user.displayName}
          <span className="ml-2">{user.email}</span>
          <button className="ml-2" onClick={() =>{ auth.signOut()}}>
            Sign out
          </button> */} 
        </div>
      ) : (
        <Link to='/sign-in' className='text-white hover:bg-slate-800 rounded-lg p-2 border-2 border-white'>
            
           Sign-in
            
        </Link>
        // Show sign-in component when not logged in
      )}
    </header>
  );
};

export default HeaderNew;
