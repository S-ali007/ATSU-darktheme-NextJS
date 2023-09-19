import React, { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import TypeWriterComponent from "./TypeWriterComponent";
import { useRef, useEffect } from "react";
function ManagebussinessSeo() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    console.log("useEffect is running");

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "top 20%",
        end: "center 70%",
        scrub: 2,
      },
    });

    tl.from(".imageBussiness", {
      xPercent: 200,
      opacity: 0,
    });
  }, []);
  const [faqs, setfaqs] = useState([
    {
      question: "Why SEO Growth Business Strategy ?",
      answer:
        " On the other hand denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment blinded",
      id: 1,
      open: true,
    },
    {
      question: "How We Help Your Projects ?",
      answer:
        " On the other hand denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment blinded",
      id: 2,
      open: false,
    },
    {
      question: "Why SEO Growth Business Strategy ?",
      answer:
        " On the  hand denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment blinded",
      id: 3,
      open: false,
    },
  ]);
  const handleClick = (id) => {
    const newArr = faqs.map((item) => {
      if (item.id === id) {
        return { ...item, open: !item.open };
      } else {
        return { ...item, open: false };
      }
    });

    setfaqs(newArr);
  };

  return (
    <div className=" bg-[#000A1F] max-w-[1920px] w-full  mx-auto pt-[128px] overflow-hidden">
      <div className=" w-full  mx-auto pl-[30px] pt-[50px] container ">
        <div className="flex   justify-end pb-[56px] gap-[108px] ">
          <div className="">
            {/* main-heading-Manage-bussiness-seo */}
            <div>
              <div className="max-w-[432px] w-full text-[42px] font-Jost absolute ml-[38px] mt-[119px] font-[600] leading-[53px] text-[white] ">
                <TypeWriterComponent
                  text={"Manage Business SEO Optimization Easily"}
                />
              </div>

              <div className="max-w-[307px] w-full relative flex flex-col   ">
                <div className="relative top-[89px]  justify-center  flex  max-w-[84px] w-full left-[40px]">
                  <img className="" src="/assets/pseudo.svg" alt="" />
                </div>
                <div className="font-[700]    text-[150px] text-[#FFFFFF26]  cursor-pointer font-Jost uppercase flex justify-center items-center">
                  SEO
                </div>
              </div>
              {/* paragraph-section-left*/}
              <div className="mt-[24px]  text-[#A8ADB3] text-[16px]  font-kumbh leading-[32px] max-w-[437px] w-full ml-[40px]">
                <p>
                  Quis autem vel eum iure reprehenderit qui in ea voluptates
                  velit esse quam molestiae consequatur velillum
                </p>
              </div>

              <div className="mt-[10px] min-h-[320px] h-full">
                {faqs.map((faq, id) => {
                  return (
                    <>
                      <div
                        onClick={() => {
                          handleClick(faq.id);
                        }}
                        className="max-w-[440px] w-full ml-[65px] mt-[5px] flex justify-center gap-[91px] bg-[#292738] border-b-[#2E2D2D] align-middle  pt-[17px] pr-[15.8px] pb-[18px] pl-[8px] hover:cursor-pointer"
                      >
                        <div className="max-w-[309px] w-full font-Jost text-[#fff] text-[18px] font-[600]  ">
                          {faq.question}
                        </div>
                        <div className="  align-middle items-center justify-center flex ">
                          <svg
                            className={`horizontal ${
                              faq.open ? "rotate-90" : "rotate-0"
                            }  duration-300 `}
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.55859 1.34961L7.28906 0.619141C7.62109 0.320312 8.11914 0.320312 8.41797 0.619141L14.8926 7.06055C15.1914 7.39258 15.1914 7.89062 14.8926 8.18945L8.41797 14.6641C8.11914 14.9629 7.62109 14.9629 7.28906 14.6641L6.55859 13.9336C6.25977 13.6016 6.25977 13.1035 6.55859 12.7715L10.5762 8.95312H1.04688C0.582031 8.95312 0.25 8.62109 0.25 8.15625V7.09375C0.25 6.66211 0.582031 6.29688 1.04688 6.29688H10.5762L6.55859 2.51172C6.25977 2.17969 6.22656 1.68164 6.55859 1.34961Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>

                      <div
                        className={`bg-[#232331] ${faq.open ? " max-h-[250px] " : " max-h-0 " } overflow-hidden h-[full] 0.3s ease-in-out max-w-[440px] w-full transition-all duration-700  ml-[65px]  pr-[13.3px] pb-[6px] pl-[8px]`}
                      >
                        <div className="text-[#67687A]">
                          <p className="text-[16px]   font-kumbh leading-8">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          {/* right-logo */}
          <div className=" imageBussiness max-w-[701px] w-full  ">
            <img
              src="/assets/managebussinessSeo-right-logo.svg"
              alt=""
              className="max-w-[701px]  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagebussinessSeo;
