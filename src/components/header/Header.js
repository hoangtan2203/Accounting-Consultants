import React from "react";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    
  <div id="header ">
    <div className=" right-0 top-0 left-0  font-sans select-none">
      <div className="container relative pr-[15px] pl-[15px] mr-[171px] ml-[171px]">  
        <div className="bg-[#3a2c5f] text-white my-0 mx-[30px] py-0 px-[20px] relative h-[49px] w-[1080px]">
          <div className="absolute left-[-30px] top-[-33px] w-[38px] h-[79px] before:transform rotate-[139deg] bg-[#483a6d] mr-[10px]"></div>
          <p className="relative  bg-[#483a6d] float-left text-base pt-[9px] pr-[29px] pb-[15px] pl-[20px] ml-[-20px] font-light">Dịch Vụ Kế Toán tại Đà Nẵng
            <div className="absolute left-[-30px] top-[-33px] w-[37px] h-[79px] after:transform rotate-45 bg-[#483a6d] ml-[270px]"></div>
          </p>
          <ul className="ml-[380px] flex ">
            <li className=" relative text-sm mr-[80px] pt-[10px]">
              <svg className="absolute w-[30px] top-[5px] left-[-30px]" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path>
              </svg>0944.005.511</li>
            <li className=" relative text-sm mr-[80px] pt-[10px]">
              <svg className="absolute w-[30px]  top-[5px]  left-[-30px]" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
              </svg>
              28 Thanh Lương 20, Quận Cẩm Lệ, TP. Đà Nẵng</li>

            <li className=" relative text-sm pt-[10px]">
              <svg className="absolute w-[30px] top-[5px] left-[-30px]" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
              </svg>
              8:00 - 17:00</li>
          </ul>
          <div className=" absolute right-[-34.5px] top-[-34px] w-[41px] h-[79px] bg-[#3a2c5f] after:transform rotate-45 ml-[20px]"></div>
        </div>
      </div>
    </div>
    <Navbar/>
  </div>
  )
};

export default Header;