import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full mt-20">
      <div className="w-20 h-20 border-8 border-dashed rounded-full animate-spin mt-5 border-red-600"></div>
    </div>
  );
};

export default Loading;
