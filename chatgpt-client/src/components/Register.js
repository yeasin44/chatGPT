import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import SocialLogin from './SocialLogin';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/chat';

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success('Registration successfull');
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="bg-slate-900 h-screen">
      <div className="flex justify-center items-center">
        <div className="w-96  bg-slate-700 h-80 mt-40 rounded-lg m-24">
          <form
            onSubmit={handleCreateUser}
            className="py-2 p-6 flex flex-col justify-center items-center"
          >
            <h1 className="text-4xl font-semibold text-white text-center m-4 mb-6">
              Login
            </h1>

            <div className="mb-4">
              <input
                name="email"
                type="email"
                placeholder="email"
                className="p-1 rounded lg:w-80 md:w-80 w-60"
                required
              />
            </div>
            <div className="">
              <input
                name="password"
                type="password"
                placeholder="password"
                className="p-1 rounded lg:w-80 md:w-80 w-60"
                required
              />
            </div>
            <div className="flex justify-center">
              <button className="bg-sky-500 px-6 py-1 rounded mt-4 text-white">
                Login
              </button>
            </div>
          </form>
          <div className="border m-2"></div>
          <div className="flex justify-center">
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
