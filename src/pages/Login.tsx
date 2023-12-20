import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword ,setPersistence,browserLocalPersistence} from 'firebase/auth';
import ErrorMessage from '../components/UI/Error';
import { Link, useNavigate } from 'react-router-dom';
import GoogleSignInButton from '../components/GoogleSign';
import { FirebaseError } from 'firebase/app';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [loading,setLoading] = useState(false)
  const [password, setPassword] = useState('');
  const [error,setError] = useState(false) 
  const [errorMessage,setErrorMessage] = useState("")
  const navigate = useNavigate();
   
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth,email, password);
      try {
      await setPersistence(auth,browserLocalPersistence);
      } catch (error) {
     console.log(error,"persistance error")   
      }
      setEmail('');
      setPassword('');
      setLoading(false)
      // Redirect or perform other actions after successful sign-up
     return navigate("/");
    } catch (error) {
      if (error instanceof FirebaseError) { // Check if it's a FirebaseError
        setErrorMessage(error.message.slice(9)); // Set the error message
      } else {
        setErrorMessage('An unknown error occurred.'); // Handle other types of errors
      }
      // Handle sign-up errors
      console.error('Error signing up:');
      setError(true)
      
      setLoading(false)
    }
  };

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full space-y-8">
      {error&&<ErrorMessage message={errorMessage} closeError={()=>setError(false)}/>}
        <div>
        <Link to='/'>
      🔙back
      </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in  
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e)=>handleSignUp(e)}>
          {/* Email Input */}
         
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 border-2 border-black"
              placeholder="Enter your address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              placeholder='enter you password'
              required
              className="mt-1 block w-full border-black rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 border-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Sign Up Button */}
          <div className='flex flex-col gap-2'>
            <button
              disabled={loading}
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            Sign In
            </button>
        <GoogleSignInButton />
          </div>
        </form>
        {/* Sign Up Link */}
        <div className="text-center">
          <Link
            to="/sign-up"
            className="text-indigo-600 hover:text-indigo-800 focus:outline-none"
           
          >
            create a new account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;