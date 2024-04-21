import Leftnavbar from '@/components/Leftnavbar'
import { Button } from '@nextui-org/react'


export const metadata = {
  title: 'Skills',
  description: 'Skills page',
};

const page = async ({ params: { skillName } }) => {

  return (
    <div className='w-full h-full flex gap-2 bg-[#181818]'>
      <Leftnavbar/>

      <div className='w-full h-[100vh] p-6 flex flex-col gap-4'>
        <div className='flex flex-col gap-2 w-full h-[10vh]'>
          <div className='flex justify-between items-center w-full px-2'>
            <h1 className='text-white text-2xl'>{skillName.replaceAll("_", " ")}</h1>
            <Button color="primary" variant="light" href="/profile" className='text-white hover:bg-gray-900 px-6 py-1 rounded-xl'>
              Profile
            </Button>  
          </div>
          <hr className='w-full h-0.5 bg-gray-700'/>
        </div>
      </div>
    </div>
  )
}

export default page