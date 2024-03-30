import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
function incrementHandler()
{
  setCount(count + 1);

}
function decrementHandler()
{
  setCount(count - 1);
}
function resetHandler()
{
  setCount(0);
}
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#344151] flex-col gap-6 text-white">
    <div className="bg-white p-4 rounded-md text-center font-medium text-[#344151] text-lg">Increment & Decrement</div>
    <div className="bg-white p-4 rounded-md flex items-center gap-4">
      <button className="px-4 py-2 bg-blue-500 rounded-md text-white" onClick={incrementHandler}>+</button>
      <div className="text-black">{count}</div>
      <button className="px-4 py-2 bg-red-500 rounded-md text-white" onClick={decrementHandler}>-</button>
    </div>
    <div /*className="bg-white p-4 rounded-md"*/>
      <button className="px-4 py-2 bg-gray-500 rounded-md text-white" onClick={resetHandler}>Reset</button>
    </div>
  </div>
  );
}

export default App;
