import React from "react";

function Footer() {
  return (
    <div className="bg-[#000A1F]   w-full  mx-auto pt-[240px] pb-[30px]" >
      <div className="max-w-[1114px] w-full mx-auto flex flex-col gap-[114px] "id="About">
        <div className="flex  max-w-[1114px] w-full  gap-[108px] ">
          {/* logo div */}
          <div className="max-w-[193px] w-full flex flex-col gap-[59px]">
            <a href="#home">
              <img src="/assets/Logo-Lift-2022-B.svg" alt="" />
            </a>
            <div>
              <div className="text-[22px]  font-Jost leading-[26px] font-[500] text-[#fff]">
                Follow
              </div>
              <div className="flex max-w-[210px] w-full gap-[10px] mt-[22px]">
                <div className="py-[13px] max-w-[40px] w-full rounded-[20px] border-[#FFF] border-[1px] flex justify-center items-center  hover:  cursor-pointer">
                  <svg
                    width="8"
                    height="15"
                    viewBox="0 0 8 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.35891 8.01465H5.30813V14.1396H2.57375V8.01465H0.331567V5.49902H2.57375V3.55762C2.57375 1.37012 3.88625 0.139648 5.88235 0.139648C6.83938 0.139648 7.8511 0.331055 7.8511 0.331055V2.49121H6.73C5.63625 2.49121 5.30813 3.14746 5.30813 3.8584V5.49902H7.74172L7.35891 8.01465Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="py-[13px] max-w-[40px] w-full rounded-[20px] border-[#FFF] border-[1px] flex justify-center items-center hover:  cursor-pointer">
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6508 3.2959C12.6508 3.43262 12.6508 3.54199 12.6508 3.67871C12.6508 7.47949 9.77969 11.8271 4.50234 11.8271C2.86172 11.8271 1.35781 11.3623 0.0999999 10.542C0.31875 10.5693 0.5375 10.5967 0.783594 10.5967C2.12344 10.5967 3.35391 10.1318 4.33828 9.36621C3.08047 9.33887 2.01406 8.51855 1.65859 7.37012C1.85 7.39746 2.01406 7.4248 2.20547 7.4248C2.45156 7.4248 2.725 7.37012 2.94375 7.31543C1.63125 7.04199 0.646875 5.89355 0.646875 4.49902V4.47168C1.02969 4.69043 1.49453 4.7998 1.95937 4.82715C1.16641 4.30762 0.674219 3.43262 0.674219 2.44824C0.674219 1.90137 0.810937 1.40918 1.05703 0.999023C2.47891 2.72168 4.61172 3.87012 6.99062 4.00684C6.93594 3.78809 6.90859 3.56934 6.90859 3.35059C6.90859 1.76465 8.19375 0.479492 9.77969 0.479492C10.6 0.479492 11.3383 0.807617 11.8852 1.38184C12.5141 1.24512 13.143 0.999023 13.6898 0.670898C13.4711 1.35449 13.0336 1.90137 12.432 2.25684C13.0062 2.20215 13.5805 2.03809 14.0727 1.81934C13.6898 2.39355 13.1977 2.88574 12.6508 3.2959Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="py-[13px] max-w-[40px] w-full rounded-[20px] border-[#FFF] border-[1px] flex justify-center items-center hover:  cursor-pointer">
                  <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.71438 12.3896H1.17141V4.21387H3.71438V12.3896ZM2.42922 3.12012C1.63625 3.12012 0.980005 2.43652 0.980005 1.61621C0.980005 0.823242 1.63625 0.166992 2.42922 0.166992C3.24954 0.166992 3.90579 0.823242 3.90579 1.61621C3.90579 2.43652 3.24954 3.12012 2.42922 3.12012ZM13.2027 12.3896H10.687V8.4248C10.687 7.46777 10.6597 6.26465 9.34719 6.26465C8.03469 6.26465 7.84329 7.27637 7.84329 8.34277V12.3896H5.30032V4.21387H7.73391V5.33496H7.76125C8.11672 4.70605 8.93704 4.02246 10.1675 4.02246C12.7378 4.02246 13.23 5.71777 13.23 7.90527V12.3896H13.2027Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="py-[13px] max-w-[40px] w-full rounded-[20px] border-[#FFF] border-[1px] flex justify-center items-center hover:  cursor-pointer">
                  <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.105 2.99512C8.82766 2.99512 10.2495 4.41699 10.2495 6.13965C10.2495 7.88965 8.82766 9.28418 7.105 9.28418C5.355 9.28418 3.96047 7.88965 3.96047 6.13965C3.96047 4.41699 5.355 2.99512 7.105 2.99512ZM7.105 8.19043C8.2261 8.19043 9.12844 7.28809 9.12844 6.13965C9.12844 5.01855 8.2261 4.11621 7.105 4.11621C5.95657 4.11621 5.05422 5.01855 5.05422 6.13965C5.05422 7.28809 5.98391 8.19043 7.105 8.19043ZM11.0972 2.88574C11.0972 3.2959 10.7691 3.62402 10.3589 3.62402C9.94875 3.62402 9.62063 3.2959 9.62063 2.88574C9.62063 2.47559 9.94875 2.14746 10.3589 2.14746C10.7691 2.14746 11.0972 2.47559 11.0972 2.88574ZM13.1753 3.62402C13.23 4.63574 13.23 7.6709 13.1753 8.68262C13.1206 9.66699 12.9019 10.5146 12.1909 11.2529C11.48 11.9639 10.605 12.1826 9.62063 12.2373C8.60891 12.292 5.57375 12.292 4.56204 12.2373C3.57766 12.1826 2.73 11.9639 1.99172 11.2529C1.28079 10.5146 1.06204 9.66699 1.00735 8.68262C0.952661 7.6709 0.952661 4.63574 1.00735 3.62402C1.06204 2.63965 1.28079 1.76465 1.99172 1.05371C2.73 0.342773 3.57766 0.124023 4.56204 0.0693359C5.57375 0.0146484 8.60891 0.0146484 9.62063 0.0693359C10.605 0.124023 11.48 0.342773 12.1909 1.05371C12.9019 1.76465 13.1206 2.63965 13.1753 3.62402ZM11.8628 9.74902C12.1909 8.95605 12.1089 7.04199 12.1089 6.13965C12.1089 5.26465 12.1909 3.35059 11.8628 2.53027C11.6441 2.01074 11.2339 1.57324 10.7144 1.38184C9.89407 1.05371 7.98 1.13574 7.105 1.13574C6.20266 1.13574 4.2886 1.05371 3.49563 1.38184C2.94875 1.60059 2.5386 2.01074 2.31985 2.53027C1.99172 3.35059 2.07375 5.26465 2.07375 6.13965C2.07375 7.04199 1.99172 8.95605 2.31985 9.74902C2.5386 10.2959 2.94875 10.7061 3.49563 10.9248C4.2886 11.2529 6.20266 11.1709 7.105 11.1709C7.98 11.1709 9.89407 11.2529 10.7144 10.9248C11.2339 10.7061 11.6714 10.2959 11.8628 9.74902Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* services-section */}
          <div className="flex max-w-[874px] w-full  justify-between">
            {/* services */}
            <div className="max-w-[146.75px] w-full flex flex-col gap-[25px] ">
              <div className="max-w-[83px] w-full text-[22px]  font-Jost font-[500] leading-[26px] text-[#FFF]">
                  Services
              </div>
              <div className="flex flex-col gap-[20px] ">
                <a href="/" className="max-w-[115px] w-full text-[16px]  font-kumbh text-[#fff] leading-[26px]   hover:border-b-sky-600  hover:border-b   border-b border-b-transparent ">
                  <div className="  border-b-[2px] border-transparent">Product Design</div> 
                </a>
                <a href="/" className="max-w-[146.75px] w-full text-[16px]  font-kumbh text-[#FFF] leading-[26px]  hover:border-b-sky-600  hover:border-b   border-b border-b-transparent">
                  Business Consulting
                </a>
                <a href="/" className="max-w-[126.64px] w-full text-[16px]  font-kumbh text-[#FFF] leading-[26px]  hover:border-b-sky-600  hover:border-b   border-b border-b-transparent">
                  Custome Service
                </a>
                <a href="/" className="max-w-[105.84px] w-full text-[16px]  font-kumbh text-[#FFF] leading-[26px]  hover:border-b-sky-600  hover:border-b   border-b border-b-transparent">
                  Brand Identity
                </a>
                <a href="/" className="max-w-[133.11px] w-full text-[16px]  font-kumbh text-[#FFF] leading-[26px]  hover:border-b-sky-600  hover:border-b   border-b border-b-transparent">
                  SEO Optimization
                </a>
              </div>
            </div>
            {/* Contact */}
            <div className="max-w-[198px] w-full flex flex-col gap-[25px] ">
              <div className="max-w-[74.98px] w-full text-[22px]  font-Jost font-[500] leading-[26px] text-[#FFF]">
                Contact
              </div>
              <div className="flex flex-col gap-[20px]">
                <a href="/" className="max-w-[197.95px] w-full text-[16px]  font-kumbh text-[#FFF] leading-[26px] hover:border-b-sky-600  hover:border-b   border-b border-b-transparent hover:animate-underline-left-to-right">
                  785 Main Street, 2nd Block melbourne, australia
                </a>
                <a href="/" className="max-w-[149.75px] w-full text-[16px]  font-kumbh text-[#FFF] leading-[26px]   hover:border-b-sky-600  hover:border-b   border-b border-b-transparent">
                  support@gmail.com
                </a>
                <a href="/" className="max-w-[126.64px] w-full text-[16px]  font-kumbh text-[#FFF] leading-[26px]  hover:border-b-sky-600  hover:border-b   border-b border-b-transparent">
                  Custome Service
                </a>
                <a href="/" className="max-w-[128px] w-full text-[16px]  font-kumbh text-[#FFF] leading-[26px]  hover:border-b-sky-600  hover:border-b   border-b border-b-transparent">
                  +000 (123) 456 88
                </a>
              </div>
            </div>
            {/* News-Letter */}
            <div className="max-w-[310px] w-full flex flex-col gap-[25px] ">
              <div className="max-w-[105.26px] w-full text-[22px]  font-Jost font-[500] leading-[26px] text-[#FFF]">
                Newsletter
              </div>
              <div className="flex flex-col gap-[20px]">
                <a href="/" className="max-w-[287.78px] w-full text-[24px]  font-Jost font-[500] leading-[35px] text-[#FFF]    ">
                  Get Every Single Update to Join Our Newsletter
                </a>
                <div className="max-w-[304px] w-full flex   justify-between    pt-[19px] pb-[20px] border-b-[1px] transform transition-transform cursor-pointer  ">
                  <div className="flex gap-[11.8px] items-center">
                    <div>
                      <svg
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.8125 0.889648C17.7266 0.889648 18.5 1.66309 18.5 2.57715V12.7021C18.5 13.6514 17.7266 14.3896 16.8125 14.3896H2.1875C1.23828 14.3896 0.5 13.6514 0.5 12.7021V2.57715C0.5 1.66309 1.23828 0.889648 2.1875 0.889648H16.8125ZM16.8125 2.57715H2.1875V4.01855C2.96094 4.68652 4.22656 5.6709 6.89844 7.78027C7.49609 8.2373 8.65625 9.3623 9.5 9.32715C10.3086 9.3623 11.4688 8.2373 12.0664 7.78027C14.7383 5.6709 16.0039 4.68652 16.8125 4.01855V2.57715ZM2.1875 12.7021H16.8125V6.19824C16.0039 6.83105 14.8438 7.74512 13.1211 9.11621C12.3125 9.71387 10.9766 11.0498 9.5 11.0146C7.98828 11.0498 6.61719 9.71387 5.84375 9.11621C4.12109 7.74512 2.96094 6.83105 2.1875 6.19824V12.7021Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="max-w-[107px] w-full ">
                      <input
                        type="text"
                        className="max-w-[107px] w-full outline-none bg-transparent text-[16px] text-[#fff] "
                        name=""
                        id=""
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  {/* signup-btn */}
                  <button className=" flex max-w-[80px] w-full gap-[6.52px] items-center transform transition-transform hover:scale-105 hover:cursor-pointer ">
                    <div className=" max-w-[67px] w-full text-[16px] font-kumbh  font-[600] text-[#fff]">
                      Sign Up{" "}
                    </div>
                    <div className=" max-w-[13px] w-full">
                      <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.25 5.60449L2.53125 9.32324C2.25781 9.59668 1.84766 9.59668 1.60156 9.32324L0.972656 8.72168C0.726562 8.44824 0.726562 8.03809 0.972656 7.79199L3.625 5.16699L0.972656 2.51465C0.726562 2.26855 0.726562 1.8584 0.972656 1.58496L1.60156 0.956055C1.84766 0.709961 2.25781 0.709961 2.53125 0.956055L6.25 4.6748C6.49609 4.94824 6.49609 5.3584 6.25 5.60449ZM11.5 4.6748C11.7461 4.94824 11.7461 5.3584 11.5 5.60449L7.78125 9.32324C7.53516 9.59668 7.09766 9.59668 6.85156 9.32324L6.22266 8.72168C5.97656 8.44824 5.97656 8.03809 6.22266 7.79199L8.875 5.13965L6.22266 2.51465C5.97656 2.26855 5.97656 1.83105 6.22266 1.58496L6.85156 0.956055C7.09766 0.709961 7.50781 0.709961 7.78125 0.956055L11.5 4.6748Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CopyRightAnd Faqs */}
        <div className="flex justify-between ">
          <div className="max-w-[281px] w-full text-[16px] font-kumbh leading-[30px] text-[#FFFFFFB2]">
            Copy@ 2023 Atsu. All Rights reserved
          </div>
          <div className=" max-w-[271px] w-full flex  text-[16px] font-kumbh leading-[30px] text-[#FFFFFFB2] justify-between">
            <a href="/setting"><div className="max-w-[129px] w-full">Setting & Privacy</div></a>
            <a href="/faq"><div className="max-w-[39px] w-full "> Faqs</div></a> 
            <a href="#contact"><div className="max-w-[60px] w-full">Contact</div></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
