"use client"

import {Button} from "@nextui-org/react";
import InternshipsBarGraph from './InternshipsBarGraph';
import InternshipsPieChart from './InternshipsPieChart';
import InternshipsCards from './InternshipsCards';
import { useState } from 'react';
import { internshipsData } from "@/utils/internshipPositions";

const JobsMain = () => {
  const [graphPage, setGraphPage] = useState(0)
  const maxPage = Math.ceil(internshipsData.length/15)

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

      <div className='flex flex-col gap-4 h-[96vw] overflow-y-auto'>
        <div className='flex flex-col gap-2 w-full h-[48vh] justify-between'>
          <div className='flex justify-between items-center w-full'>
            <p className='text-white text-xl px-2'>Internships Analytics</p>

            <div className='flex gap-2 items-center justify-center'>
              <Button isDisabled={graphPage === 0} onClick={() => setGraphPage((prev) => prev-1)} color="primary" variant="flat" className='text-white hover:bg-gray-900 px-1 py-1 rounded-xl max-w-4 h-6'>
                {"<"}
              </Button>
              <Button isDisabled={graphPage === maxPage-1} onClick={() => setGraphPage((prev) => prev+1)} color="primary" variant="flat" className='text-white hover:bg-gray-900 px-1 py-1 rounded-xl max-w-4 h-6'>
                {">"}
              </Button>
            </div>
          </div>
          <div className='flex gap-5 items-center w-[71vw] px-2 overflow-x-auto'>
            <InternshipsBarGraph page={graphPage} internshipsData={internshipsData.slice(graphPage*15, (graphPage+1)*15)}/>
            <InternshipsPieChart/>
          </div>
          <hr className='w-full h-0.5 bg-gray-700'/>
        </div>

        <div className='flex flex-col gap-2 w-full h-[43vh] justify-between'>
          <div className='flex flex-col justify-between  w-full px-2'>
            <h1 className='text-white text-xl'>Potential Positions ({internshipsData.length})</h1>
            <InternshipsCards/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobsMain