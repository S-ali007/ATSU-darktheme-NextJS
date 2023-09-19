import React from 'react'

function PeopleSayAboutCards({designation,img,text,username,id}) {
  return (
    <div>
       <div
                  className="max-w-[555px] w-full bg-[#292738] py-[50px] pl-[70px] pr-[50px]  "
                  key={id}
                >
                  <div className="max-w-[66px] w-full">
                    <img src={img} alt="" />
                  </div>
                  {/* card-text */}
                  <div className="mt-[23px] max-w-[425px] w-full pt-[3px] pr-[1.33px] pb-[35px] border-b-[1px] border-[#464548]">
                    <div className="text-[22px]   font-kumbh text-[#67687A] ">
                      {text}
                    </div>
                  </div>
                  {/*info-box-richards s.books  */}
                  <div className="flex max-w-[425px] w-full justify-between items-center mt-[40px]">
                    <div className=" flex flex-col gap-[4.8px]">
                      <div className="text-[24px] font-Jost font-[600] text-[#FFF]">
                        {username}
                      </div>
                      <div className="text-[16px]   font-kumbh text-[#67687A]  ">
                        {designation}
                      </div>
                    </div>
                    <div className="max-w-[101px] w-full">
                      <img src="/assets/icon-chat-cards.svg" alt="" />
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default PeopleSayAboutCards
