import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [logInForm,setSignInForm]=useState(true);
    const ToggleLogInForm=()=>
    {
        setSignInForm(!logInForm);
    }
  return (
    <div>
    <div className='absolute'>
        <Header />
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg' alt='bg'/>

    </div>
    <form className='w-3/12 absolute bg-black p-12 my-32 mx-auto left-0 right-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{logInForm?"Log In":"Sing Up"} </h1>
        {!logInForm&&<input type='email' placeholder='Full Name' className='p-3 my-3 w-full bg-gray-700 placeholder-white'/>}
        <input type='email' placeholder='Email or mobile number' className='p-3 my-3 w-full bg-gray-700 placeholder-white'/>
        <input type='password' placeholder='password' className='p-3 my-3 w-full  bg-gray-700 placeholder-white'/>
        <button className='bg-red-700 my-2 p-3 w-full rounded-lg' >{logInForm?"LogIn":"SingUp"}</button>
        <p className='cursor-pointer' onClick={ToggleLogInForm}>{logInForm?"New to Netflix? Sign up now":"Already have an account ? Log In now"}</p>
    </form>
    </div>
) 
}

export default Login