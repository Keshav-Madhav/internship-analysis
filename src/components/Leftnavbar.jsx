import React from 'react'

const Leftnavbar = () => {
  return (
    <div className='bg-lime-100 w-[25%] h-[100vh]'>
        <div>
        <ul>
            <li className='text-xl text-lime-950'>Jobs</li>
            <li className='text-xl text-lime-950'>Companies</li>
            <li className='text-xl text-lime-950'>Skills</li>
            <li className='text-xl text-lime-950'>For you</li>
        </ul>
        </div>
        <button className='text-xl text-lime-950'>Profile :D </button>
    </div>
  )
}

export default Leftnavbar