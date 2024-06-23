import React from 'react';
import pic1 from "./../../assest/image/slider/1.jpg.webp";
import pic2 from "./../../assest/image/slider/2.jpg.webp";
import pic3 from "./../../assest/image/slider/3.jpg.webp";
import pic4 from "./../../assest/image/slider/4.jpg.webp";
import { Carousel } from 'flowbite';


// Lặp qua từng nút và thêm lớp và đặt background none

const Wrapper = (props) => {
    return (
        <div id="default-carousel" className="relative w-full mb-[120px]" data-carousel="slide"  >
            <div className="relative overflow-hidden rounded-lg h-[680px]">
                <div className=" hidden duration-700 ease-in-out  " data-carousel-item >
                    <img
                        src={pic1}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-[52%] left-1/2 "
                    />
                </div>
                <div className="hidden duration-700 ease-in-out"  data-carousel-item>
                    <img
                        src={pic2}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-[52%] left-1/2"

                    />
                </div>
                <div className="duration-700 ease-in-out" data-carousel-item>
                    <img
                        src={pic3}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-[52%] left-1/2"

                    />
                </div>
                <div className="duration-700 ease-in-out" data-carousel-item>
                    <img
                        src={pic4}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-[52%] left-1/2"
                    />
                </div>
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-[-121px] left-1/2  rtl:space-x-reverse  border-solid border-1 border-gray-500 shadow-2xl bg-black w-full" >
                <div className=' w-[172px] h-[128px] border-b-[2px] border-t-[2px] border-solid border-gray-300 bg-white'></div>

                <button
                    type="button"
                    className='w-[292px] h-[128px] border-solid border-[2px] border-gray-300'
                    aria-current="true"
                    aria-label="Slide 1"
                    data-carousel-slide-to={0}
                >right here</button>
                <button
                    type="button"
                    className='w-[292px] h-[128px] border-solid border-[2px] border-gray-300'
                    aria-current="true"
                    aria-label="Slide 2"
                    data-carousel-slide-to={1}
                >
                    <h1 className='font-sans font-bold text-[20px]'>CHUYÊN NGHIỆP</h1>
                    <p>không ngừng sáng tạo và hoàn thiện</p>
                </button>
                <button
                    type="button"
                    className='w-[292px] h-[128px] border-solid border-[2px] border-gray-300'
                    aria-current="true"
                    aria-label="Slide 3"
                    data-carousel-slide-to={2}
                >
                    <h1 className='font-sans font-bold text-[20px]'>CHẤT LƯỢNG</h1>
                    <p>không ngừng sáng tạo và hoàn thiện</p>
                </button>
                <button
                    type="button"
                    className='w-[292px] h-[128px] border-solid border-[2px] border-gray-300'
                    aria-current="true"
                    aria-label="Slide 4"
                    data-carousel-slide-to={3}
                >
                    <h1 className='font-sans font-bold text-[20px]'>NHANH CHÓNG</h1>
                    <p>không ngừng sáng tạo và hoàn thiện</p>
                </button>
                <div className=' w-[172px] h-[128px]  border-b-[2px] border-t-[2px] border-solid border-gray-300 bg-white' ></div>
            </div>
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Wrapper;