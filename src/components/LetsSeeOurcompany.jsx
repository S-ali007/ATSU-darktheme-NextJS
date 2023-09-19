import React from "react";
import { useState } from "react";
import TypeWriterComponent from "./TypeWriterComponent";

function LetsSeeOurcompany() {
  const [cards, setCards] = useState([
    {
      title: " Business Growth",
      text: "150",
      id: 1,
      img: "/assets/lets seeour compant card 1.svg",
    },
    {
      title: " Satisfied Clients",
      text: "250",
      id: 2,
      img: "/assets/lets seeour compant card 2.svg",
    },
    {
      title: "  Expert Teams",
      text: "50",
      id: 3,
      img: "/assets/lets seeour compant card 3.svg",
    },
  ]);
  return (
    <div className="bg-[#000A1F] max-w-[1920px] w-full  mx-auto pt-[128px]" id="letsseeourcompany">
      <div className="max-w-[1334px] w-full  mx-auto pl-[100px] mt-[50px] pt-[32px] pb-[10px] ">
        {/* main-content div */}
        <div className="flex gap-[307px]">
          {/* left-side */}
          <div>
            {/* heading-logo-div */}
            <div>
              <div className="max-w-[447px] w-full text-[42px] font-Jost absolute ml-[39px] mt-[120px] font-[600] leading-[53px] text-[white] ">
                <TypeWriterComponent
                    text={"Let’s See Our Company Achievement"}/>
              </div>

              <div className="max-w-[363px] w-full relative flex flex-col   ">
                <div className="relative top-[90px]  justify-center  flex  max-w-[84px] w-full left-[40px]">
                  <img className="" src="/assets/pseudo.svg" alt="" />
                </div>
                <div className="font-[700]    text-[150px] text-[#FFFFFF26]  cursor-pointer font-Jost uppercase flex justify-center items-center">
                  FACT
                </div>
              </div>
              {/* paragraph-section-left*/}
              <div className="mt-[72px]  text-[#A8ADB3] text-[16px]   font-kumbh  max-w-[449px] w-full ml-[40px]">
                <p className="font-kumbh leading-8 text-[#A8ADB3]">
                  Sed ut perspiciatis unde omnis iste natus error sit ways
                  voluptatem accusantium doloremque laudantium totam rem aperiam
                  eaque epsa quae abillo inventore
                </p>
              </div>
            </div>
          </div>
          {/* right-side */}
          <div className="flex flex-col items-center   justify-center">
            <div className="max-w-[267px ] w-full bg-[#FFFFFF26] animate-pulse  rounded-[130px] p-[93px]  flex justify-center items-center align-middle">
              <div className="">
                <div className=" max-w-[ 70px] w-full pl-[30px] pr-[25px] pt-[30px] pb-[25px] hover:cursor-pointer bg-[#fff] rounded-[35px] flex justify-center items-center align-middle">
                  <div className="max-w-[14px] w-full absolute flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_70_288)">
                        <path
                          d="M10.3711 5.87891L2.49609 1.06641C2.27734 0.938802 2.04948 0.875 1.8125 0.875C1.42969 0.893229 1.11979 1.02083 0.882812 1.25781C0.627604 1.51302 0.5 1.82292 0.5 2.1875V11.8125C0.5 12.1771 0.627604 12.487 0.882812 12.7422C1.11979 12.9792 1.42969 13.1068 1.8125 13.125C2.04948 13.125 2.27734 13.0612 2.49609 12.9336L10.3711 8.12109C10.7721 7.84766 10.9818 7.47396 11 7C10.9818 6.52604 10.7721 6.15234 10.3711 5.87891ZM1.8125 11.8125V2.1875L9.6875 6.97266L1.8125 11.8125Z"
                          fill="#FF6D2E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_70_288">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="matrix(1 0 0 -1 0.5 14)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* cards-div */}
        <div className="flex max-w-[966px] w-full gap-[24px] ml-[72px] ">
          {/* card */}
          {cards.map((card, id) => {
            return (
              <>
                <div
                  key={id}
                  className="max-w-[307px] skew-y-[-4deg] group-hover:scale-125 ease-in-out duration-500  hover:skew-y-[0deg] w-full py-[39px] px-[30px] bg-[#292738] mt-[23px] rounded-[10px]"
                >
                  <div className="max-w-[247px] w-full">
                    <div className="flex flex-col justify-center items-center gap-[20px]">
                      <div>
                        <img src={card.img} alt="" />
                      </div>

                      <div className="flex flex-col justify-center   items-center ">
                        <div className="max-w-[85px] w-full flex justify-center     ">
                          <p className="text-[35px] font-Jost font-[700] text-[#E4E4E4]">
                            {card.text}
                          </p>
                          <p className="  font-saira text-[35px] font-[700] text-[#E4E4E4] leading-[55px] relative bottom-[10px]">
                            +
                          </p>
                        </div>
                        <div className="max-w-[170px] w-full text-[20px] font-Jost font-[500] text-[#E4E4E4] text-center">
                          {card.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LetsSeeOurcompany;
