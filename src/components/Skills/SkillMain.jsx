"use client"

import { useState } from 'react'
import { Button } from '@nextui-org/react'
import SkillsBarGraph from './SkillsBarGraph'
import { skillsData } from '@/utils/skillsAndDemand'

const SkillMain = () => {
  const [graphPage, setGraphPage] = useState(0)
  const maxPage = Math.ceil(skillsData.length/20)

  return (
    <div className='w-full h-[100vh] p-6 flex flex-col gap-4'>
      <div className='flex flex-col gap-2 w-full h-[10vh]'>
        <div className='flex justify-between items-center w-full px-2'>
          <h1 className='text-white text-2xl'>Skills Center</h1>
          <Button color="primary" variant="light" href="/profile" className='text-white hover:bg-gray-900 px-6 py-1 rounded-xl'>
            Profile
          </Button>  
        </div>
        <hr className='w-full h-0.5 bg-gray-700'/>
      </div>

      <div className='flex flex-col gap-6 px-2 h-[96vw] overflow-y-auto'>
        <div className='flex flex-col gap-2 w-full h-[52vh] justify-between'>
          <div className='flex justify-between items-center w-full'>
            <p className='text-white text-xl px-2'>Skills Analytics</p>

            <div className='flex gap-2 items-center justify-center'>
              <Button isDisabled={graphPage === 0} onClick={() => setGraphPage((prev) => prev-1)} color="primary" variant="flat" className='text-white hover:bg-gray-900 px-1 py-1 rounded-xl max-w-4 h-6'>
                {"<"}
              </Button>
              <Button isDisabled={graphPage === maxPage-1} onClick={() => setGraphPage((prev) => prev+1)} color="primary" variant="flat" className='text-white hover:bg-gray-900 px-1 py-1 rounded-xl max-w-4 h-6'>
                {">"}
              </Button>
            </div>
          </div>
          <div className='flex gap-5 items-center w-[71vw] px-2 overflow-x-hidden'>
            <SkillsBarGraph page={graphPage} skillsData={skillsData.slice(graphPage*20, (graphPage+1)*20)}/>
          </div>
          <hr className='w-full h-0.5 bg-gray-700'/>
        </div>
      </div>
    </div>
  )
}

export default SkillMain