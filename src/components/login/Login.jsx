'use client'
import {useState} from 'react'
import {Input} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import {Button} from "@nextui-org/react";
import { toast } from 'sonner';
import { accountsArray } from '@/utils/savedAccounts';

const Login = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignIn = () => {
    if (accountsArray.find((account) => account.email === email && account.password === password)) {
      window.location.href = '/internships';
      toast.success(`Welcome back ${accountsArray.find((account) => account.email === email).userName}!`, {
        description: 'You have successfully logged in.'
      });
    } else {
      toast.error('Invalid email or password.');
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh] w-full bg-gray-900 ">
        <form className='w-[30rem]  flex flex-col items-center bg-black p-4 space-y-3 rounded-xl' action="">
        <h1 className='text-slate-400 text-4xl'>Log in</h1>
        <Input className='text-white' type="email" value={email} variant={'bordered'} label="Email" onChange={(e) => setEmail(e.target.value)}/>
        <Input className='text-white' label="Password" variant="bordered" placeholder="Enter your password"
        endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none border-slate-300" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none border-slate-300" />
          )}
        </button>
        }
        type={isVisible ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <div className='w-full h-full flex flex-col space-y-10'>
        <div className='flex items-start'><button className='text-white'>Forgot Password ?</button></div>
          <Button className='text-white border-slate-300 bg-slate-600/60' color='primary' variant="bordered" onClick={handleSignIn}> Sign in </Button> 
        </div>
        <div className='text-slate-600'>Don't have any account? <button className='text-slate-400'>Log in</button></div>
        </form>
      </div>
  )
}

export default Login