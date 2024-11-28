"use client";
import { loginUserData } from '@/lib/features/user/userSlice';
import { useAppDispatch } from '@/lib/hooks';
import { IUser, IUserLogin } from '@/type/type';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const Login = () => {
  const {register, handleSubmit, reset} = useForm<IUserLogin>()
  const dispatch = useAppDispatch()
  const router = useRouter()
  const save = (data:IUserLogin)=>{
    console.log(data);
    dispatch(loginUserData(data))
    .unwrap()
    .then(res=>{
      console.log(res);
      localStorage.token = res.access_token
      router.push("/profile")
    })
    .catch(console.warn)
    
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(save)}>
        <input type="text" {...register("email")} />
        <input type="text" {...register("password")} />
        <button>Login</button>
      </form>
      <Link href={"/signup"}>Sign Up</Link>
    </div>
  )
}

export default Login
