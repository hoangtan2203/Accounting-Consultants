import React from 'react';
import { useState, useEffect } from 'react';
import arrow from "./../../assest/icon/Arrow.svg"
import search from "./../../assest/icon/search.svg"
import arrowRight from "./../../assest/icon/ArrowRight.svg"
import Logo from '../../assest/image/logo/logo-web-6-1024x267-1.png'


const Navbar = () => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const offset = window.scrollY;
        setSticky(offset > 500);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (

        <div className={`w-full bg-[#ffffffcc] ${isSticky ? 'fixed top-0 z-[31] animate-fade-down animate-duration-500' : ''} `}>
        <div className='flex  h-[110px] ml-[175px]'>
          <a href="#" className="mx-[28px] my-[28px] w-[310px] h-[80px] inline-block">
            <img src={Logo} />
          </a>
          <div className='z-[21] h-full'>
            <div className=" flex select-none h-full">
                <div className='mt-[50px]  px-[30px] cursor-pointer text-sm hover:text-green-500'>TRANG CHỦ</div>
                <div className='relative group h-full' >
                    <div className=' cursor-pointer flex mt-[50px] mr-[20px] text-sm hover:text-green-500'
                    >DỊCH VỤ
                        <img src={arrow} className='w-[20px] ml-[10px]'/>
                    </div>
                    <div className=' border-gray-300 bg-white absolute top-[90px] border-solid w-[250px] hidden shadow-md group-hover:block hover:block z-[5]'>
                        <div className='cursor-pointer hover:bg-green-500 hover:text-white p-[10px] border-[0.5px] box-border'>Dịch vụ kế toán tại Đà Nẵng</div>
                        <div className='cursor-pointer hover:bg-green-500 hover:text-white p-[10px] border-[0.5px] box-border'>Dịch vụ kế trưởng</div>
                        <div className='relative cursor-pointer flex justify-between hover:bg-green-500 hover:text-white p-[10px] border-[0.5px] box-border group/first'>Dịch vụ kế toán thuế
                            <img src={arrowRight} className='w-[20px] ml-[10px]'/>
                            <ul className="absolute hidden l-10 text-gray-700 pt-1  top-[-6px] left-[250px] w-[220px] group-hover/first:block ">
                                <li className=" bg-white hover:bg-green-500 hover:text-white p-[10px] border-[0.5px] box-border">Dịch vụ kế toán tại Đà Nẵng</li>
                                <li className=' bg-white hover:bg-green-500 hover:text-white p-[10px] border-[0.5px] box-border'>Dịch gỡ rối sự cố thuế</li>
                            </ul>
                        </div>
                        <div className='cursor-pointer hover:bg-green-500 hover:text-white p-[10px] border-[0.5px] box-border'>cho thuê văn phòng ảo</div>
                        <div className='cursor-pointer flex justify-between hover:bg-green-500 hover:text-white p-[10px] border-[0.5px] box-border group/second'>Dịch vụ thành lập công ty
                        <img src={arrowRight} className='w-[20px] ml-[10px]'/>
                            <ul className="absolute hidden l-10 text-gray-700 pt-1 top-[180px] left-[250px] w-[370px] group-hover/second:block ">
                                <li className=" bg-white hover:bg-green-500 hover:text-white p-[10px] border-[0.5px] box-border">Dịch vụ đăng ký kinh doanh tại Đà Nẵng</li>
                                <li className=' bg-white hover:bg-green-500 hover:text-white p-[10px] border-[0.5px] box-border'>Dịch vụ thành lập công ty tại Đà Nẵng</li>
                                <li className=" bg-white hover:bg-green-500 hover:text-white p-[10px] border-[0.5px] box-border">Dịch vụ thành lập doanh nghiệp tại Đà Nẵng</li>
                                <li className=' bg-white hover:bg-green-500 hover:text-white p-[10px] border-[0.5px] box-border'>Dịch vụ làm giấy phép kinh doanh tại Đà Nẵng</li>
                            </ul>
                        </div>
                        <div className='cursor-pointer hover:bg-green-500 hover:text-white p-[10px] border-[0.5px] box-border'>Đăng ký thương hiệu độc quyền</div>
                    </div>
                </div>
                <div className='relative group '>
                    <div className=' cursor-pointer flex mt-[50px] text-sm hover:text-green-500'
                    >BẢNG GIÁ
                        <img src={arrow} className='w-[20px] ml-[10px]'/>
                    </div>
                    <div className=' border-gray-300 bg-white absolute top-[90px] border-solid w-[270px] hidden shadow-md group-hover:block hover:block z-[5]'>
                        <div className='cursor-pointer hover:bg-green-500 hover:text-white p-[10px] border-[0.5px] box-border'>Bảng giá dịch vụ ĐKKD</div>
                        <div className='cursor-pointer hover:bg-green-500 hover:text-white p-[10px] border-[0.5px] box-border'>Bảng giá dịch vụ văn phòng ảo</div>
                        <div className='cursor-pointer hover:bg-green-500 hover:text-white p-[10px] border-[0.5px] box-border'>Bảng giá dịch vụ kế toán</div>
                        <div className='cursor-pointer hover:bg-green-500 hover:text-white p-[10px] border-[0.5px] box-border'>Bảng giá dịch vụ thành lập công ty</div>
                        <div className='cursor-pointer hover:bg-green-500 hover:text-white p-[10px] border-[0.5px] box-border'>Bảng giá Dịch vụ báo cao tài chính</div>
                    </div>
                </div>
                <div className='mt-[50px] px-[30px] cursor-pointer text-sm hover:text-green-500'>BLOG</div>
                <div className='mt-[50px] px-[30px] cursor-pointer text-sm hover:text-green-500'>LIÊN HỆ</div> 
                <div className='mt-[50px] px-[30px] cursor-pointer text-sm hover:text-green-500'>GIỚI THIỆU</div>
                <div className=' mt-[30px] cursor-pointer ml-[20px] '>
                    <img src={search} className='w-[40px] ml-[10px] border-l-[1px] border-black pl-[10px] py-[20px]'/>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Navbar;