import Link from 'next/link'
import {Button} from "@nextui-org/react";
import InternshipsBarGraph from './InternshipsBarGraph';
import InternshipsPieChart from './InternshipsPieChart';
import InternshipsCards from './InternshipsCards';

const JobsMain = () => {
  return (
    <div className='w-full h-[100vh] p-6 flex flex-col gap-4'>
      <div className='flex flex-col gap-2 w-full h-[10vh]'>
        <div className='flex justify-between items-center w-full px-2'>
          <h1 className='text-white text-2xl'>Internships</h1>
          <Button color="primary" variant="light" href="/profile" className='text-white hover:bg-gray-900 px-6 py-1 rounded-xl'>
            Profile
          </Button>  
        </div>
        <hr className='w-full h-0.5 bg-gray-700'/>
      </div>

      <div className='flex flex-col gap-2 w-full h-[48vh] justify-between'>
        <p className='text-white text-xl px-2'>Internships Analytics</p>
        <div className='flex gap-5 items-center w-[71vw] px-2 overflow-x-auto'>
          <InternshipsBarGraph/>
          <InternshipsPieChart/>
        </div>
        <hr className='w-full h-0.5 bg-gray-700'/>
      </div>

      <div className='flex flex-col gap-2 w-full h-[43vh] justify-between'>
        <div className='flex flex-col justify-between  w-full px-2'>
          <h1 className='text-white text-xl'>Potential Positions</h1>
          <InternshipsCards/>
        </div>
      </div>
    </div>
  )
}

export default JobsMain