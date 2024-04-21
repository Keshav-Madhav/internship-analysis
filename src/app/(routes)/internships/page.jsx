import Leftnavbar from '@/components/Leftnavbar'
import JobsMain from '@/components/Internships/InternshipsMain'

export const metadata = {
  title: 'Internships',
  description: 'Internships page',
};

const page = () => {
  return (
    <div className='w-full h-full flex gap-2 bg-[#181818]'>
      <Leftnavbar/>

      <JobsMain/>
    </div>
  )
}

export default page