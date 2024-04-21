import Link from 'next/link'
import React from 'react'

const SkillDefination = ({skillName, theory}) => {
  return (
    <div className='flex flex-col gap-1'>
      <p className='text-lg text-gray-300'> What is {skillName.replaceAll("_", " ")}?</p>
      <div className='flex flex-col px-2 gap-0.5'>
        {theory.summary.map((para, paraIndex) => (
          <p className='text-sm text-gray-300' key={paraIndex}>
            {para}
          </p>
        ))}
      </div>
      <p className='text-xs text-gray-300 px-2 flex gap-1'>
        <Link href={theory.url} className='underline text-blue-600' target='_blank'>Source</Link>
      </p>

      <p className='text-sm text-gray-300 mt-2'> Similar Skills:</p>
      <div className='flex flex-row flex-wrap gap-2 px-2'>
        {theory.similar.map((skill, skillIndex) => (
          <Link href={`/skills/${skill.title.replaceAll(" ", "_")}`} key={skillIndex} className='text-xs underline text-gray-400'>
            {skill.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SkillDefination