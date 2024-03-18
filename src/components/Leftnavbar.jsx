"use client"

import {Listbox, ListboxItem} from "@nextui-org/react";

const Leftnavbar = () => {
  return (
    <div className='bg-[#101010] min-w-[25vw] h-[100vh] py-10 flex flex-col gap-[5rem] justify-between'>
      <h1 className='text-white text-4xl font-bold px-5'>Internship Analyzer</h1>

      <Listbox>
        <ListboxItem 
          key="internships" 
          href="/internships" 
          showDivider
          className="w-full text-white h-20 px-10"
          description="Look at job listings that fit your skill set"
        > 
          <p className="text-2xl">Internships</p>
        </ListboxItem>
        <ListboxItem 
          key="skills" 
          href="/skills" 
          showDivider
          className="w-full text-white h-20 px-10"
          description="See analytics of your skills in the market"
        > 
          <p className="text-2xl">Skills</p>
        </ListboxItem>
        <ListboxItem 
          key="companies" 
          className="w-full text-white h-20 px-10"
          href="/companies"
          showDivider
          description="Look at companies that are hiring your skillset"
        > 
          <p className="text-2xl">Companies</p>
        </ListboxItem>
      </Listbox>

      <Listbox className="pl-4">
        <ListboxItem 
          key="profile" 
          href="/profile" 
          className="w-[60%] text-white px-10 mb-4"
        > 
          Profile
        </ListboxItem>
        <ListboxItem 
          key="logout" 
          href="/login" 
          color="danger"
          className="w-[60%] text-danger px-10"
        > 
          Logout
        </ListboxItem>
        
      </Listbox>
    </div>
  )
}

export default Leftnavbar