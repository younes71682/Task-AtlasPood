import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { login } from './Redux/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';



const LoginPage = () => {


    const form = useForm()
    const { register, handleSubmit, formState, reset } = form
    const { errors } = formState


    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };


    const dispatch = useDispatch()
    const handleLogin = async (data) => {
        dispatch(login(data))
        reset()
    }


    const navigate = useNavigate()
    const isLogin = useSelector((state) => state.AUTH.isLogin)
    useEffect(() => {
        if (isLogin) {
            navigate('/Product1')
        }
    }, [isLogin, navigate])

    return (
        <div style={{ backgroundImage: 'url("/first_project/HomeImage.jpg")' }} className='bg-fixed bg-cover  h-[100vh] flex justify-center items-center '>
            <ToastContainer className="text-right" />
            <div className=' shadow-[0px_0px_30px_0px_rgb(31,38,135,0.37)] backdrop-blur-[8px] w-[55%] h-[380px] rounded-3xl flex items-center justify-center'>
                <div className='flex flex-col items-center justify-between h-[260px]'>
                    <h1 className='text-2xl'>ورود کاربر</h1>
                    <form className='flex flex-col text-right' onSubmit={handleSubmit(handleLogin)} noValidate>
                        <div className='flex flex-col h-[63px] w-[280px] gap-1'>
                            <input {...register('username', { required: true, pattern: /^[A-Za-z]|[1-9]+$/i })} placeholder='نام کاربری*' className='text-[#484848] border-2 border-[#C68E17] rounded-md w-full h-[44px] p-2 text-right placeholder:text-right outline-0 focus:border-[rgba(111,66,193,1)] focus:shadow-[0_0px_10px_0px_rgba(111,66,193,1)] ' />
                            {errors.username?.type === 'required' && <p className='text-red-700 text-xs'>نام کاربری خود را وارد کنید</p>}
                            {errors.username?.type === 'pattern' && <p className='text-red-700 text-xs'>نام کابری شامل عدد و حروف میباشد</p>}
                        </div>
                        <div className='flex flex-col h-[63px] w-[280px] gap-1 relative'>
                            <input {...register('password', { required: true, pattern: /^[1-9]+$/i, minLength: 8, })} maxLength={16} type={passwordShown ? 'text' : 'password'} placeholder='رمز عبور*' className='text-[#b85252] border-2 border-[#C68E17] rounded-md w-full h-[44px] p-2 text-right placeholder:text-right outline-0 focus:border-[rgba(111,66,193,1)] focus:shadow-[0_0px_10px_0px_rgba(111,66,193,1)]' />
                            <div onClick={togglePasswordVisiblity}>
                                {passwordShown ? <MdVisibilityOff className='absolute left-3 top-[14px] cursor-pointer active:scale-75 text-[rgba(111,66,193,1)] ' onClick={togglePasswordVisiblity} /> : <MdVisibility className='absolute left-3 top-[14px] cursor-pointer active:scale-75 text-[rgba(111,66,193,1)]' />}
                            </div>
                            {errors.password?.type === 'required' && <p className='text-red-700 text-xs'>رمز عبور خود را وارد کنید</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-700 text-xs'>رمز عبور فقط شامل عدد میباشد</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-700 text-xs'>رمز عبور باید حداقل 8 رقم باشد</p>}
                        </div>
                        <button className={`flex justify-center items-center mt-2 bg-[rgba(111,66,193,1)] text-white text-lg rounded-lg mx-14 h-[43px] outline-0 hover:shadow-[0_0px_10px_0px_rgba(111,66,193,1)] focus:shadow-[0_0px_10px_0px_rgba(111,66,193,1)] `}>
                            ورود
                        </button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default LoginPage
