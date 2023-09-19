import React from "react";
import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import TypeWriterComponent from "./TypeWriterComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import PeopleSayAboutCards from "./PeopleSayAboutCards";

function PeopleSayAboutOurSupport() {
  const [cards, setCards] = useState([
    {
      username: " Business Growth",
      text: "Sed ut perspiciatis unde natus error sitwa voluptatemaccusantium laudant totames aperiam eaque abillo beatae vitae  ",
      id: 1,
      img: "/assets/comma for people suport card1.svg",
      designation: " CEO & Founder",
    },
    {
      username: "Gars G. Bernhardt",
      text: "Sed ut perspiciatis unde natus error sitwa voluptatemaccusantium laudant totames aperiam eaque abillo beatae vitae  ",
      id: 2,
      img: "/assets/comma for people suport card1.svg",
      designation: " CEO & Founder",
    },
  ]);
  return (
    <div
      className="bg-[#000A1F] max-w-[1920px] w-full  mx-auto  pt-[153px] pl-[106px] pr-[118px]"
      id="Clients"
    >
      {/* main heading */}
      <div className="   relative z-10">
        <div className="flex  items-center    pr-[20px] justify-center ">
          <div className="max-w-[461px] w-full text-[42px] tracking-[0.42px] font-Jost absolute  font-[600] leading-[53px] text-[white]  pt-[83px] mt-[10px] align-middle justify-center text-center ">
            <p className="min-h-[114px] h-full">
              <TypeWriterComponent
                text={"People’s Say About Our Support & Services"}
              />
            </p>
          </div>

          <div className="max-w-[732px] w-full relative flex flex-col  items-center ">
            <div className="relative top-[89px]  justify-center  flex  max-w-[84px] w-full ">
              <img className="" src="/assets/pseudo.svg" alt="" />
            </div>
            <div className="font-[900]  text-transparent border-[#FFFFFF26] text-[150px] font-outline-2 hover:font-outline-4   font-kumbh uppercase flex justify-center items-center">
              say’s
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#000A1F] ml-[12%]   xl:w-[1130px]  relative">
        <div className=" absolute max-w-[1130px] w-full     ">
          {/* cards */}{" "}
          <Swiper
            className="my-swiper  max-w-[1130px] w-full   absolute   cursor-pointer "
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={1}
            slidesPerView={2}
            // navigation

            // Other Swiper props
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {cards.map((card, id) => {
              return (
                <>
                  <SwiperSlide>
                    <PeopleSayAboutCards
                      designation={card.designation}
                      img={card.img}
                      username={card.username}
                      id={id}
                      text={card.text}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <PeopleSayAboutCards
                      designation={card.designation}
                      img={card.img}
                      username={card.username}
                      id={id}
                      text={card.text}
                    />
                  </SwiperSlide>
                  ...
                </>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className="flex   justify-between relative mt-[-250px]">
        {/* left-bg img */}
        <div className=" relative   ">
          <img
            className=""
            src="/assets/peoplesayAbout Our Support -left bg.svg"
            alt=""
          />
        </div>

        {/* right-bg img */}
        <div className="relative ">
          <img
            className=""
            src="/assets/peoplesayAbout Our Support -right bg.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default PeopleSayAboutOurSupport;
