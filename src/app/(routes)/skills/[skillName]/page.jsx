import Leftnavbar from '@/components/Leftnavbar'
import SkillSpecificMain from '@/components/Skills/SkillSpecificMain';

export const metadata = {
  title: 'Skills',
  description: 'Skills page',
};

const page = async ({ params: { skillName } }) => {

  return (
    <div className='w-full h-full flex gap-2 bg-[#181818]'>
      <Leftnavbar/>

      <SkillSpecificMain skillName={skillName}/>
    </div>
  )
}

export default page