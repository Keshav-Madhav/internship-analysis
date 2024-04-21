"use client"

import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import SkillDefination from './SkillDefination';
import SkillLearnings from './SkillLearnings';

const SkillSpecificMain = ({skillName}) => {
  const [searchResults, setSearchResults] = useState();

  const [theory, setTheory] = useState();
    
  useEffect(() => {
    const getSearchResults = async () => {
      const url = `https://google-search72.p.rapidapi.com/search?q=learn%20${skillName.replaceAll("_", "%20")}&gl=us&lr=lang_en&num=10&start=0`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'bfa9890d21mshcd8092b1728c5bep1cacadjsn87ca49384f74',
          'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        if(response.status === 200) {
          setSearchResults(result.items);
        }
      } catch (error) {
        console.error(error);
      }
    }

  const getTheory = async () => {
      const url = `https://wiki-briefs.p.rapidapi.com/search?q=${skillName.replaceAll("_", "%20")}&topk=5`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'bfa9890d21mshcd8092b1728c5bep1cacadjsn87ca49384f74',
          'X-RapidAPI-Host': 'wiki-briefs.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        if(response.status === 200) {
          setTheory(result);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getTheory();
    getSearchResults();
  },[skillName]);

  return (
    <div className='w-full h-[100vh] p-6 flex flex-col gap-4'>
      <div className='flex flex-col gap-2 w-full h-[10vh]'>
        <div className='flex justify-between items-center w-full px-2'>
          <h1 className='text-white text-2xl'>{skillName.replaceAll("_", " ")} <span className='text-gray-200 text-base'>(skill)</span></h1>
          <Button color="primary" variant="light" href="/profile" className='text-white hover:bg-gray-900 px-6 py-1 rounded-xl'>
            Profile
          </Button>  
        </div>
        <hr className='w-full h-0.5 bg-gray-700'/>
      </div>

      <div className='flex flex-col gap-6 px-2 h-[96vw] overflow-y-auto'>
        {theory ? <SkillDefination skillName={skillName} theory={theory}/> : <p className='text-gray-300'>Loading...</p>}

        <hr className='w-full h-0.5 bg-gray-700'/>

        {(searchResults && searchResults.length > 0) ? <SkillLearnings skillName={skillName} searchResults={searchResults}/> : <p className='text-gray-300'>Loading...</p>}
      </div>
    </div>
  )
}

export default SkillSpecificMain