import React, { useState } from 'react'
import { TbRulerMeasure } from "react-icons/tb";
import { useSelector } from 'react-redux';
import { Product1 } from '../components/Product1';
import Counter from '../components/Counter';
import According from '../components/According';
import { ToastContainer } from 'react-toastify';


const LanPage = () => {

  const [selectedImage, setSelectedImage] = useState(Product1.images[0].img);
  const [selectedColor, setSelectedColor] = useState(Product1.colors[0].colorname);

  const handleImageClick = (IMAGE) => {
    setSelectedImage(IMAGE);
  };

  const handleColorClick = (IMAHC) => {
    setSelectedColor(IMAHC)
  }


  const quantity = useSelector((state) => state.COUNTER.count)
  const price = Number(Product1.price)
  const total = price * quantity
  const totalPrice = total.toLocaleString();


  return (
    <div className='flex justify-center items-center'>
      <ToastContainer className="text-right" /> 
      <div className='flex gap-8 w-[95%] py-10'>
        <div className='flex w-[49%] gap-4'>

          <div className='flex flex-col  gap-3'>
            {Product1.images.map((i) => {
              return (
                <div key={i.idimg} className='w-[105px] h-[105px] cursor-pointer '>
                  <img src={i.img} className={` w-full  ${selectedImage === i.img ? 'opacity-[0.5]' : null}`} onClick={() => handleImageClick(i.img)} />
                </div>
              )
            })}
          </div>
          <div className='w-[585px] h-[585px] '>
            <img src={selectedImage} className='w-full h-full' />
          </div>
        </div>



        <div className='flex w-[49%] '>
          <div className='flex flex-col gap-4 w-[70%]'>

            <div className='flex flex-col gap-4 border-b-2 border-[#484848] pb-3'>
              <h1 className=' tracking-[0.1em]'>{Product1.title}</h1>
              <div className='flex gap-1 text-lg  '>
                <p>{totalPrice}</p>
                <p>Tomans</p>
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <div className='flex gap-1'>
                <h3>Color:</h3>
                <h3>{selectedColor}</h3>
              </div>

              <div className='flex justify-between w-[260px]'>
                {Product1.colors.map((i) => {
                  return (
                    <div key={i.idimac} className={`flex justify-center items-center cursor-pointer p-1 ${selectedColor === i.colorname ? 'border-2 border-black' : 'border-2 border-[#FBFBFB]'}`} onClick={() => handleColorClick(i.colorname)}>
                      <img src={i.imgc} className='w-[50px] h-[50px]' />
                    </div>
                  )
                })}
              </div>
            </div>


            <div className='flex flex-col gap-1'>
              <h3>Size:</h3>
              <div className='flex flex-wrap gap-2'>
                {Product1.sizes.map((i) => {
                  return (
                    <div key={i.idsiz} className={`flex justify-center items-center w-[140px] border-2 ${i.inventory ? ' border-black cursor-pointer' : 'border-gray-300 text-gray-300'}`}>
                      <p>{i.size}</p>
                      {!i.inventory && <div className='border-solid border border-gray-300 rounded-full -rotate-[80deg] h-[140px] absolute' />}
                    </div>
                  )
                })}
              </div>
              <div className='flex items-center gap-1'>
                <TbRulerMeasure />
                <p className='border-b-2 border-black '>Measuring Guide</p>
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <h3>Lining:</h3>
              <div className='flex flex-wrap gap-2'>
                {Product1.linings.map((i) => {
                  return (
                    <div key={i.idlin} className='flex justify-center items-center border-2 border-black w-[140px] cursor-pointer'>
                      <p>{i.linin}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <Counter />

            <div className='flex flex-col gap-3'>
              <div className='flex justify-center items-center bg-[#868580] h-[40px] cursor-pointer hover:bg-[#757575]'>
                <p className='text-white'>ADD TO BAG</p>
              </div>
              <div className='flex justify-center items-center h-[40px] border-2 border-[#868580] cursor-pointer'>
                <p className='text-[#868580] '>SAVE TO WISHLIST</p>
              </div>
            </div>

            <According />

          </div>
        </div>
      </div>
    </div>
  )
}

export default LanPage
