import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.jpg';

const Home = () => {
  return (
    <div className="">
      <img src={bg} alt="" className="h-screen w-full object-fill bg-cover" />
      <div className=" inset-0 absolute top-0  bg-gray-900 bg-opacity-80 overflow-hidden">
        <div className="flex justify-center items-center mt-60">
          <h1 className="lg:text-5xl text-2xl  text-white font-bold  text-center mb-6">
            Welcome to ChatGPT
          </h1>
        </div>
        <div className="flex justify-center items-center mt-6">
          <Link
            to="/chat"
            className="px-8 py-2 bg-sky-500 hover:bg-sky-600  rounded text-xl text-white font-bold  text-center hover:scale-105 transition-all"
          >
            Try It
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
