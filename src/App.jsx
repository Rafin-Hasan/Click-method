import { useState } from 'react'
import './App.css'
import { FaPlus } from "react-icons/fa6";
import { IoIosRemove } from "react-icons/io";

function App() {
  const [data, setdata] = useState(0)
  const handleAdd = ()=>{
    setdata(data + 1)
  }
  const handleRemove = ()=>{
    setdata(data - 1)
  }
  return (
    <>
      <div className=" flex">
        <div className="img">
          <img src="src/assets/01.jpg" alt="Chocolate" />
        </div>
        <div className="shop">
          <h3 className=' text-4xl font-serif'>The 'BIG' Box Of Chocolates</h3>
          <p className=' text-xl mt-1 text-blue-500'>£60.00</p><br />
          <h4 className=' text-2xl font-normal'>Add to cart</h4>
          <div className=" flex gap-3 mt-2">
            <button onClick={handleRemove} className='p-2 border-2 border-black border-solid rounded-sm hover:bg-red-500 '>
              <IoIosRemove />
            </button>
            <h4 className='text-2xl font-bold'>{data}</h4>
            <button onClick={handleAdd} className='p-2 border-2 border-black border-solid rounded-sm hover:bg-green-600 '>
             <FaPlus />
            </button>
          </div>
          <br />
          <button className='btn'>
            <span class="span-mother">
              <span>L</span>
              <span>I</span>
              <span>K</span>
              <span>E</span>
              <span>_</span>
              <span>I</span>
              <span>T</span>
            </span>
            <span class="span-mother2">
              <span>B</span>
              <span>U</span>
              <span>Y</span>
              <span>-</span>
              <span>N</span>
              <span>O</span>
              <span>W</span>
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
