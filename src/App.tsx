import Dropdown from "./components/Dropdown"


function App() {

  return (
    <>
      <div className="flex justify-between px-20 items-center  h-16  w-full bg-primary overflow-hidden">
        <div>
          <img src="public/logo.png" alt="" />
        </div>
        <div className="flex items-center gap-4 justify-center">
          <p className="text-white">
            Welcome,Admin
          </p>
          <button>
            <img src="public/button.png" alt="" />
          </button>
        </div>
      </div>
      <div className="flex">
        {/* sidebar */}
        <div className="bg-primary w-[232px] h-screen">
          <div className="bg-platte/30 w-full h-full pt-10 pb-5 px-2">
            <div className="bg-primary_light flex justify-between items-center px-4 py-2 border border-primary ">
              <p></p>
              <h1 className="text-white ">
                Company
              </h1>
              <i className="fa-solid fa-caret-down text-white"></i>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 p-8 w-full overflow-hidden">
          <div className="flex  items-center justify-between gap-6 w-fit">
            <h1 className="text-[32px] font-bold ">
              Matching project
            </h1>
            <div className="px-2 py-[6px]  border ">
              <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="black" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 3)"><path d="m2.5 7.5 4 4.232 4-4.191" /><path d="m6.5.5v11" /><path d="m.5 14.5h12" /></g></svg>
            </div>

          </div>
          <div className="py-[14px]  gap-1 flex border border-blue-500 px-8 w-fit ">
            <p className="border border-blue-500">
              <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="blue" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 7.5h12" /><path d="m6.5 10.5h8" /><path d="m8.5 13.5h4" /></g></svg>
            </p>

            <h1 className="text-[14px] font-medium text-blue-500 ">
              Filtering student
            </h1>
          </div>
          <div className="flex gap-3 p-4 flex-col bg-slate-200 overflow-y-auto max-h-[calc(100vh_-_280px)]">
            <div className="flex  gap-8 bg-slate-200 w-full">
              <div className="w-[84px] h-[86px] rounded-[4px]" >
                <img src="public/abhy.svg" alt="" className="w-full h-full object-cover object-center rounded-[4px] " />
              </div>
              <div className="w-full gap-[10px] flex flex-col">
                <div className="flex justify-between gap-8 w-full">
                  <div className="flex gap-8 ">
                    <StudentData
                      heading="Name"
                      content="Abhay Gupta" />
                    <StudentData
                      heading="College Name"
                      content="IIT Mandi" />
                    <StudentData
                      heading="Major"
                      content="Chemical Engineering" />

                  </div>
                  <div className="text-[12px] font-normal  text-secondary flex items-end pr-20">
                    Selected confidence projects on 04/09/2023
                  </div>
                </div>
                <Dropdown />
              </div>
            </div>

            {/* 2nd  */}
            <div className="flex  gap-8 bg-slate-200 w-full ">
              <div className="w-[84px] h-[86px] rounded-[4px]" >
                <img src="public/nouman.svg" alt="" className="w-full h-full object-cover object-center rounded-[4px] " />
              </div>
              <div className="w-full gap-[10px] flex flex-col">
                <div className="flex justify-between gap-8 w-full">
                  <div className="flex gap-8 ">
                    <StudentData
                      heading="Name"
                      content="Naman Tiwari" />
                    <StudentData
                      heading="College Name"
                      content="IIT Guwahati" />
                    <StudentData
                      heading="Major"
                      content="Chemical Engineering" />

                  </div>
                  <div className="text-[12px] font-normal  text-secondary flex items-end pr-20 ">
                    Selected confidence projects on 04/09/2023
                  </div>
                </div>
                <Dropdown />

              </div>
            </div>
            <div className="flex  gap-8 bg-slate-200 w-full ">
              <div className="w-[84px] h-[86px] rounded-[4px]" >
                <img src="public/aish.svg" alt="" className="w-full h-full object-cover object-center rounded-[4px] " />
              </div>
              <div className="w-full gap-[10px] flex flex-col">
                <div className="flex justify-between gap-8 w-full">
                  <div className="flex gap-8 ">
                    <StudentData
                      heading="Name"
                      content="Aishwarya Chodavarapu" />
                    <StudentData
                      heading="College Name"
                      content="IIT Goa" />
                    <StudentData
                      heading="Major"
                      content="Computer Science and Engineering" />

                  </div>
                  <div className="text-[12px] font-normal  text-secondary flex items-end pr-20 ">
                    Selected confidence projects on 04/09/2023
                  </div>
                </div>
                <Dropdown />

              </div>

            </div>
            <div className="flex  gap-8 bg-slate-200 w-full ">

              <div className="w-[84px] h-[86px] rounded-[4px]" >
                <img src="public/mitul.svg" alt="" className="w-full h-full object-cover object-center rounded-[4px] " />
              </div>
              <div className="w-full gap-[10px] flex flex-col">
                <div className="flex justify-between gap-8 w-full">
                  <div className="flex gap-8 ">
                    <StudentData
                      heading="Name"
                      content="Mitul Agrawal" />
                    <StudentData
                      heading="College Name"
                      content="IIT Jodhpur" />
                    <StudentData
                      heading="Major"
                      content="Artificial Intelligence and Data Science" />

                  </div>
                  <div className="text-[12px] font-normal  text-secondary flex items-end pr-20 ">
                    Selected confidence projects on 04/09/2023
                  </div>
                </div>
                <Dropdown />

              </div>
            </div>


            <div className="flex  gap-8 bg-slate-200 w-full ">

              <div className="w-[84px] h-[86px] rounded-[4px]" >
                <img src="public/chasku.svg" alt="" className="w-full h-full object-cover object-center rounded-[4px] " />
              </div>
              <div className="w-full gap-[10px] flex flex-col">
                <div className="flex justify-between gap-8 w-full">
                  <div className="flex gap-8 ">
                    <StudentData
                      heading="Name"
                      content="Chakshu" />
                    <StudentData
                      heading="College Name"
                      content="IIT Jodhpur" />
                    <StudentData
                      heading="Major"
                      content="Computer Science Engineering" />

                  </div>
                  <div className="text-[12px] font-normal  text-secondary flex items-end pr-20 ">
                    Selected confidence projects on 04/09/2023
                  </div>
                </div>
                <Dropdown />

              </div>
            </div>
            <div className="flex  gap-8 bg-slate-200 w-full ">

              <div className="w-[84px] h-[86px] rounded-[4px]" >
                <img src="public/modi.svg" alt="" className="w-full h-full object-cover object-center rounded-[4px] " />
              </div>
              <div className="w-full gap-[10px] flex flex-col">
                <div className="flex justify-between gap-8 w-full">
                  <div className="flex gap-8 ">
                    <StudentData
                      heading="Name"
                      content="Saurabh Modi" />
                    <StudentData
                      heading="College Name"
                      content="IIT Jodhpur" />
                    <StudentData
                      heading="Major"
                      content="Electrical Engineering" />

                  </div>
                  <div className="text-[12px] font-normal  text-secondary flex items-end pr-20 ">
                    Selected confidence projects on 04/09/2023
                  </div>
                </div>
                <Dropdown />

              </div>
            </div>



          </div>
        </div>
      </div>

    </>
  )
}

export default App





type Props = {
  heading: string,
  content: React.ReactNode,
}

export function StudentData({ heading, content }: Props) {
  return (
    // content
    <div className=" flex flex-col gap-1" >
      <p className="text-xs  font-normal text-secondary">
        {heading}
      </p>
      <p className="text-xs text-black font-medium">
        {content}
      </p>

    </div>


  )
}


