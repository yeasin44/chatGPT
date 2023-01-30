import React, { useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Translate from '../components/Translate';
import logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';

const Chat = () => {
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let chatLogNew = [...chatLog, { user: 'me', message: `${input}` }];
    setChatLog(chatLogNew);
    setInput('');

    // fetching data
    const messages = chatLogNew.map((message) => message.message).join('\n');

    const response = await fetch('https://chatgpt-server-sigma.vercel.app/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        message: messages,
      }),
    });

    const data = await response.json();
    setChatLog([...chatLogNew, { user: 'gpt', message: `${data.message}` }]);
    // console.log(data);
  };

  //   clear message
  const clearMessage = () => {
    setChatLog([]);
  };
  return (
    <div className="bg-slate-800 w-full h-full">
      <div>
        <Link to="/">
          <img src={logo} alt="" className="w-40 ml-24" />
        </Link>
      </div>
      <h1 className="text-2xl text-white font-bold text-center  absolute m-auto left-[43%] top-0 mt-12">
        Ask any questions
      </h1>
      <div className="">
        <div className="">
          {chatLog?.map((message, index) => (
            <Translate key={index} message={message} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <div
            className="w-14 h-14 border flex justify-center items-center mr-2 rounded cursor-pointer hover:bg-sky-400"
            onClick={clearMessage}
          >
            <div className="text-white font-bold text-4xl hover:scale-125 ">
              +
            </div>
          </div>
          <form onSubmit={handleSubmit} className=" w-3/4">
            <input
              placeholder="Type here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="mb-6 rounded bg-slate-900 text-white p-4 w-full"
            ></input>
          </form>

          <div className=" text-white text-2xl mt-4 mr-12 absolute right-28 hover:scale-125 transition-all">
            <button onClick={handleSubmit}>
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
