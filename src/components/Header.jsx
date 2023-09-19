import React from "react";

function Header({ extraClasses }) {
  return (
    <div
      className={` header z-10   flex justify-center items-center gap-[147px] pt-[64px] pb-[7px]  ${extraClasses} mx-auto`}
    >
      {/* navbar-logo */}
      <div>
        <a href="/home"><img src="/assets/Logo Navbar.svg" alt="" /></a>
        
      </div>
      {/* navbar options */}
      <div className="  font-Jost flex  justify-between items-center gap-[44.5px]">
        <a href="#home">
          <button className="flex  gap-[4.83px] justify-center items-center  max-w-[53px] w-full text-[#FFFFFF] font-[500] text-[20px] hover:underline underline-offset-[8px]">
            <span>Home</span>
            <img src="/assets/navbar-home-Arrow.svg" alt="" />
          </button>
        </a>
        <a href="#Clients">
          <button className="flex  gap-[4.83px] justify-center items-center  max-w-[53px] w-full text-[#FFFFFF] font-[500] text-[20px] hover:underline underline-offset-[8px]">
            <span>Clients</span>
            <img src="/assets/navbar-home-Arrow.svg" alt="" />
          </button>
        </a>
        <a href="#Services">
          <button className="flex  gap-[4.83px] justify-center items-center  max-w-[53px] w-full text-[#FFFFFF] font-[500] text-[20px] hover:underline underline-offset-[8px]">
            <span>Services</span>
            <img src="/assets/navbar-home-Arrow.svg" alt="" />
          </button>
        </a>
        <a href="#Projects">
          <button className="flex  gap-[4.83px] justify-center items-center  max-w-[53px] w-full text-[#FFFFFF] font-[500] text-[20px] hover:underline underline-offset-[8px]">
            <span>Projects</span>
            <img src="/assets/navbar-home-Arrow.svg" alt="" />
          </button>
        </a>
        <a href="#letsseeourcompany">
          <button className="flex  gap-[4.83px] justify-center items-center  max-w-[53px] w-full text-[#FFFFFF] font-[500] text-[20px] hover:underline underline-offset-[8px]">
            <span>About</span>
            <img src="/assets/navbar-home-Arrow.svg" alt="" />
          </button>
        </a>
        <button className="flex  gap-[4.83px] justify-center items-center  max-w-[53px] w-full text-[#FFFFFF] font-[500] text-[20px] hover:underline underline-offset-[8px]">
          <a href="#contact">Contact</a>
        </button>
      </div>
      {/* hamberger */}
      <div className="hamberger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="23"
          viewBox="0 0 29 23"
          fill="none"
        >
          <path
            d="M27.6262 2.99911H0.375017C0.270845 2.99911 0.1823 2.96265 0.10938 2.88973C0.03646 2.81681 0 2.72826 0 2.62409V1.12402C0 1.01985 0.03646 0.931305 0.10938 0.858385C0.1823 0.785465 0.270845 0.749006 0.375017 0.749006H27.6262C27.7304 0.749006 27.819 0.785465 27.8919 0.858385C27.9648 0.931305 28.0013 1.01985 28.0013 1.12402V2.62409C28.0013 2.72826 27.9648 2.81681 27.8919 2.88973C27.819 2.96265 27.7304 2.99911 27.6262 2.99911ZM27.6262 12.9996H0.375017C0.270845 12.9996 0.1823 12.9631 0.10938 12.8902C0.03646 12.8173 0 12.7287 0 12.6245V11.1245C0 11.0203 0.03646 10.9318 0.10938 10.8588C0.1823 10.7859 0.270845 10.7495 0.375017 10.7495H27.6262C27.7304 10.7495 27.819 10.7859 27.8919 10.8588C27.9648 10.9318 28.0013 11.0203 28.0013 11.1245V12.6245C28.0013 12.7287 27.9648 12.8173 27.8919 12.8902C27.819 12.9631 27.7304 12.9996 27.6262 12.9996ZM27.6262 23H0.375017C0.270845 23 0.1823 22.9635 0.10938 22.8906C0.03646 22.8177 0 22.7292 0 22.625V21.1249C0 21.0207 0.03646 20.9322 0.10938 20.8593C0.1823 20.7864 0.270845 20.7499 0.375017 20.7499H27.6262C27.7304 20.7499 27.819 20.7864 27.8919 20.8593C27.9648 20.9322 28.0013 21.0207 28.0013 21.1249V22.625C28.0013 22.7292 27.9648 22.8177 27.8919 22.8906C27.819 22.9635 27.7304 23 27.6262 23Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
