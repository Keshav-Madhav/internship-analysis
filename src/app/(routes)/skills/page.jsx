import Leftnavbar from '@/components/Leftnavbar'
import SkillMain from '@/components/Skills/SkillMain';

export const metadata = {
  title: 'Skills',
  description: 'Skills page',
};

const page = () => {
  return (
    <div className='w-full h-full flex gap-2 bg-[#181818]'>
      <Leftnavbar/>

      <SkillMain/>
    </div>
  )
}

export default page