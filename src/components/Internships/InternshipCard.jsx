"use client"

import {Card,CardBody,Image,CardHeader,Divider, Button} from "@nextui-org/react";
import Link from "next/link";

const InternshipCard = ({item, color}) => {
  return (
    <Card className="min-w-[20rem] max-w-[34vw] w-[50%] border-2 border-[rgba(255,99,132,0.8)]">
      <Link className="text-lg" href={`/internships/${item.position.replaceAll(" ", "_")}`} onClick={(e)=> e.stopPropagation()}>
        <CardHeader className="flex gap-3 p-3">
          <Image
            alt={item.position}
            height={40}
            radius="sm"
            src={item.img}
            width={40}
          />
          {item.position}
        </CardHeader>
      </Link>

      <p className="px-2 pb-1">No. of jobs: {item.count}</p>
      <Divider/>

      <CardBody className="flex flex-row gap-1 flex-wrap h-fit items-center">
        <p className="text-sm pr-4">Skills:</p>
        {item.skills.map((skill,skillIndex) => (
          <Link href={`/skills/${skill.replaceAll(" ", "_")}`} key={skillIndex}>
            <Button 
              variant="flat" 
              radius="full"
              className={`h-7 bg-[rgba(255,99,132,0.1)] border-[rgba(255,99,132,0.3)] border cursor-pointer hover:bg-[rgba(255,99,132,0.2)]`}
            >
              <p className="text-xs text-gray-300">{skill}</p>
            </Button>
          </Link>
        ))}
      </CardBody>
    </Card>
  )
}

export default InternshipCard