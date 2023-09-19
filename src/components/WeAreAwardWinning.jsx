import React from "react";
import { useState ,useEffect } from "react";
import TypeWriterComponent from "./TypeWriterComponent";
import { useInView } from "react-intersection-observer";


function WeAreAwardWinning() {
  const [items, setitems] = useState([
    {
      title: " Tech Solutions",
    },
    {
      title: "IT Consulting",
    },
    {
      title: "Web Solutions",
    },
    {
      title: "Business Growth",
    },
    {
      title: "Product Design",
    },
  ]);

  const [isImageVisible, setImageVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger the animation once
    threshold: 1, // Adjust the threshold as needed
  });

  // Set isImageVisible to true when the image is in the viewport
  useEffect(() => {
    if (inView) {
      setImageVisible(true);
    }
    else{
      setImageVisible(false)
    }
  }, [inView]);


// condition---------------------------
  // const [isImageVisible, setIsImageVisible] = useState(false);
  // // Detect when the image comes into the viewport
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const image = document.getElementById("award-winning-image");

      
  //     if (image) {
  //       const rect = image.getBoundingClientRect();
  //       console.log(rect)
  //       const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  //       console.log(windowHeight)

  //       // Check if the image is at least partially in the viewport
  //       if (rect.top < windowHeight && rect.bottom >= 0) {
  //         setIsImageVisible(true);
  //         console.log("true")
  //       } else {
  //         setIsImageVisible(false);
  //         console.log("false")
  //       }
  //     }
  //   };

  //   // Attach the scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Call the handleScroll function initially to check the image visibility
  //   handleScroll();

  //   // Clean up the event listener on unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div className=" bg-[#000A1F] max-w-[1920px] w-full  mx-auto pt-[127px] ">
      <div className="flex  items-center    max-w-[1430px] w-full mx-auto  justify-end gap-[64px]  ">
        {/* left-side content Award winning */}
        <div className="pb-[43px]">
          {/* logo for we are award winning */}
          <div>
            <div className="max-w-[530px] w-full text-[42px] font-Jost absolute ml-[38px] mt-[119px] font-[600] leading-[53px] text-[white] tracking-[0.42px]  ">
              <p className="max-h-[167px] h-full">
                <TypeWriterComponent
                  text={"We’re Awards Winning Modern Business Solutions Agency"}
                />
              </p>
            </div>

            <div className="max-w-[401px] w-full relative flex flex-col   ">
              <div className="relative top-[89px]  justify-center  flex  max-w-[84px] w-full left-[40px]">
                <img className="" src="/assets/pseudo.svg" alt="" />
              </div>
              <div className="font-[900]  text-transparent border-[#FFFFFF26] text-[150px] font-outline-2 hover:font-outline-4  cursor-pointer font-kumbh uppercase flex justify-center items-center">
                WHO
              </div>
            </div>
            <div className="mt-[124px] text-[#fff] font-[18px]   font-kumbh leading-[32px] max-w-[533px] w-full pl-[40px]">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque epsa
                quae ab illo inventore veritatis architecto beatae
              </p>
            </div>
          </div>

          <div className="ml-[60px] max-w-[618px] w-full justify-end  ">
            {/* tech-solutions-items */}
            <div className="  flex  mt-[32px] gap-[10px] flex-wrap ">
              {/* items */}
              {items.map((item, id) => {
                return (
                  <>
                    <div
                      className="max-w-[199px] w-full flex  bg-[#292738]  rounded-[5px] py-[15px] px-[18px] gap-[10px] justify-center align-middle  transition-all duration-500 ease-in hover:cursor-pointer hover:bg-gradient-to-r from-[#6D18EF] to-[#186EF2] text-[#fff] "
                      key={id}
                    >
                      <div className="max-w-[25px] w-full">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="25"
                            height="25"
                            rx="12.5"
                            fill="url(#paint0_linear_70_142)"
                          />
                          <path
                            d="M9.89258 17.2969L5.67773 13.082C5.42383 12.8281 5.42383 12.3965 5.67773 12.1426L6.5918 11.2285C6.8457 10.9746 7.25195 10.9746 7.50586 11.2285L10.375 14.0723L16.4688 7.97852C16.7227 7.72461 17.1289 7.72461 17.3828 7.97852L18.2969 8.89258C18.5508 9.14648 18.5508 9.57812 18.2969 9.83203L10.832 17.2969C10.5781 17.5508 10.1465 17.5508 9.89258 17.2969Z"
                            fill="white"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_70_142"
                              x1="25"
                              y1="12.5"
                              x2="0"
                              y2="12.5"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#186EF2" />
                              <stop offset="1" stop-color="#6D18EF" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className=" max-w-[125px] w-full">
                        <p className=" text-base text-[#fff] font-[600]  font-kumbh">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        {/* Right-side content Award winning img */}
        <div className="max-w-[540px] w-full mt-[31px]" >
          
          <img src="/assets/weAreAwardWinnning.svg" alt=""  ref={ref} id="award-winning-image" className={` ${isImageVisible ? "animate-shake hover:animate-none cursor-pointer" : ""}`} />
        </div>
      </div>
    </div>
  );
}

export default WeAreAwardWinning;
