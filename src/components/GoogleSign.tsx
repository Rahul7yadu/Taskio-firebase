import { useNavigate } from "react-router-dom";
import {auth} from "../../firebase";
import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
const GoogleSignInButton = () => {
  const navigate = useNavigate()
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
   try {
   await  signInWithPopup(auth, provider)
   return navigate('/')
   } catch (error) {
        console.log(error)
   }
  };

  return (
    <button
      onClick={signInWithGoogle}
      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;
