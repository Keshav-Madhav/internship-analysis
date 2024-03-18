'use client'
import React from 'react'
import {Input} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";

const Login = () => {

  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className='flex items-center justify-center h-[100vh] w-full bg-gray-900'>
      <h1>log in</h1>
        <form className='w-[50%] h-80 flex flex-col bg-black p-4' action="">
        <Input type="email" variant={'bordered'} label="Email" />
        <Input label="Password" variant="bordered" placeholder="Enter your password"
        endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
        }
        type={isVisible ? "text" : "password"}
    />
          <button>Forgot Password ?</button>
          <button>Sign in</button>
        </form>
      </div>
  )
}

export default Login