import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const SocialLogin = () => {
  const { socialLogin, setLoading } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/chat';

  const handleGoogleLogin = () => {
    socialLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Login successfull');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="px-8 py-2 rounded  text-white bg-slate-900 text-xl"
      >
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
