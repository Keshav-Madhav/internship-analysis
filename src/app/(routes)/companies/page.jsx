import Leftnavbar from '@/components/Leftnavbar'
import CompaniesMain from '@/components/Companies/CompaniesMain'

export const metadata = {
  title: 'Companies',
  description: 'Companies page',
};

const page = () => {
  return (
    <div className='w-full h-full flex gap-2 bg-[#181818]'>
      <Leftnavbar/>

      <CompaniesMain/>
    </div>
  )
}

export default page