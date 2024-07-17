import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../Redux/CounterSlice';
import { HiMinusSmall } from "react-icons/hi2";
import { HiMiniPlus } from "react-icons/hi2";

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.COUNTER.count)
  return (
    <div className='flex flex-col gap-1'>
      <h3>QTY</h3>
      <div className='flex justify-around items-center border-2 border-black w-[85px] h-6 '>
        <button onClick={() => dispatch(decrease())} className={`text-xl flex justify-center items-center outline-0 w-[20px] ${counter > 1 ? 'active:scale-75' : null}`}><HiMinusSmall /></button>
        <p className='flex justify-center items-center w-[20px] text-sm'>{counter}</p>
        <button onClick={() => dispatch(increase())} className='text-xl flex justify-center items-center outline-0 active:scale-75 w-[20px]'><HiMiniPlus /></button>
      </div>
    </div>
  )
}

export default Counter
