import Link from 'next/link'
import {Button} from "@nextui-org/react";
import CompaniesBarGraph from './CompaniesBarGraph';
import CompaniesPieChart from './CompaniesPieChart';
import CompaniesCards from './CompaniesCards';

const JobsMain = () => {
  return (
    <div className='w-full h-[100vh] p-6 flex flex-col gap-4'>
      <div className='flex flex-col gap-2 w-full h-[10vh]'>
        <div className='flex justify-between items-center w-full px-2'>
          <h1 className='text-white text-2xl'>Companies</h1>
          <Button color="primary" variant="light" href="/profile" className='text-white hover:bg-gray-900 px-6 py-1 rounded-xl'>
            Profile
          </Button>  
        </div>
        <hr className='w-full h-0.5 bg-gray-700'/>
      </div>

      <div className='flex flex-col gap-4 h-[96vw] overflow-y-auto'>
        <div className='flex flex-col gap-2 w-full h-[48vh] justify-between'>
          <p className='text-white text-xl px-2'>Companies Analytics</p>
          <div className='flex gap-5 items-center w-[71vw] px-2 overflow-x-auto'>
            <CompaniesBarGraph/>
            <CompaniesPieChart/>
          </div>
          <hr className='w-full h-0.5 bg-gray-700'/>
        </div>

        <div className='flex flex-col gap-2 w-full h-[43vh] justify-between'>
          <div className='flex flex-col justify-between  w-full px-2'>
            <h1 className='text-white text-xl'>Company Opportunities</h1>
            <CompaniesCards/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobsMain