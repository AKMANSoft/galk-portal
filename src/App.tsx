import { Button } from "./components/ui/button"
import { SelectEl } from "./components/ui/select"
import { cn } from "./lib/utils"





const students = [
  { name: "Abhay Gupta", college: "IIT Mandi", major: "Chemical Engineering", image: "/images/abhy.svg" },
  { name: "Naman Tiwari", college: "IIT Guwahati", major: "Chemical Engineering", image: "/images/nouman.svg" },
  { name: "Abhay Gupta", college: "IIT Mandi", major: "Chemical Engineering", image: "/images/abhy.svg" },
  { name: "Naman Tiwari", college: "IIT Guwahati", major: "Chemical Engineering", image: "/images/nouman.svg" },
  { name: "Abhay Gupta", college: "IIT Mandi", major: "Chemical Engineering", image: "/images/abhy.svg" },
  { name: "Naman Tiwari", college: "IIT Guwahati", major: "Chemical Engineering", image: "/images/nouman.svg" },
  { name: "Abhay Gupta", college: "IIT Mandi", major: "Chemical Engineering", image: "/images/abhy.svg" },
  { name: "Naman Tiwari", college: "IIT Guwahati", major: "Chemical Engineering", image: "/images/nouman.svg" },
  { name: "Abhay Gupta", college: "IIT Mandi", major: "Chemical Engineering", image: "/images/abhy.svg" },
  { name: "Naman Tiwari", college: "IIT Guwahati", major: "Chemical Engineering", image: "/images/nouman.svg" },
  { name: "Saurabh Modi", college: "IIT Jodhpur", major: "Electrical Engineering", image: "/images/modi.svg" },
]


function App() {

  return (
    <>
      <div className="flex justify-between px-20 items-center  h-16  w-full bg-primary overflow-hidden">
        <div>
          <img src="/icons/logo.png" alt="" />
        </div>
        <div className="flex items-center gap-4 justify-center">
          <p className="text-white">
            Welcome,Admin
          </p>
          <button>
            <img src="/icons/button.png" alt="" />
          </button>
        </div>
      </div>
      <div className="flex">
        {/* sidebar */}
        <div className="bg-primary w-[232px] h-screen">
          <div className="bg-platte/30 w-full pt-10 pb-5 px-2 border-b-2 border-black">
            <div className="bg-primary_light flex justify-between items-center px-4 py-2 border border-primary ">
              <p></p>
              <h1 className="text-white ">
                Company
              </h1>
              <i className="fa-solid fa-caret-down text-white"></i>
            </div>
          </div>
          <img src="/images/admin-navigation.jpg" className="w-full h-auto" />
        </div>
        <div className="flex flex-col gap-8 p-8 w-full overflow-hidden">
          <div className="flex  items-center justify-between gap-6 w-fit">
            <h1 className="text-[32px] font-bold ">
              Matching project
            </h1>
            <button type="button" className="px-2 py-[6px] border rounded hover:bg-blue-500 group transition-all">
              <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" className="stroke-black group-hover:stroke-white">
                <g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 3)">
                  <path d="m2.5 7.5 4 4.232 4-4.191" />
                  <path d="m6.5.5v11" />
                  <path d="m.5 14.5h12" />
                </g>
              </svg>
            </button>
          </div>
          <button type="button" className="py-3 gap-1 rounded border border-blue-500 px-8 w-fit flex items-center transition-all hover:bg-blue-500 group">
            <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-blue-500 stroke-[1.5] transition-all group-hover:stroke-white">
              <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <path d="m4.5 7.5h12" />
                <path d="m6.5 10.5h8" />
                <path d="m8.5 13.5h4" />
              </g>
            </svg>
            <h1 className="text-sm font-medium text-blue-500 transition-all group-hover:text-white">
              Filtering student
            </h1>
          </button>
          <div className="flex gap-3 p-4 flex-col bg-gray200 rounded overflow-y-auto max-h-[calc(100vh_-_280px)]">
            {
              students.map((student) => (
                <StudentListItem student={student} />
              ))
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default App




type Student = {
  image: string;
  name: string;
  college: string;
  major: string;
}

type StudentListItemProps = {
  student: Student
}

function StudentListItem({ student }: StudentListItemProps) {
  return (
    <div className="flex gap-3 w-full">
      <img src={student.image} alt="" width={84} height={84} className="h-full w-auto object-cover object-center aspect-square rounded" />
      <div className="w-full gap-[10px] flex flex-col">
        <div className="flex justify-between gap-8 w-full">
          <div className="flex gap-8 ">
            <div className=" flex flex-col gap-1" >
              <p className="text-xs  font-normal text-secondary">
                Name
              </p>
              <p className="text-xs text-black font-medium">
                {student.name}
              </p>
            </div>
            <div className=" flex flex-col gap-1" >
              <p className="text-xs  font-normal text-secondary">
                College Name
              </p>
              <p className="text-xs text-black font-medium">
                {student.college}
              </p>
            </div>
            <div className=" flex flex-col gap-1" >
              <p className="text-xs  font-normal text-secondary">
                Major
              </p>
              <p className="text-xs text-black font-medium">
                {student.major}
              </p>
            </div>
          </div>
          <div className="text-[12px] font-normal  text-secondary flex items-end pr-20 ">
            Selected confidence projects on 04/09/2023
          </div>
        </div>
        <div>
          <SelectEl
            options={[
              {
                label: (active: boolean) => (
                  <div role="button" className={cn(
                    "flex h-[40px] items-center gap-2 py-[18px] w-full text-xs font-medium",
                    active ? "text-blue-500" : "text-secondary group-hover:text-blue-500"
                  )}>
                    <p>Otsuka Inc.</p>
                    <span className={cn(
                      "text-[10px] rounded border py-1 px-2 h-[20px] leading-none",
                      active ? "border-blue-500" : "border-secondary group-hover:border-blue-500"
                    )}>
                      Project 1
                    </span>
                    <p>
                      Develop the Virtual Contact Center: Operating a contact center in Virbela , the enterprise metaverse
                    </p>
                  </div>
                ),
                value: "project-1"
              },
              {
                label: (active: boolean) => (
                  <div role="button" className={cn(
                    "flex h-[40px] items-center gap-2 py-2 w-full text-xs font-medium",
                    active ? "text-blue-500" : "text-secondary group-hover:text-blue-500"
                  )}>
                    <p>Otsuka Inc.</p>
                    <span className={cn(
                      "text-[10px] rounded border py-1 px-2 h-[20px] leading-none",
                      active ? "border-blue-500" : "border-secondary group-hover:border-blue-500"
                    )}>
                      Project 2
                    </span>
                    <p>
                      Develop the Virtual Contact Center: Operating a contact center in Virbela , the enterprise metaverse
                    </p>
                  </div>
                ),
                value: "project-2"
              }
            ]} />
        </div>
      </div>
      <div className="flex items-end h-full">
        <Button className="px-8 w-auto py-2 h-[42px] text-sm shadow-none font-medium">OK</Button>
      </div>
    </div>
  )
}
