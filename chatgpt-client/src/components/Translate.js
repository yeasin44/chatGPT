const Translate = ({ message }) => {
  return (
    <div className="container m-auto px-6 py-2 relative flex justify-center">
      <div className="flex  items-center bg-slate-700 p-4 rounded-lg mt-4 w-4/5 ">
        <div className="w-4 h-4 bg-white rounded-full ml-20"></div>
        <div className="ml-6 text-white">{message.message}</div>
      </div>
    </div>
  );
};

export default Translate;
