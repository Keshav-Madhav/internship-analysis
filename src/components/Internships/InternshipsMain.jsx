import Link from 'next/link'
import {Button} from "@nextui-org/react";

const JobsMain = () => {
  return (
    <div className='w-full h-full p-6 flex flex-col gap-2'>
      <div className='flex justify-between items-center w-full px-2'>
        <h1 className='text-white text-2xl'>Internships</h1>
        <Button color="primary" variant="light" href="/profile" className='text-white hover:bg-gray-900 px-6 py-1 rounded-xl'>
          Profile
        </Button>  
      </div>
      <hr className='w-full h-0.5 bg-gray-700'/>

    </div>
  )
}

export default JobsMain