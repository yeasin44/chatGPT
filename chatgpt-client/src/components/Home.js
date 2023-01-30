import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.jpg';

const Home = () => {
  return (
    <div>
      <img src={bg} alt="" className="bg-cover h-screen w-full object-fill" />
      <div className="flex justify-center items-center">
        <h1 className="text-4xl absolute top-0 mt-60 text-white font-bold  text-center">
          Welcome to ChatGPT
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <Link
          to="/chat"
          className="px-8 py-2 bg-sky-500 hover:bg-sky-600 absolute top-0 mt-80 rounded text-xl text-white font-bold  text-center hover:scale-105 transition-all"
        >
          Try It
        </Link>
      </div>
    </div>
  );
};

export default Home;
