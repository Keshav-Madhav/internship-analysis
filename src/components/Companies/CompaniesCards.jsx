import {Card,CardBody,CardFooter,Image,CardHeader,Divider,Chip, Button} from "@nextui-org/react";

export default function CompaniesCards() {

  const colors = [
    {
      body: "rgba(255,99,132,0.2)",
      border: "rgba(255,99,132,1)",
    },
    {
      body: "rgba(54,162,235,0.2)",
      border: "rgba(54,162,235,1)",
    },
    {
      body: "rgba(255,206,86,0.2)",
      border: "rgba(255,206,86,1)",
    },
    {
      body: "rgba(75,192,192,0.2)",
      border: "rgba(75,192,192,1)",
    },
    {
      body: "rgba(153,102,255,0.2)",
      border: "rgba(153,102,255,1)",
    },
    {
      body: "rgba(255,159,64,0.2)",
      border: "rgba(255,159,64,1)"
    }
  ]

  const list = [
    {
      title: "SEO Specialist",
      img: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      jobCount: 4,
      skills: ["Keyword Research","On-Page SEO","Off-Page SEO","Google Analytics","SEO Tools"]
    },
    {
      title: "Digital Marketer",
      img: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      jobCount: 7,
      skills: ["Social Media Marketing","SEO","Email Marketing","Content Marketing","Google Ads"]
    },
    {
      title: "Network Engineer",
      img: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      jobCount: 5,
      skills: ["Cisco","LAN/WAN","TCP/IP","Routing","Network Security","Troubleshooting"]
    },
    {
      title: "Database Admin",
      img: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      jobCount: 4,
      skills: ["SQL","Database Management","Database Design","Backup and Recovery","Data Security"]
    },
    {
      title: "System Analyst",
      img: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      jobCount: 5,
      skills: ["System Analysis","Requirement Gathering","UML","System Design","Agile"]
    },
    {
      title: "Information Security",
      img: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      jobCount: 6,
      skills: ["Cybersecurity","Network Security","Penetration Testing","Security Policies","Encryption"]
    },
    {
      title: "Full Stack Dev",
      img: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      jobCount: 9,
      skills: ["HTML","CSS","JavaScript","Node.js","Express.js","React","Angular","MongoDB","RESTful APIs"]
    },{
      title: "UI/UX Designer",
      img: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      jobCount: 8,
      skills: ["UI Design","UX Design","Adobe XD","Sketch","Figma",]
    },
    {
      title: "Mobile App Dev",
      img: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      jobCount: 6,
      skills: ["Java","React Native","Flutter","iOS","Android","Mobile UI Design"]
    },
    {
      title: "Product Manager",
      img: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      jobCount: 6,
      skills: ["Product Management","Agile Methodologies","Scrum","User Stories","Market Research",]
    },
    {
      title: "Front End Dev",
      img: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      jobCount: 10,
      skills: ["HTML","CSS","JavaScript","React","Angular","Responsive Design"],
    },
    {
      title: "Backend Dev",
      img: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      jobCount: 8,
      skills: ["Node.js","Express.js","Django","Flask","SQL","RESTful APIs"]
    },
    {
      title: "Graphic Designer",
      img: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      jobCount: 6,
      skills: ["Adobe Photoshop","Sketch","Figma","Typography","Color Theory"]
    },
    {
      title: "Content Writer",
      img: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      jobCount: 5,
      skills: ["Copywriting","SEO","Grammar","Research","Storytelling"]
    },
    {
      title: "Data Analyst",
      img: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      jobCount: 7,
      skills: ["SQL","Python","Data Visualization","Machine Learning","Data Cleaning"]
    },
  ];


  return (
    <div className="w-[70vw] flex gap-x-5 gap-3 flex-wrap py-5">
      {list.map((item,index) => {
        return (
          <Card className="min-w-[20rem] max-w-[32vw] w-[50%] border-2 border-[rgba(255,99,132,0.8)]" key={index}>
            <CardHeader className="flex gap-3 p-3">
              <Image
                alt={item.title}
                height={40}
                radius="sm"
                src={item.img}
                width={40}
              />
              <p className="text-lg">{item.title}</p>
            </CardHeader>
            <p className="px-2 pb-1">No. of jobs: {item.jobCount}</p>
            <Divider/>
            <CardBody className="flex flex-row gap-1 flex-wrap h-fit items-center">
              <p className="text-sm pr-4">Skills:</p>
              {item.skills.map((skill,skillIndex) => (
                <Button 
                  variant="flat" 
                  radius="full"
                  key={skillIndex}
                  className={`h-7 bg-[rgba(255,99,132,0.1)] border-[rgba(255,99,132,0.3)] border cursor-pointer hover:bg-[rgba(255,99,132,0.2)]`}
                >
                  <p className="text-xs text-gray-300">{skill}</p>
                </Button>
              ))}
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}
