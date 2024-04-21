"use client"

import Link from "next/link"

// const searchResults: {
//   title: string;
//   htmlTitle: string;
//   snippet: string;
//   htmlSnippet: string;
//   link: string;
//   displayLink: string;
// }[]

const SkillLearnings = ({skillName, searchResults}) => {

  return (
    <div className='flex flex-col gap-3'>
      <p className='text-lg text-gray-200'> Where do i learn {skillName.replaceAll("_", " ")}?</p>
      <div className="flex flex-col gap-3">
        {searchResults.map((result, resultIndex) => (
          <div className="flex flex-col gap-2">
            <hr className='w-full h-0.5 bg-gray-800 border-gray-700'/>

            <Link href={result.link} target="_blank" key={resultIndex} className='flex gap-2 items-center px-2 text-gray-300'>
              <img src={`https://icon.horse/icon/${result.displayLink}`} width={32} height={32} alt={result.displayLink}/>
              <div className="flex flex-col">
                <p className='text-base text-gray-200'>{result.displayLink}: <span className="text-xs text-gray-300">{result.title}</span></p>  
                <p className='text-sm px-1 truncate max-w-[60rem]'>{result.snippet}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillLearnings