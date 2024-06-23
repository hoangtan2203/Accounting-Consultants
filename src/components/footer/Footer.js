import React from 'react';
import logo from "./../../assest/image/logo/logo-web-4-trang-1.png.webp";
import Logofooter from "./../../assest/image/logo/footerLogo.png";
import logoFooter from "./../../assest/icon/footer.svg"



const Footer = () => {
  return (
    <div id='footer' className='w-full h-[300px] font-sans' >
      <div className='flex w-full'>
        <div className='bg-blue-700 w-[16.67%] h-[5px] ' ></div>
        <div className='bg-blue-400 w-[16.67%] h-[5px] '></div>
        <div className='bg-green-700 w-[16.67%] h-[5px] '></div>
        <div className='bg-green-400 w-[16.67%] h-[5px] '></div>
        <div className='bg-yellow-400 w-[16.67%] h-[5px] '></div>
        <div className='bg-yellow-200 w-[16.67%] h-[5px] '></div>
      </div>
      <div className='bg-[#323946] w-full h-full'>
        <div className='flex justify-center pt-[60px]'>
          <div className='w-[255px]'>
            <i>
              <img src={logo} className='w-[262.5px] h-[68.56px] mb-[20px]' />
            </i>
            <ul className='list-disc ml-[20px] text-white leading-8'>
              <li className='text-[16px]'>28 Thanh Lương 20, Hoà Xuân, Cẩm Lệ, Đà Nẵng</li>
              <li>Zalo: 0944 055 511</li>
              <li>Mobile: 0942 419 968</li>
            </ul>
          </div>
          <div className='w-[225px] mx-[60px]'>
            <h1 className='pb-[30px] pt-[20px] text-[18px] font-bold text-white mb-[10px]'>DỊCH VỤ CHÍNH</h1>
            <ul className='list-disc ml-[20px] text-white leading-8'>
              <li>Dịch vụ văn phòng ảo</li>
              <li>Dịch vụ kế toán Thuế</li>
              <li>Dịch vụ thành lập doanh nghiệp</li>
            </ul>
          </div>
          <div className='w-[225px]'>
            <h1 className='pb-[30px] pt-[20px] text-[18px] font-bold text-white mb-[10px]'>BÀI VIẾT MỚI</h1>
            <ul className='list-disc ml-[20px] text-white leading-8'>
              <li>Danh sách liên hệ các chi cục thuế Đà Nẵng</li>
              <li>Dịch vụ kế toán chuyên nghiệp tại Đà Nẵng</li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
      <div className='bg-[#2d3440] py-[20px]'>
        <div className='ml-[200px] flex justify-between h-[50px] w-[80%]'>
          <div>
            <img src={Logofooter} className='w-[121px] h-[24px]' />
          </div>
          <div className='relative flex pl-[25px]'>
            <img className=' absolute w-[14px] h-[14px] left-0 top-[5px] ' src={logoFooter}/>
            <label className='text-white'>
              2023 DN ACCOUNTING - Dịch Vụ Kế Toán Tại Đà Nẵng
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer