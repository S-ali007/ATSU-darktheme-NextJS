import React from "react";
import { useState } from "react";
import TypeWriterComponent from "./TypeWriterComponent";


function GreatFeaturestoDo() {
  const [features, setfeatures] = useState([
    {
      title:" Tech Solutions"
      
    },
    {
      title:"IT Consulting"
      
    },
    {
      title:"Web Solutions"
      
    },
    {
      title:"Business Growth"
      
    },
    {
      title:"Product Design"
      
    },

  ])
  return (
    <div className=" bg-[#000A1F] max-w-[1920px] w-full  mx-auto pt-[127px] " id="Services">
      {/* main heading */}
      <div className=" max-w-[1305px] w-full mx-auto">
        <div className="flex  items-center    pr-[20px] justify-center ">
          <div className="max-w-[690px] w-full text-[42px] font-Jost absolute  font-[600] leading-[53px] text-[white]  pt-[83px] mt-[14px] align-middle justify-center text-center  ">
            <h1 className=" min-h-[114px] h-full">
            <TypeWriterComponent
                    text={"Great Features To Do Your Buisness Growth & Development"}
                  /></h1>
          </div>

          <div className="max-w-[732px] w-full relative flex flex-col  items-center ">
            <div className="relative top-[89px]  justify-center  flex  max-w-[84px] w-full ">
              <img className="" src="/assets/pseudo.svg" alt="" />
            </div>
            <div className="font-[900]  text-transparent border-[#FFFFFF26] text-[150px] font-outline-2 hover:font-outline-4   font-kumbh uppercase flex justify-center items-center">
           Services
            </div>
          </div>
        </div>
        <div className="flex  mt-[76px] gap-[58px]">
          {/* left side */}
          <div className="max-w-[536px] w-full">
            <div className="mt-[45px]"> <img
            
              src="/assets/Great Features- leftside-icon-two-dark.svg"
              alt=""
            /></div>
           
          </div>
          {/* right side */}
          <div className="flex   flex-col gap-[30px] items-center" >
            {/* item-1-graphic design */}
            <div className="max-w-[470px] w-full flex  gap-[25px]  bg-[#292738] group-hover:transform transition-transform cursor-pointer duration-500   hover:translate-x-20    rounded-[8px] pt-[25px] pb-[23px] px-[30px]  justify-center align-middle">
              <div className="max-w-[70px] w-full">
                <img
                  src="/assets/Great work Graphic design item 1.svg"
                  alt=""
                />
              </div>
              {/* ------ */}
              <div className="flex  gap-[10px] justify-center items-center">
                <div className=" max-w-[315px] w-full">
                  <p className=" text-base text-[#fff] font-[600]  font-kumbh leading-7">
                    Graphics Design
                  </p>
                  <p className="text-[#67687A]   font-kumbh text-[16px] mt-[2.8px] leading-7">Sed perspiciatis unde omnis natus error voluptatem</p>
                </div>
                
                <div className="max-w-[60px] h-[60px] w-full   rounded-[50px] items-center justify-center flex bg-[#232331] hover:cursor-pointer">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.79688 1.83789L6.44141 1.19336C6.73438 0.929688 7.17383 0.929688 7.4375 1.19336L13.1504 6.87695C13.4141 7.16992 13.4141 7.60938 13.1504 7.87305L7.4375 13.5859C7.17383 13.8496 6.73438 13.8496 6.44141 13.5859L5.79688 12.9414C5.5332 12.6484 5.5332 12.209 5.79688 11.916L9.3418 8.54688H0.933594C0.523438 8.54688 0.230469 8.25391 0.230469 7.84375V6.90625C0.230469 6.52539 0.523438 6.20312 0.933594 6.20312H9.3418L5.79688 2.86328C5.5332 2.57031 5.50391 2.13086 5.79688 1.83789Z"
                      fill="white"
                    />
                  </svg>
                </div>
                
              
              </div>
              {/* ------- */}
            </div>
             {/* item-2-graphic design */}
             <div className="max-w-[470px] relative group-hover:transform transition-transform cursor-pointer duration-500  hover:translate-x-20 w-full flex  gap-[25px]  bg-[#292738]   rounded-[8px] pt-[25px] pb-[23px] px-[30px]  justify-center align-middle">
              <div className="max-w-[70px] w-full">
                <img
                  src="/assets/Great work Graphic design item 2.svg"
                  alt=""
                />
              </div>
              {/* ------ */}
              <div className="flex  gap-[10px] justify-center items-center">
                <div className=" max-w-[315px] w-full">
                  <p className=" text-base text-[#fff] font-[600]  font-kumbh leading-7">
                    Graphics Design
                  </p>
                  <p className="text-[#67687A]   font-kumbh text-[16px] mt-[2.8px] leading-7">Sed perspiciatis unde omnis natus error voluptatem</p>
                </div>
                
                <div className="max-w-[60px] h-[60px] w-full   rounded-[50px] items-center justify-center flex bg-[#232331] hover:cursor-pointer">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.79688 1.83789L6.44141 1.19336C6.73438 0.929688 7.17383 0.929688 7.4375 1.19336L13.1504 6.87695C13.4141 7.16992 13.4141 7.60938 13.1504 7.87305L7.4375 13.5859C7.17383 13.8496 6.73438 13.8496 6.44141 13.5859L5.79688 12.9414C5.5332 12.6484 5.5332 12.209 5.79688 11.916L9.3418 8.54688H0.933594C0.523438 8.54688 0.230469 8.25391 0.230469 7.84375V6.90625C0.230469 6.52539 0.523438 6.20312 0.933594 6.20312H9.3418L5.79688 2.86328C5.5332 2.57031 5.50391 2.13086 5.79688 1.83789Z"
                      fill="white"
                    />
                  </svg>
                </div>
                
              
              </div>
              {/* ------- */}
            </div>
             {/* item-3-graphic design */}
             <div className="max-w-[470px] relative   w-full flex  gap-[25px] group-hover:transform transition-transform cursor-pointer duration-500  hover:translate-x-[130px] bg-[#292738]   rounded-[8px] pt-[25px] pb-[23px] px-[30px]  justify-center align-middle">
              <div className="max-w-[70px] w-full">
                <img
                  src="/assets/Great work Graphic design item 3.svg"
                  alt=""
                />
              </div>
              {/* ------ */}
              <div className="flex  gap-[10px] justify-center items-center">
                <div className=" max-w-[315px] w-full">
                  <p className=" text-base text-[#fff] font-[600]  font-kumbh leading-7">
                    Graphics Design
                  </p>
                  <p className="text-[#67687A]   font-kumbh text-[16px] mt-[2.8px] leading-7">Sed perspiciatis unde omnis natus error voluptatem</p>
                </div>
                
                <div className="max-w-[60px] h-[60px] w-full   rounded-[50px] items-center justify-center flex bg-[#232331] hover:cursor-pointer">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.79688 1.83789L6.44141 1.19336C6.73438 0.929688 7.17383 0.929688 7.4375 1.19336L13.1504 6.87695C13.4141 7.16992 13.4141 7.60938 13.1504 7.87305L7.4375 13.5859C7.17383 13.8496 6.73438 13.8496 6.44141 13.5859L5.79688 12.9414C5.5332 12.6484 5.5332 12.209 5.79688 11.916L9.3418 8.54688H0.933594C0.523438 8.54688 0.230469 8.25391 0.230469 7.84375V6.90625C0.230469 6.52539 0.523438 6.20312 0.933594 6.20312H9.3418L5.79688 2.86328C5.5332 2.57031 5.50391 2.13086 5.79688 1.83789Z"
                      fill="white"
                    />
                  </svg>
                </div>
                
              
              </div>
              {/* ------- */}
            </div>
             {/* item-4-graphic design */}
             <div className="max-w-[470px] relative  hover:translate-x-[-38px] group-hover:transform transition-transform cursor-pointer duration-500 w-full flex  gap-[25px]  bg-[#292738]   rounded-[8px] pt-[25px] pb-[23px] px-[30px]  justify-center align-middle">
              <div className="max-w-[70px] w-full">
                <img
                  src="/assets/Great work Graphic design item 4.svg"
                  alt=""
                />
              </div>
              {/* ------ */}
              <div className="flex  gap-[10px] justify-center items-center">
                <div className=" max-w-[315px] w-full">
                  <p className=" text-base text-[#fff] font-[600]  font-kumbh leading-7">
                    Graphics Design
                  </p>
                  <p className="text-[#67687A]   font-kumbh text-[16px] mt-[2.8px] leading-7">Sed perspiciatis unde omnis natus error voluptatem</p>
                </div>
                
                <div className="max-w-[60px] h-[60px] w-full   rounded-[50px] items-center justify-center flex bg-[#232331] hover:cursor-pointer">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.79688 1.83789L6.44141 1.19336C6.73438 0.929688 7.17383 0.929688 7.4375 1.19336L13.1504 6.87695C13.4141 7.16992 13.4141 7.60938 13.1504 7.87305L7.4375 13.5859C7.17383 13.8496 6.73438 13.8496 6.44141 13.5859L5.79688 12.9414C5.5332 12.6484 5.5332 12.209 5.79688 11.916L9.3418 8.54688H0.933594C0.523438 8.54688 0.230469 8.25391 0.230469 7.84375V6.90625C0.230469 6.52539 0.523438 6.20312 0.933594 6.20312H9.3418L5.79688 2.86328C5.5332 2.57031 5.50391 2.13086 5.79688 1.83789Z"
                      fill="white"
                    />
                  </svg>
                </div>
                
              
              </div>
              {/* ------- */}
            </div>
             {/* item-5-graphic design */}
             <div className="max-w-[470px]  relative   group-hover:transform transition-transform cursor-pointer duration-500  hover:translate-x-[-201px] w-full flex  gap-[25px]  bg-[#292738]   rounded-[8px] pt-[25px] pb-[23px] px-[30px]  justify-center align-middle">
              <div className="max-w-[70px] w-full">
                <img
                  src="/assets/Great work Graphic design item 5.svg"
                  alt=""
                />
              </div>
              {/* ------ */}
              <div className="flex  gap-[10px] justify-center items-center">
                <div className=" max-w-[315px] w-full">
                  <p className=" text-base text-[#fff] font-[600]  font-kumbh leading-7">
                    Graphics Design
                  </p>
                  <p className="text-[#67687A]   font-kumbh text-[16px] mt-[2.8px] leading-7">Sed perspiciatis unde omnis natus error voluptatem</p>
                </div>
                
                <div className="max-w-[60px] h-[60px] w-full   rounded-[50px] items-center justify-center flex bg-[#232331] hover:cursor-pointer">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.79688 1.83789L6.44141 1.19336C6.73438 0.929688 7.17383 0.929688 7.4375 1.19336L13.1504 6.87695C13.4141 7.16992 13.4141 7.60938 13.1504 7.87305L7.4375 13.5859C7.17383 13.8496 6.73438 13.8496 6.44141 13.5859L5.79688 12.9414C5.5332 12.6484 5.5332 12.209 5.79688 11.916L9.3418 8.54688H0.933594C0.523438 8.54688 0.230469 8.25391 0.230469 7.84375V6.90625C0.230469 6.52539 0.523438 6.20312 0.933594 6.20312H9.3418L5.79688 2.86328C5.5332 2.57031 5.50391 2.13086 5.79688 1.83789Z"
                      fill="white"
                    />
                  </svg>
                </div>
                
              
              </div>
              {/* ------- */}
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default GreatFeaturestoDo;
